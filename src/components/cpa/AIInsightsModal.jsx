import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import AIChat from '@/components/AIChat';

const AIInsightsModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle>AI-Powered Insights</DialogTitle>
          <DialogDescription>Ask for summaries, identify trends, or get suggestions for your firm.</DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <AIChat />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIInsightsModal;