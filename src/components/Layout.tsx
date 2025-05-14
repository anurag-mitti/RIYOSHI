
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotSidebar from './ChatbotSidebar';
import { SidebarProvider } from './ui/sidebar';

interface LayoutProps {
  children: React.ReactNode;
  showChatbot?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showChatbot = true }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 relative">
          <main className="flex-1 bg-background">
            {children}
          </main>
          {showChatbot && <ChatbotSidebar />}
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
