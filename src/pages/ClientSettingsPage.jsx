import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bell, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const ClientSettingsPage = () => {
  const handleSave = (section) => {
    toast({
      title: `${section} Settings Saved!`,
      description: "This is a demo. Your settings have not actually been saved.",
    });
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Settings - FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3"><User /> Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Demo User" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="demo@finxis.ai" disabled />
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" defaultValue="Innovate Inc." />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="CEO" />
              </div>
            </div>
            <Button className="mt-6" onClick={() => handleSave('Profile')}>Save Changes</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3"><Shield /> Security</h2>
            <div className="space-y-4">
              <Button variant="outline">Change Password</Button>
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <Checkbox id="2fa" />
                <label htmlFor="2fa" className="text-sm font-medium">Enable Two-Factor Authentication (2FA)</label>
              </div>
            </div>
             <Button className="mt-6" onClick={() => handleSave('Security')}>Save Security Settings</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-3"><Bell /> Notifications</h2>
            <div className="space-y-4">
              <p className="font-medium">Email Notifications</p>
              <div className="flex items-center space-x-2">
                <Checkbox id="notify-docs" defaultChecked />
                <label htmlFor="notify-docs" className="text-sm">New document requests</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="notify-messages" defaultChecked />
                <label htmlFor="notify-messages" className="text-sm">New messages from support</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="notify-billing" />
                <label htmlFor="notify-billing" className="text-sm">Billing and invoice updates</label>
              </div>
            </div>
            <Button className="mt-6" onClick={() => handleSave('Notification')}>Save Notification Preferences</Button>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ClientSettingsPage;