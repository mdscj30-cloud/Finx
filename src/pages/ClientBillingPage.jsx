import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CreditCard, Download, CheckCircle, Shield, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const ClientBillingPage = () => {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setSubscription({
        planName: 'Pro Plan',
        renewsOn: 'October 1, 2025',
        amount: 299,
        currency: 'USD',
      });
      setInvoices([
        { id: 'INV-2025-003', date: '2025-09-01', amount: '$299.00', status: 'Paid', url: '#' },
        { id: 'INV-2025-002', date: '2025-08-01', amount: '$299.00', status: 'Paid', url: '#' },
        { id: 'INV-2025-001', date: '2025-07-01', amount: '$299.00', status: 'Paid', url: '#' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAction = (description) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: description || "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleChangePlan = () => {
    setIsStripeModalOpen(true);
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Billing - FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow p-8 bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Billing & Subscriptions</h1>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-lg font-semibold mb-4 text-slate-800">Current Plan</h2>
                {subscription && (
                  <>
                    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div>
                        <p className="text-xl font-bold text-blue-800">{subscription.planName}</p>
                        <p className="text-sm text-slate-600">Renews on {subscription.renewsOn}</p>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">${subscription.amount}<span className="text-base font-normal text-slate-500">/month</span></p>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <Button onClick={handleChangePlan}>Change Plan</Button>
                      <Button variant="outline" onClick={() => handleAction('Subscription cancellation requires contacting support.')}>Cancel Subscription</Button>
                    </div>
                  </>
                )}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl shadow-sm border">
                <h2 className="text-lg font-semibold p-6 text-slate-800">Invoice History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                      <tr>
                        <th scope="col" className="px-6 py-3">Invoice ID</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Download</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="bg-white border-b hover:bg-slate-50">
                          <th scope="row" className="px-6 py-4 font-medium text-slate-900">{invoice.id}</th>
                          <td className="px-6 py-4">{invoice.date}</td>
                          <td className="px-6 py-4">{invoice.amount}</td>
                          <td className="px-6 py-4">
                            <span className="flex items-center gap-1.5 text-green-600 text-xs font-semibold"><CheckCircle size={12} /> {invoice.status}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleAction('Invoice download is in development.')}>
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-xl shadow-sm border h-fit">
              <h2 className="text-lg font-semibold mb-4 text-slate-800">Payment Method</h2>
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-slate-50">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-700">Visa ending in 1234</p>
                  <p className="text-sm text-slate-500">Expires 12/2028</p>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => handleAction('Payment method updates are coming soon!')}>Update Payment Method</Button>
              <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                <Shield size={14} />
                <p>All payments are processed securely by Stripe.</p>
              </div>
            </motion.div>
          </div>
        )}
      </main>
      <Dialog open={isStripeModalOpen} onOpenChange={setIsStripeModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enable Live Subscriptions with Stripe</DialogTitle>
            <DialogDescription>
              To manage plans and accept real payments, you need to connect your Stripe account. This allows for secure, live billing.
              <br /><br />
              Follow our step-by-step guide to get set up in minutes.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsStripeModalOpen(false)}>Cancel</Button>
            <Button asChild>
              <a href="https://www.hostinger.com/support/hostinger-horizons-how-to-sell-subscriptions-with-stripe/" target="_blank" rel="noopener noreferrer">
                View Setup Guide <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClientBillingPage;