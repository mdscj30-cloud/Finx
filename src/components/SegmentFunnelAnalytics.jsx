import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supabase } from '@/lib/customSupabaseClient';
import { Loader2 } from 'lucide-react';

const SegmentFunnelAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch leads grouped by segment
      const { data: leads, error } = await supabase
        .from('leads')
        .select('segment, created_at, status');

      if (error) {
        console.error("Error fetching analytics:", error);
        setLoading(false);
        return;
      }

      // Process data for chart
      const segments = ['smb', 'cpa', 'startup', 'saas', 'ecommerce'];
      const processedData = segments.map(seg => {
        const segmentLeads = leads.filter(l => l.segment === seg);
        return {
          name: seg.toUpperCase(),
          Leads: segmentLeads.length,
          Conversions: segmentLeads.filter(l => l.status === 'converted').length
        };
      });

      setData(processedData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg m-8">
      <h2 className="text-2xl font-bold mb-6">Funnel Performance</h2>
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Leads" fill="#3b82f6" />
            <Bar dataKey="Conversions" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SegmentFunnelAnalytics;