import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Users, DollarSign, TrendingUp, Smile, FileText, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const PartnershipDashboard = () => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState(null);
  const [partnership, setPartnership] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;

      try {
        // Fetch Partnership Details
        const { data: partData, error: partError } = await supabase
          .from('partnerships')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (partData) {
          setPartnership(partData);
          
          // Fetch Metrics
          const { data: metData, error: metError } = await supabase
            .from('partnership_metrics')
            .select('*')
            .eq('partnership_id', partData.id)
            .single();
            
          if (metData) setMetrics(metData);
        } else {
            // Mock Data for Demo Purposes if no DB entry exists
            setPartnership({ firm_name: 'Demo Firm' });
            setMetrics({
                active_clients: 42,
                monthly_revenue: 21000,
                partner_monthly_revenue: 7350,
                partner_annual_revenue: 88200,
                satisfaction_score: 98,
                survey_responses: 35,
                new_clients_this_month: 4,
                revenue_growth: 12.5,
                recent_activity: [
                    { type: 'client_onboarded', text: 'New client "TechStart Inc" onboarded', date: '2h ago' },
                    { type: 'payment', text: 'Monthly revenue share payout processed', date: '1d ago' },
                    { type: 'support', text: 'Ticket #402 resolved by dedicated manager', date: '3d ago' }
                ]
            });
        }
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return <div className="flex justify-center items-center h-96"><Loader2 className="w-12 h-12 animate-spin text-blue-600" /></div>;
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Partner Dashboard</h1>
          <p className="text-slate-500">Welcome back, {partnership?.firm_name || 'Partner'}</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Download Reports</Button>
            <Button>Add New Client</Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics?.active_clients || 0}</div>
            <p className="text-xs text-muted-foreground">+{metrics?.new_clients_this_month || 0} this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics?.monthly_revenue || 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{metrics?.revenue_growth || 0}% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Share (Mo)</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(metrics?.partner_monthly_revenue || 0).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Proj. Annual: ${(metrics?.partner_annual_revenue || 0).toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Client Satisfaction</CardTitle>
            <Smile className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics?.satisfaction_score || 0}%</div>
            <p className="text-xs text-muted-foreground">Based on {metrics?.survey_responses || 0} responses</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {metrics?.recent_activity?.map((activity, idx) => (
                            <div key={idx} className="flex items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                <div className={`w-2 h-2 mt-2 rounded-full mr-4 ${activity.type === 'payment' ? 'bg-green-500' : activity.type === 'support' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">{activity.text}</p>
                                    <p className="text-xs text-slate-500">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Support Resources */}
        <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-100">
                <CardHeader>
                    <CardTitle className="text-blue-900">Partner Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                        <FileText className="w-4 h-4 mr-2" /> Documentation
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                        <ExternalLink className="w-4 h-4 mr-2" /> Marketing Kit
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-blue-700 hover:text-blue-800 hover:bg-blue-100">
                        <Users className="w-4 h-4 mr-2" /> Training Portal
                    </Button>
                    <div className="pt-4 mt-4 border-t border-blue-200">
                        <p className="text-sm text-blue-800 mb-2 font-medium">Need help?</p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Partner Support</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default PartnershipDashboard;