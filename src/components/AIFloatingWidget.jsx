import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Calendar } from 'lucide-react';
import AIChat from '@/components/AIChat';
import { useAIChat } from '@/contexts/AIChatContext.jsx';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const AIFloatingWidget = () => {
  const { isAIChatOpen, setIsAIChatOpen } = useAIChat();

  const handleScheduleCall = () => {
    const calendlyUrl = 'https://calendly.com/finxisai/30min';
    window.open(calendlyUrl, '_blank');
    toast({
      title: 'Opening Scheduler',
      description: 'You are being redirected to Calendly to book a meeting.',
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAIChatOpen(!isAIChatOpen)}
          className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white shadow-2xl"
          aria-label={isAIChatOpen ? "Close AI Assistant" : "Open AI Assistant"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isAIChatOpen ? 'x' : 'bot'}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isAIChatOpen ? <X size={32} /> : <Bot size={32} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isAIChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-[99] w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col"
          >
            <header className="flex items-center justify-between p-4 border-b bg-slate-50 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">FinxisAI Assistant</h3>
                  <p className="text-xs text-green-500 font-semibold flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                    Online
                  </p>
                </div>
              </div>
               <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAIChatOpen(false)}
                className="text-slate-500 hover:bg-slate-200"
                aria-label="Close chat"
              >
                <X size={20} />
              </Button>
            </header>
            <div className="flex-grow overflow-hidden">
              <AIChat onScheduleCall={handleScheduleCall} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIFloatingWidget;