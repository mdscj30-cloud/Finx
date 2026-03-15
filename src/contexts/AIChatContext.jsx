import React, { createContext, useState, useContext } from 'react';

const AIChatContext = createContext();

export const useAIChat = () => {
  return useContext(AIChatContext);
};

export const AIChatProvider = ({ children }) => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I'm Finn, your AI assistant. How can I help you with FinxisAI or your accounting questions today?" }
  ]);

  const value = {
    isAIChatOpen,
    setIsAIChatOpen,
    messages,
    setMessages,
  };

  return (
    <AIChatContext.Provider value={value}>
      {children}
    </AIChatContext.Provider>
  );
};