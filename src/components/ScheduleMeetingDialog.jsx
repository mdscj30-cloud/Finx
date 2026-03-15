import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2 } from 'lucide-react';

const ScheduleMeetingDialog = ({ isOpen, onOpenChange }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] h-[70vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Schedule a Meeting</DialogTitle>
          <DialogDescription>
            Pick a time that works for you. This is a live Calendly embed for demonstration.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 rounded-md">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          )}
          <iframe
            src="https://calendly.com/your-username"
            width="100%"
            height="100%"
            frameBorder="0"
            onLoad={() => setIsLoading(false)}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleMeetingDialog;