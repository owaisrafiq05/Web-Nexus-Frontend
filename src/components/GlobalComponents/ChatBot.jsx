"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Groq } from 'groq-sdk';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const context = `You are an AI assistant for Web Nexus Solutions, a company that specializes in:
1. Cloud Computing Solutions
2. Business Transformation
3. Digital Innovation
4. Security Solutions
5. Strategic IT Consulting

Be professional, concise, and helpful. Focus on these service areas and provide specific examples when relevant.`;

  const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
  });

  // Initialize with welcome message
  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'Hello! 👋 Welcome to Web Nexus Solutions. I\'m your AI assistant, ready to help you with any questions about our services, cloud computing solutions, or business transformation strategies. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, []);

  // Auto scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      role: 'user', 
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: context }, 
          ...messages.map(({ role, content }) => ({ role, content })), 
          { role: userMessage.role, content: userMessage.content }
        ],
        model: "llama3-8b-8192",
        temperature: 0.7,
        max_tokens: 1024,
      });

      const assistantMessage = {
        role: 'assistant',
        content: completion.choices[0]?.message?.content || 'Sorry, I could not process your request.',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.',
        timestamp: new Date().toLocaleTimeString()
      }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-24 w-80 bg-[#F5EFE6] rounded-lg shadow-xl border border-[#D4C8BE] overflow-hidden" style={{ zIndex: 9999 }}>
      {/* Header */}
      <div className="bg-[#2C2C2C] p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F5EFE6]"></div>
          <h3 className="text-[#F5EFE6] font-semibold text-sm">Web Nexus Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="text-[#F5EFE6] hover:text-gray-300 text-xl focus:outline-none"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="h-[400px] flex flex-col">
        <div className="flex-1 p-3 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div className="flex flex-col gap-1">
                <div
                  className={`inline-block p-2 rounded-lg max-w-[85%] ${
                    message.role === 'user'
                      ? 'bg-[#2C2C2C] text-[#F5EFE6] ml-auto'
                      : 'bg-white text-[#2C2C2C] shadow-sm'
                  }`}
                >
                  {message.content}
                </div>
                <span className={`text-xs text-gray-500 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-center text-[#2C2C2C] mb-3">
              <div className="animate-pulse flex gap-2 justify-center">
                <div className="w-1.5 h-1.5 bg-[#2C2C2C] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#2C2C2C] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-[#2C2C2C] rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="border-t border-[#D4C8BE] p-2 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 border border-[#D4C8BE] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#2C2C2C] bg-[#F5EFE6]"
              aria-label="Message input"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#2C2C2C] text-[#F5EFE6] px-3 py-1.5 rounded-lg hover:bg-black disabled:opacity-50 transition-colors text-sm"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;