import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
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
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold">Ecommerce Chat</h1>
      </div>
      
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${chat.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-800'}`}>
              {chat.content}
            </div>
          </div>)}
      </div>
      
      {/* Input area */}
      
    </div>;
};
export default Chat;