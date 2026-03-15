import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import {
  ArrowUpRight, ArrowDownLeft, FileText, CheckCircle, Clock, AlertCircle,
  Building2, TrendingUp, TrendingDown, RefreshCw, Filter, Download,
  Search, ChevronDown, Link as LinkIcon, DollarSign, BarChart2, BookOpen,
  Wallet, Receipt, CreditCard, Landmark, ShoppingCart, Plane, Wrench, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

// ─── Mock data (populated from QuickBooks when connected) ────────────────────

const mockTransactions = [
  { id: 'TXN-001', date: '2026-03-14', description: 'Client Payment — INV-0042', category: 'Income', account: 'Checking', amount: 4800, type: 'credit' },
  { id: 'TXN-002', date: '2026-03-13', description: 'AWS Cloud Services', category: 'Software & SaaS', account: 'Credit Card', amount: -312.50, type: 'debit' },
  { id: 'TXN-003', date: '2026-03-12', description: 'Client Payment — INV-0041', category: 'Income', account: 'Checking', amount: 2200, type: 'credit' },
  { id: 'TXN-004', date: '2026-03-12', description: 'Office Rent — March', category: 'Rent', account: 'Checking', amount: -3500, type: 'debit' },
  { id: 'TXN-005', date: '2026-03-11', description: 'Gusto Payroll', category: 'Payroll', account: 'Checking', amount: -8400, type: 'debit' },
  { id: 'TXN-006', date: '2026-03-10', description: 'Stripe Payout', category: 'Income', account: 'Checking', amount: 6150, type: 'credit' },
  { id: 'TXN-007', date: '2026-03-09', description: 'Google Workspace', category: 'Software & SaaS', account: 'Credit Card', amount: -84, type: 'debit' },
  { id: 'TXN-008', date: '2026-03-08', description: 'Client Refund — INV-0038', category: 'Refund', account: 'Checking', amount: -500, type: 'debit' },
  { id: 'TXN-009', date: '2026-03-07', description: 'Business Insurance Premium', category: 'Insurance', account: 'Checking', amount: -920, type: 'debit' },
  { id: 'TXN-010', date: '2026-03-06', description: 'Consulting Revenue', category: 'Income', account: 'Checking', amount: 3600, type: 'credit' },
  { id: 'TXN-011', date: '2026-03-05', description: 'Flight to NYC — Client Meeting', category: 'Travel', account: 'Credit Card', amount: -612, type: 'debit' },
  { id: 'TXN-012', date: '2026-03-04', description: 'QuickBooks Subscription', category: 'Software & SaaS', account: 'Credit Card', amount: -35, type: 'debit' },
];

const mockInvoices = [
  { id: 'INV-0043', date: '2026-03-15', due: '2026-04-14', client: 'Meridian Tech LLC', amount: 6200, status: 'unpaid' },
  { id: 'INV-0042', date: '2026-03-10', due: '2026-04-09', client: 'Sunrise Bakery Co.', amount: 4800, status: 'paid' },
  { id: 'INV-0041', date: '2026-03-05', due: '2026-04-04', client: 'BlueStar Consulting', amount: 2200, status: 'paid' },
  { id: 'INV-0040', date: '2026-02-28', due: '2026-03-29', client: 'Atlas Ventures Inc.', amount: 9500, status: 'overdue' },
  { id: 'INV-0039', date: '2026-02-20', due: '2026-03-21', client: 'Green Valley Farms', amount: 1400, status: 'overdue' },
  { id: 'INV-0038', date: '2026-02-15', due: '2026-03-16', client: 'Meridian Tech LLC', amount: 5000, status: 'paid' },
  { id: 'INV-0037', date: '2026-02-10', due: '2026-03-11', client: 'TechNova Solutions', amount: 3300, status: 'paid' },
];

const mockBills = [
  { id: 'BILL-088', date: '2026-03-14', due: '2026-04-13', vendor: 'AWS', amount: 312.50, status: 'unpaid' },
  { id: 'BILL-087', date: '2026-03-10', due: '2026-03-24', vendor: 'WeWork — Lease', amount: 3500, status: 'paid' },
  { id: 'BILL-086', date: '2026-03-08', due: '2026-03-22', vendor: 'Nationwide Insurance', amount: 920, status: 'paid' },
  { id: 'BILL-085', date: '2026-03-01', due: '2026-03-15', vendor: 'Gusto Payroll Services', amount: 8400, status: 'paid' },
  { id: 'BILL-084', date: '2026-02-25', due: '2026-03-11', vendor: 'Office Depot Supplies', amount: 248, status: 'overdue' },
  { id: 'BILL-083', date: '2026-02-20', due: '2026-03-06', vendor: 'Verizon Business', amount: 185, status: 'overdue' },
];

const mockChartOfAccounts = [
  { type: 'Assets', accounts: [
    { name: 'Business Checking — Chase', number: '1010', balance: 84320, normal: 'debit' },
    { name: 'Business Savings — Chase', number: '1020', balance: 42000, normal: 'debit' },
    { name: 'Accounts Receivable', number: '1200', balance: 21600, normal: 'debit' },
    { name: 'Prepaid Expenses', number: '1400', balance: 3200, normal: 'debit' },
  ]},
  { type: 'Liabilities', accounts: [
    { name: 'Accounts Payable', number: '2000', balance: 12650, normal: 'credit' },
    { name: 'Credit Card — Amex', number: '2100', balance: 4821, normal: 'credit' },
    { name: 'Payroll Liabilities', number: '2200', balance: 2310, normal: 'credit' },
  ]},
  { type: 'Income', accounts: [
    { name: 'Service Revenue', number: '4000', balance: 62400, normal: 'credit' },
    { name: 'Consulting Revenue', number: '4100', balance: 18200, normal: 'credit' },
    { name: 'Other Income', number: '4900', balance: 1450, normal: 'credit' },
  ]},
  { type: 'Expenses', accounts: [
    { name: 'Payroll & Benefits', number: '6000', balance: 25200, normal: 'debit' },
    { name: 'Rent & Occupancy', number: '6100', balance: 10500, normal: 'debit' },
    { name: 'Software & SaaS', number: '6200', balance: 2840, normal: 'debit' },
    { name: 'Travel & Meals', number: '6300', balance: 1840, normal: 'debit' },
    { name: 'Insurance', number: '6400', balance: 2760, normal: 'debit' },
    { name: 'Marketing & Ads', number: '6500', balance: 4200, normal: 'debit' },
  ]},
];

const mockPL = {
  period: 'Jan – Mar 2026',
  income: [
    { label: 'Service Revenue', current: 62400, prior: 54200 },
    { label: 'Consulting Revenue', current: 18200, prior: 14800 },
    { label: 'Other Income', current: 1450, prior: 900 },
  ],
  expenses: [
    { label: 'Payroll & Benefits', current: 25200, prior: 23400 },
    { label: 'Rent & Occupancy', current: 10500, prior: 10500 },
    { label: 'Software & SaaS', current: 2840, prior: 2650 },
    { label: 'Travel & Meals', current: 1840, prior: 1420 },
    { label: 'Insurance', current: 2760, prior: 2760 },
    { label: 'Marketing & Ads', current: 4200, prior: 3800 },
  ],
};

const mockReconciliation = [
  { account: 'Business Checking — Chase', number: '1010', lastReconciled: '2026-02-28', statementBalance: 84320, bookBalance: 84320, difference: 0, status: 'reconciled' },
  { account: 'Business Savings — Chase', number: '1020', lastReconciled: '2026-02-28', statementBalance: 42000, bookBalance: 42000, difference: 0, status: 'reconciled' },
  { account: 'Credit Card — Amex', number: '2100', lastReconciled: '2026-01-31', statementBalance: 4950, bookBalance: 4821, difference: -129, status: 'needs-review' },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

const fmt = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(Math.abs(n));

const statusBadge = (status) => {
  const map = {
    paid: 'bg-green-100 text-green-700',
    unpaid: 'bg-yellow-100 text-yellow-700',
    overdue: 'bg-red-100 text-red-700',
    reconciled: 'bg-green-100 text-green-700',
    'needs-review': 'bg-orange-100 text-orange-700',
  };
  return map[status] ?? 'bg-slate-100 text-slate-600';
};

const StatusIcon = ({ status }) => {
  if (status === 'paid' || status === 'reconciled') return <CheckCircle className="w-3.5 h-3.5" />;
  if (status === 'overdue' || status === 'needs-review') return <AlertCircle className="w-3.5 h-3.5" />;
  return <Clock className="w-3.5 h-3.5" />;
};

// ─── QB Not-connected banner ──────────────────────────────────────────────────

const QBConnectBanner = () => (
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4 mb-6">
    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <LinkIcon className="w-5 h-5 text-amber-600" />
    </div>
    <div className="flex-1">
      <p className="font-semibold text-amber-900">QuickBooks not connected</p>
      <p className="text-sm text-amber-700 mt-0.5">
        Connect QuickBooks to pull live transactions, invoices, bills, and account balances.
        The data shown below is sample data.
      </p>
    </div>
    <Button asChild size="sm" className="flex-shrink-0 bg-amber-600 hover:bg-amber-700 text-white">
      <RouterLink to="/client/integrations">Connect QB</RouterLink>
    </Button>
  </div>
);

// ─── Tab: Transactions ────────────────────────────────────────────────────────

const categoryIcon = {
  Income: ArrowUpRight,
  'Software & SaaS': Zap,
  Rent: Building2,
  Payroll: Wallet,
  Travel: Plane,
  Insurance: ShoppingCart,
  Refund: RefreshCw,
  default: Receipt,
};

const TransactionsTab = ({ search, setSearch }) => {
  const filtered = mockTransactions.filter(
    t =>
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalIn = filtered.filter(t => t.type === 'credit').reduce((s, t) => s + t.amount, 0);
  const totalOut = filtered.filter(t => t.type === 'debit').reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-48 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search transactions..."
            className="w-full pl-9 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="w-4 h-4" /> Filter
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" /> Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-xs text-green-700 font-medium">Total Income</p>
          <p className="text-2xl font-bold text-green-700 mt-1">{fmt(totalIn)}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-xs text-red-700 font-medium">Total Expenses</p>
          <p className="text-2xl font-bold text-red-700 mt-1">{fmt(totalOut)}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Description</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Category</th>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Account</th>
              <th className="text-right px-4 py-3 font-semibold text-slate-600">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map(tx => {
              const Icon = categoryIcon[tx.category] ?? categoryIcon.default;
              return (
                <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{tx.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className={cn('w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0',
                        tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500')}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-slate-800">{tx.description}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{tx.category}</td>
                  <td className="px-4 py-3 text-slate-500">{tx.account}</td>
                  <td className={cn('px-4 py-3 text-right font-semibold',
                    tx.type === 'credit' ? 'text-green-600' : 'text-slate-800')}>
                    {tx.type === 'credit' ? '+' : '-'}{fmt(tx.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-slate-400 py-10">No transactions match your search.</p>
        )}
      </div>
    </div>
  );
};

// ─── Tab: Invoices ────────────────────────────────────────────────────────────

const InvoicesTab = () => {
  const totals = {
    paid: mockInvoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0),
    unpaid: mockInvoices.filter(i => i.status === 'unpaid').reduce((s, i) => s + i.amount, 0),
    overdue: mockInvoices.filter(i => i.status === 'overdue').reduce((s, i) => s + i.amount, 0),
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: 'Collected', value: totals.paid, cls: 'bg-green-50 border-green-200 text-green-700' },
          { label: 'Outstanding', value: totals.unpaid, cls: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
          { label: 'Overdue', value: totals.overdue, cls: 'bg-red-50 border-red-200 text-red-700' },
        ].map(({ label, value, cls }) => (
          <div key={label} className={cn('border rounded-xl p-4', cls)}>
            <p className="text-xs font-medium">{label}</p>
            <p className="text-2xl font-bold mt-1">{fmt(value)}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              {['Invoice #', 'Date', 'Due', 'Client', 'Amount', 'Status'].map(h => (
                <th key={h} className={cn('px-4 py-3 font-semibold text-slate-600', h === 'Amount' ? 'text-right' : 'text-left')}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockInvoices.map(inv => (
              <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-mono text-blue-600 font-medium">{inv.id}</td>
                <td className="px-4 py-3 text-slate-500">{inv.date}</td>
                <td className="px-4 py-3 text-slate-500">{inv.due}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{inv.client}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-800">{fmt(inv.amount)}</td>
                <td className="px-4 py-3">
                  <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold capitalize', statusBadge(inv.status))}>
                    <StatusIcon status={inv.status} />{inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── Tab: Bills ───────────────────────────────────────────────────────────────

const BillsTab = () => {
  const totals = {
    paid: mockBills.filter(b => b.status === 'paid').reduce((s, b) => s + b.amount, 0),
    unpaid: mockBills.filter(b => b.status === 'unpaid').reduce((s, b) => s + b.amount, 0),
    overdue: mockBills.filter(b => b.status === 'overdue').reduce((s, b) => s + b.amount, 0),
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: 'Paid', value: totals.paid, cls: 'bg-green-50 border-green-200 text-green-700' },
          { label: 'Due', value: totals.unpaid, cls: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
          { label: 'Overdue', value: totals.overdue, cls: 'bg-red-50 border-red-200 text-red-700' },
        ].map(({ label, value, cls }) => (
          <div key={label} className={cn('border rounded-xl p-4', cls)}>
            <p className="text-xs font-medium">{label}</p>
            <p className="text-2xl font-bold mt-1">{fmt(value)}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              {['Bill #', 'Date', 'Due', 'Vendor', 'Amount', 'Status'].map(h => (
                <th key={h} className={cn('px-4 py-3 font-semibold text-slate-600', h === 'Amount' ? 'text-right' : 'text-left')}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockBills.map(bill => (
              <tr key={bill.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-mono text-blue-600 font-medium">{bill.id}</td>
                <td className="px-4 py-3 text-slate-500">{bill.date}</td>
                <td className="px-4 py-3 text-slate-500">{bill.due}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{bill.vendor}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-800">{fmt(bill.amount)}</td>
                <td className="px-4 py-3">
                  <span className={cn('inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold capitalize', statusBadge(bill.status))}>
                    <StatusIcon status={bill.status} />{bill.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── Tab: Chart of Accounts ───────────────────────────────────────────────────

const typeColors = {
  Assets: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  Liabilities: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
  Income: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-700' },
  Expenses: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-700' },
};

const ChartOfAccountsTab = () => {
  const [open, setOpen] = useState({ Assets: true, Liabilities: true, Income: true, Expenses: true });

  return (
    <div className="space-y-4">
      {mockChartOfAccounts.map(({ type, accounts }) => {
        const c = typeColors[type];
        const total = accounts.reduce((s, a) => s + a.balance, 0);
        return (
          <div key={type} className={cn('rounded-xl border overflow-hidden', c.border)}>
            <button
              onClick={() => setOpen(o => ({ ...o, [type]: !o[type] }))}
              className={cn('w-full flex items-center justify-between px-5 py-3', c.bg)}
            >
              <div className="flex items-center gap-3">
                <span className={cn('px-2.5 py-0.5 rounded-full text-xs font-bold', c.badge)}>{type}</span>
                <span className={cn('font-bold text-sm', c.text)}>{accounts.length} accounts</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={cn('font-bold text-sm', c.text)}>{fmt(total)}</span>
                <ChevronDown className={cn('w-4 h-4 transition-transform', c.text, open[type] ? 'rotate-180' : '')} />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {open[type] && (
                <motion.div
                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <table className="w-full text-sm bg-white">
                    <thead className="bg-slate-50 border-y">
                      <tr>
                        <th className="text-left px-5 py-2 font-semibold text-slate-500 text-xs">Account #</th>
                        <th className="text-left px-5 py-2 font-semibold text-slate-500 text-xs">Account Name</th>
                        <th className="text-right px-5 py-2 font-semibold text-slate-500 text-xs">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {accounts.map(a => (
                        <tr key={a.number} className="hover:bg-slate-50">
                          <td className="px-5 py-3 font-mono text-slate-400 text-xs">{a.number}</td>
                          <td className="px-5 py-3 font-medium text-slate-800">{a.name}</td>
                          <td className={cn('px-5 py-3 text-right font-semibold', c.text)}>{fmt(a.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// ─── Tab: P&L Summary ─────────────────────────────────────────────────────────

const PLTab = () => {
  const totalIncomeCurrent = mockPL.income.reduce((s, r) => s + r.current, 0);
  const totalIncomePrior = mockPL.income.reduce((s, r) => s + r.prior, 0);
  const totalExpCurrent = mockPL.expenses.reduce((s, r) => s + r.current, 0);
  const totalExpPrior = mockPL.expenses.reduce((s, r) => s + r.prior, 0);
  const netCurrent = totalIncomeCurrent - totalExpCurrent;
  const netPrior = totalIncomePrior - totalExpPrior;
  const netChange = ((netCurrent - netPrior) / netPrior * 100).toFixed(1);

  const Row = ({ label, current, prior, bold }) => {
    const change = ((current - prior) / prior * 100).toFixed(1);
    return (
      <tr className={cn('hover:bg-slate-50 transition-colors', bold && 'bg-slate-50 font-bold')}>
        <td className={cn('px-4 py-2.5 text-slate-800', bold ? 'font-bold' : 'pl-8 text-slate-600')}>{label}</td>
        <td className="px-4 py-2.5 text-right font-semibold text-slate-800">{fmt(current)}</td>
        <td className="px-4 py-2.5 text-right text-slate-500">{fmt(prior)}</td>
        <td className={cn('px-4 py-2.5 text-right text-xs font-semibold', +change >= 0 ? 'text-green-600' : 'text-red-600')}>
          {+change >= 0 ? '+' : ''}{change}%
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-slate-500">Period</p>
          <p className="font-bold text-slate-800">{mockPL.period}</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" /> Export P&L
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-xs text-green-700 font-medium">Total Revenue</p>
          <p className="text-2xl font-bold text-green-700 mt-1">{fmt(totalIncomeCurrent)}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-xs text-red-700 font-medium">Total Expenses</p>
          <p className="text-2xl font-bold text-red-700 mt-1">{fmt(totalExpCurrent)}</p>
        </div>
        <div className={cn('border rounded-xl p-4', netCurrent >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-red-50 border-red-200')}>
          <p className={cn('text-xs font-medium', netCurrent >= 0 ? 'text-blue-700' : 'text-red-700')}>Net Profit</p>
          <div className="flex items-end gap-2 mt-1">
            <p className={cn('text-2xl font-bold', netCurrent >= 0 ? 'text-blue-700' : 'text-red-700')}>{fmt(netCurrent)}</p>
            <span className={cn('text-xs font-semibold mb-1', +netChange >= 0 ? 'text-green-600' : 'text-red-600')}>
              {+netChange >= 0 ? '+' : ''}{netChange}% vs prior
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-slate-600">Item</th>
              <th className="text-right px-4 py-3 font-semibold text-slate-600">Current Period</th>
              <th className="text-right px-4 py-3 font-semibold text-slate-600">Prior Period</th>
              <th className="text-right px-4 py-3 font-semibold text-slate-600">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-green-50"><td colSpan={4} className="px-4 py-2 text-xs font-bold text-green-700 uppercase tracking-wide">Income</td></tr>
            {mockPL.income.map(r => <Row key={r.label} {...r} />)}
            <Row label="Total Income" current={totalIncomeCurrent} prior={totalIncomePrior} bold />
            <tr><td colSpan={4} className="py-1" /></tr>
            <tr className="bg-red-50"><td colSpan={4} className="px-4 py-2 text-xs font-bold text-red-700 uppercase tracking-wide">Expenses</td></tr>
            {mockPL.expenses.map(r => <Row key={r.label} {...r} />)}
            <Row label="Total Expenses" current={totalExpCurrent} prior={totalExpPrior} bold />
            <tr><td colSpan={4} className="py-1" /></tr>
            <tr className="bg-blue-50 border-t-2 border-blue-200">
              <td className="px-4 py-3 font-bold text-blue-800">Net Profit</td>
              <td className="px-4 py-3 text-right font-bold text-blue-800">{fmt(netCurrent)}</td>
              <td className="px-4 py-3 text-right font-semibold text-slate-500">{fmt(netPrior)}</td>
              <td className={cn('px-4 py-3 text-right text-sm font-bold', +netChange >= 0 ? 'text-green-600' : 'text-red-600')}>
                {+netChange >= 0 ? '+' : ''}{netChange}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── Tab: Reconciliation ──────────────────────────────────────────────────────

const ReconciliationTab = () => (
  <div>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 mb-6">
      <RefreshCw className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-semibold text-blue-800 text-sm">Bank Reconciliation Status</p>
        <p className="text-xs text-blue-700 mt-0.5">
          Reconcile your accounts monthly to ensure your books match your bank statements.
          QuickBooks automates most matching — review unmatched items below.
        </p>
      </div>
    </div>
    <div className="space-y-4">
      {mockReconciliation.map(acct => (
        <div key={acct.number} className="bg-white rounded-xl border p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Landmark className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="font-bold text-slate-800">{acct.account}</p>
                <p className="text-xs text-slate-400 font-mono">Acct #{acct.number}</p>
              </div>
            </div>
            <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold', statusBadge(acct.status))}>
              <StatusIcon status={acct.status} />
              {acct.status === 'reconciled' ? 'Reconciled' : 'Needs Review'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-xs text-slate-400">Statement Balance</p>
              <p className="font-bold text-slate-800 mt-0.5">{fmt(acct.statementBalance)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Book Balance</p>
              <p className="font-bold text-slate-800 mt-0.5">{fmt(acct.bookBalance)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Difference</p>
              <p className={cn('font-bold mt-0.5', acct.difference === 0 ? 'text-green-600' : 'text-red-600')}>
                {acct.difference === 0 ? '—' : `${acct.difference < 0 ? '-' : '+'}${fmt(Math.abs(acct.difference))}`}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-xs text-slate-400">Last reconciled: <span className="font-medium text-slate-600">{acct.lastReconciled}</span></p>
            {acct.status === 'needs-review' && (
              <Button size="sm" variant="outline" className="text-xs gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" /> Start Reconciliation
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'transactions', label: 'Transactions', icon: Receipt },
  { id: 'invoices', label: 'Invoices (AR)', icon: FileText },
  { id: 'bills', label: 'Bills (AP)', icon: CreditCard },
  { id: 'chart-of-accounts', label: 'Chart of Accounts', icon: BookOpen },
  { id: 'pl', label: 'P&L Summary', icon: BarChart2 },
  { id: 'reconciliation', label: 'Reconciliation', icon: RefreshCw },
];

const ClientBookkeepingPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('transactions');
  const [isQBConnected, setIsQBConnected] = useState(false);
  const [search, setSearch] = useState('');

  const checkQB = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from('client_integrations')
      .select('integration_name')
      .eq('user_id', user.id)
      .eq('integration_name', 'QuickBooks')
      .maybeSingle();
    setIsQBConnected(!!data);
  }, [user]);

  useEffect(() => { checkQB(); }, [checkQB]);

  const tabContent = () => {
    switch (activeTab) {
      case 'transactions': return <TransactionsTab search={search} setSearch={setSearch} />;
      case 'invoices': return <InvoicesTab />;
      case 'bills': return <BillsTab />;
      case 'chart-of-accounts': return <ChartOfAccountsTab />;
      case 'pl': return <PLTab />;
      case 'reconciliation': return <ReconciliationTab />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Bookkeeping — FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow p-6 lg:p-8 overflow-y-auto bg-slate-100">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Bookkeeping</h1>
            <p className="text-slate-500 mt-1 flex items-center gap-1.5">
              <span className={cn('w-2 h-2 rounded-full', isQBConnected ? 'bg-green-500' : 'bg-slate-300')} />
              {isQBConnected ? 'Synced with QuickBooks' : 'QuickBooks not connected — showing sample data'}
            </p>
          </div>
          <Button variant="outline" size="sm" className="mt-3 md:mt-0 gap-2" onClick={() => { checkQB(); toast({ title: 'Refreshed' }); }}>
            <RefreshCw className="w-4 h-4" /> Refresh
          </Button>
        </header>

        {!isQBConnected && <QBConnectBanner />}

        {/* Tab bar */}
        <div className="flex overflow-x-auto gap-1 bg-white border rounded-xl p-1 mb-6 scrollbar-hide">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all',
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {tabContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default ClientBookkeepingPage;
