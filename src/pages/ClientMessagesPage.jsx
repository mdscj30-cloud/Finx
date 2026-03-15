import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, Paperclip, User, Bot, Video, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';

const ClientMessagesPage = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true });

    if (error) {
      toast({ title: 'Error fetching messages', description: error.message, variant: 'destructive' });
    } else {
      setMessages(data);
    }
  }, [user]);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel(`messages:${user?.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `user_id=eq.${user?.id}` }, (payload) => {
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, fetchMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user) return;
    setIsSending(true);

    const { error } = await supabase
      .from('messages')
      .insert({ user_id: user.id, content: newMessage, is_admin_message: false });

    if (error) {
      toast({ title: 'Error sending message', description: error.message, variant: 'destructive' });
    } else {
      setNewMessage('');
    }
    setIsSending(false);
  };

  const handleSimulateAdminReply = async () => {
    if (!user) return;
    setIsSending(true); // Use isSending to disable the button temporarily

    const adminMessageContent = "Hello! We've received your message and are looking into it. We'll get back to you shortly!";

    const { error } = await supabase
      .from('messages')
      .insert({ user_id: user.id, content: adminMessageContent, is_admin_message: true });

    if (error) {
      toast({ title: 'Error simulating admin reply', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Admin reply simulated!', description: 'Check the chat for the new message.' });
    }
    setIsSending(false);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !user) return;
    setIsUploading(true);

    const filePath = `${user.id}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from('documents').upload(filePath, file);

    if (uploadError) {
      toast({ title: 'Upload failed', description: uploadError.message, variant: 'destructive' });
      setIsUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from('documents').getPublicUrl(filePath);

    const { error: insertError } = await supabase.from('messages').insert({
      user_id: user.id,
      file_url: publicUrl,
      file_name: file.name,
      content: `File uploaded: ${file.name}`,
      is_admin_message: false,
    });

    if (insertError) {
      toast({ title: 'Failed to save file message', description: insertError.message, variant: 'destructive' });
    }
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleScheduleMeeting = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-username' });
    } else {
      toast({
        title: "Scheduler not ready",
        description: "The meeting scheduler is still loading. Please try again in a moment.",
        variant: "destructive"
      });
    }
  };

  const MessageBubble = ({ msg }) => {
    const isAdmin = msg.is_admin_message;
    const isFile = msg.file_url;

    return (
      <div className={`flex items-end gap-2 ${isAdmin ? 'justify-start' : 'justify-end'}`}>
        {isAdmin && <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0"><Bot size={20} /></div>}
        <div className={`p-3 rounded-2xl ${isAdmin ? 'rounded-bl-none bg-slate-100' : 'rounded-br-none bg-blue-600 text-white'} text-sm max-w-md`}>
          {isFile ? (
            <a href={msg.file_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
              <FileText size={16} />
              <span>{msg.file_name || 'View File'}</span>
            </a>
          ) : (
            <p>{msg.content}</p>
          )}
        </div>
        {!isAdmin && <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0"><User size={20} /></div>}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Messages - FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow flex flex-col h-screen bg-slate-50">
        <div className="p-8 border-b bg-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Messages</h1>
              <p className="text-slate-500">Communicate with your dedicated support team.</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={handleSimulateAdminReply} disabled={isSending}>
                Simulate Admin Reply
              </Button>
              <Button onClick={handleScheduleMeeting}>
                <Video className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-grow bg-white rounded-xl shadow-sm border m-8 mt-4 flex flex-col"
        >
          <div className="p-4 border-b">
            <h2 className="font-semibold">Support Thread</h2>
            <p className="text-sm text-slate-500">Connected in real-time</p>
          </div>
          <div className="flex-grow p-6 space-y-6 overflow-y-auto">
            {messages.map((msg) => <MessageBubble key={msg.id} msg={msg} />)}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t bg-slate-50">
            <div className="relative">
              <Input 
                placeholder="Type your message..." 
                className="pr-24" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isSending && handleSendMessage()}
                disabled={isSending || isUploading}
              />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center">
                <Button size="icon" variant="ghost" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
                  {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Paperclip className="w-4 h-4" />}
                </Button>
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                <Button size="icon" variant="ghost" onClick={handleSendMessage} disabled={isSending || !newMessage.trim()}>
                  {isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default ClientMessagesPage;