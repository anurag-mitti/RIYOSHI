
import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger
} from './ui/sidebar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send, Bot } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotSidebar = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi there! I'm your RIYOSHI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: input.trim(),
      isBot: false,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Mock bot response based on user input
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('time') || lowerInput.includes('slot') || lowerInput.includes('available')) {
        botResponse = "Most salons have more availability during weekdays, especially in the morning. Would you like me to check specific times for you?";
      } else if (lowerInput.includes('best salon') || lowerInput.includes('recommend')) {
        botResponse = "Based on your location, I'd recommend checking out Style Studio which has a 4.8 rating. They're known for their excellent haircuts and styling.";
      } else if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
        botResponse = "To book an appointment, simply select a salon, choose your service, pick a date and available time, and confirm your booking.";
      } else {
        botResponse = "I can help you find salons, check availability, or answer questions about services. Let me know what you're looking for!";
      }

      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Sidebar side="right" variant="floating" collapsible="offcanvas">
      <SidebarHeader className="border-b border-border pb-2">
        <div className="flex items-center px-4 pt-2">
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <Bot size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-sm">RIYOSHI Assistant</h3>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-secondary text-secondary-foreground rounded-tl-none' 
                    : 'bg-primary text-primary-foreground rounded-tr-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 block text-right mt-1">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1"
          />
          <Button size="icon" onClick={handleSend} disabled={input.trim() === ''}>
            <Send size={18} />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ChatbotSidebar;
