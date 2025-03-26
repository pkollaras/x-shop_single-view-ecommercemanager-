import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import Logo from "../components/Logo";
const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{
    type: 'user' | 'system';
    content: string;
  }[]>([{
    type: 'system',
    content: 'Hello! How can I help you with your ecommerce store today?'
  }]);
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat history
      setChatHistory([...chatHistory, {
        type: 'user',
        content: message
      }]);

      // Simulate a response (in a real app, this would call an API)
      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          type: 'system',
          content: 'Thank you for your message. Our team is working on implementing this feature.'
        }]);
      }, 1000);

      // Clear input
      setMessage("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        <Link to="/" className="mr-4">
          
        </Link>
        <div className="flex items-center">
          <Logo />
          <div className="flex items-center">
            <span className="text-xl font-semibold px-2">|</span>
            <span className="text-xl font-semibold">Ecommerce Manager</span>
          </div>
        </div>
      </div>
      
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            
          </div>)}
      </div>
      
      {/* Input area */}
      
    </div>;
};
export default Chat;