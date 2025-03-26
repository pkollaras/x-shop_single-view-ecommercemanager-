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
            <div className={`max-w-[80%] p-3 rounded-lg ${chat.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-800'}`}>
              {chat.content}
            </div>
          </div>)}
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type your message..." className="flex-1" />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>;
};
export default Chat;