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
      setChatHistory([...chatHistory, {
        type: 'user',
        content: message
      }]);

      setTimeout(() => {
        setChatHistory(prev => [...prev, {
          type: 'system',
          content: 'Thank you for your message. Our team is working on implementing this feature.'
        }]);
      }, 1000);

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
      <div className="bg-white shadow-sm p-4 flex items-center">
        <Link to="/" className="mr-4">
          
        </Link>
        <div className="flex items-center">
          <Logo size="small" />
          <div className="flex items-center">
            <span className="text-xl font-semibold px-2">|</span>
            <span className="text-xl font-semibold">Ecommerce Manager</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            
          </div>)}
      </div>
      
      <div className="flex items-center">
        <Input placeholder="Type your message..." value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} />
        <Button onClick={handleSendMessage} className="ml-2">
          <Send />
        </Button>
      </div>
    </div>;
};

export default Chat;
