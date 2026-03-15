import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, User, CornerDownLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useAIChat } from '@/contexts/AIChatContext.jsx';

const AIChat = ({ onScheduleCall }) => {
  const { messages, setMessages } = useAIChat();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isTyping) return;
  
    const userMessage = { sender: 'user', text: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);
  
    const aiMessageIndex = newMessages.length;
    setMessages(prev => [...prev, { sender: 'ai', text: '' }]);
  
    try {
      // Using native fetch to ensure robust streaming support
      const response = await fetch(`${supabase.supabaseUrl}/functions/v1/groq`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`,
        },
        body: JSON.stringify({
          messages: newMessages.slice(-10).map(m => ({ role: m.sender === 'ai' ? 'assistant' : 'user', content: m.text })),
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: true });
        
        if (chunk) {
            setMessages(currentMessages =>
              currentMessages.map((msg, idx) =>
                idx === aiMessageIndex ? { ...msg, text: msg.text + chunk } : msg
              )
            );
        }
      }
  
    } catch (error) {
      console.error('Error calling Groq API:', error);
      setMessages(currentMessages =>
        currentMessages.map((msg, idx) =>
          idx === aiMessageIndex
            ? { ...msg, text: "Sorry, I couldn't connect to the AI service right now. Please try again shortly." }
            : msg
        )
      );
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Could not stream response from the AI assistant.",
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.3 }}
                className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white flex-shrink-0">
                    <Bot size={20} />
                  </div>
                )}
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 flex-shrink-0">
                    <User size={20} />
                  </div>
                )}
              </motion.div>
            ))}
             {isTyping && (
              <motion.div
                key="typing"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-end gap-2 justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white flex-shrink-0">
                  <Bot size={20} />
                </div>
                <div className="bg-slate-100 rounded-2xl rounded-bl-none p-3 flex items-center space-x-1">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-lg">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Ask a question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow"
            disabled={isTyping}
          />
          <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700" disabled={isTyping}>
            <Send size={20} />
          </Button>
        </form>
        <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-slate-400 text-center">
                Press <CornerDownLeft className="inline h-3 w-3" /> to send.
            </p>
            <Button variant="outline" size="sm" onClick={onScheduleCall} className="text-xs">
                <Calendar className="w-3 h-3 mr-1.5" />
                Schedule a Call
            </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;