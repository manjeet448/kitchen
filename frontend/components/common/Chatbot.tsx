'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { generateBotResponse } from '@/utils/chatbotLogic';

type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi there! I am the HHE EQUIPMENT AI Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      const botReply = generateBotResponse(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: botReply };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-24 right-6 z-50 flex items-center gap-3 flex-row-reverse">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-hover hover:scale-110 transition-all duration-300 z-10"
          aria-label="Open AI Chat"
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>
        
        {/* Tooltip visible on hover when closed */}
        {!isOpen && (
          <div className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-gray-100 opacity-0 lg:hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
            Ask AI
          </div>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-elevated border border-gray-200 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          
          {/* Header */}
          <div className="bg-dark text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold leading-tight">HHE EQUIPMENT AI</h3>
              <p className="text-xs text-gray-300">Typically replies instantly</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 min-h-[300px] max-h-[400px]">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white ${msg.sender === 'user' ? 'bg-gray-400' : 'bg-primary'}`}>
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-dark text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..." 
              className="flex-1 bg-gray-100 border-transparent rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 hover:bg-primary-hover disabled:opacity-50 disabled:hover:bg-primary transition-colors"
            >
              <Send size={18} className="ml-1" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

export default Chatbot;
