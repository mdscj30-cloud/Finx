import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const reportsData = [
  {
    title: 'Q3 2025 Profit & Loss Statement',
    date: 'Generated on 2025-10-05',
    icon: BarChart3,
    color: 'bg-blue-500',
  },
  {
    title: '2025 Balance Sheet',
    date: 'Generated on 2025-10-02',
    icon: FileText,
    color: 'bg-green-500',
  },
  {
    title: 'Cash Flow Statement - September 2025',
    date: 'Generated on 2025-10-01',
    icon: BarChart3,
    color: 'bg-purple-500',
  },
  {
    title: 'Annual Expense Report 2024',
    date: 'Generated on 2025-01-15',
    icon: FileText,
    color: 'bg-yellow-500',
  },
];

const ReportCard = ({ title, date, icon: Icon, color, index }) => {
  const handleDownload = () => {
    toast({
      title: "Generating PDF...",
      description: `Your report "${title}" is being prepared for download. This is a demo feature.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
          <div className="flex items-center text-xs text-slate-500 mt-1">
            <Calendar className="w-3 h-3 mr-1.5" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-4">
        <Button onClick={handleDownload} className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </motion.div>
  );
};

const ClientReportsPage = () => {
  const handleGenerateReport = () => {
    toast({
      title: "Feature in Development",
      description: "Custom report generation is coming soon! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Reports - FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Financial Reports</h1>
          <Button onClick={handleGenerateReport} variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Generate New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportsData.map((report, index) => (
            <ReportCard key={index} {...report} index={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ClientReportsPage;