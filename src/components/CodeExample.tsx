
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const exampleCode = {
  basic: `#include "cppserver.hpp"

int main() {
  // Create a server on port 8080
  CppServer::HttpServer server(8080);
  
  // Define a route handler for GET requests
  server.get("/hello", [](const Request& req, Response& res) {
    res.json({{"message", "Hello, World!"}});
  });
  
  // Start the server
  server.start();
  return 0;
}`,
  
  rest: `#include "cppserver.hpp"

// Define your REST API
class UserApi {
public:
  static void registerRoutes(CppServer::HttpServer& server) {
    // GET all users
    server.get("/api/users", &UserApi::getAll);
    
    // GET a specific user by ID
    server.get("/api/users/:id", &UserApi::getById);
    
    // POST to create a new user
    server.post("/api/users", &UserApi::create);
    
    // PUT to update a user
    server.put("/api/users/:id", &UserApi::update);
    
    // DELETE a user
    server.del("/api/users/:id", &UserApi::remove);
  }
  
  // Handler implementations
  static void getAll(const Request& req, Response& res) {
    // Fetch users from database
    auto users = database.queryAll("users");
    res.json(users);
  }
  
  static void getById(const Request& req, Response& res) {
    int id = std::stoi(req.params["id"]);
    auto user = database.queryById("users", id);
    
    if (user) {
      res.json(*user);
    } else {
      res.status(404).json({{"error", "User not found"}});
    }
  }
  
  // Additional handlers...
};

int main() {
  CppServer::HttpServer server(8080);
  UserApi::registerRoutes(server);
  server.start();
  return 0;
}`,

  websocket: `#include "cppserver.hpp"

int main() {
  CppServer::HttpServer server(8080);
  
  // Regular HTTP routes
  server.get("/", [](const Request& req, Response& res) {
    res.sendFile("websocket-client.html");
  });
  
  // WebSocket endpoint
  server.ws("/chat", {
    .onConnect = [](WebSocket& ws) {
      std::cout << "Client connected" << std::endl;
      ws.send("Welcome to the chat server!");
    },
    
    .onMessage = [](WebSocket& ws, const std::string& message) {
      std::cout << "Received: " << message << std::endl;
      
      // Broadcast the message to all clients
      ws.broadcast(message);
    },
    
    .onClose = [](WebSocket& ws, int code) {
      std::cout << "Client disconnected with code: " << code << std::endl;
    }
  });
  
  server.start();
  return 0;
}`
};

const CodeExample = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('basic');
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(exampleCode[activeTab as keyof typeof exampleCode]);
    toast({
      title: "Code copied to clipboard",
      description: "You can now paste it in your project",
    });
  };

  return (
    <section id="code" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple and Intuitive API</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Write clean, expressive C++ code with our modern API design.
            Check out these examples:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue="basic" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="basic">Basic Server</TabsTrigger>
              <TabsTrigger value="rest">REST API</TabsTrigger>
              <TabsTrigger value="websocket">WebSockets</TabsTrigger>
            </TabsList>
            
            {Object.entries(exampleCode).map(([key, code]) => (
              <TabsContent key={key} value={key} className="relative">
                <div className="code-block group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 opacity-50 hover:opacity-100 bg-background/50 hover:bg-background/80"
                    onClick={copyToClipboard}
                  >
                    <Copy size={16} />
                  </Button>
                  <pre>
                    <code dangerouslySetInnerHTML={{
                      __html: code
                        .replace(/#include/g, '<span class="keyword">#include</span>')
                        .replace(/int main\(\)/g, '<span class="type">int</span> <span class="function">main</span>()')
                        .replace(/(CppServer::HttpServer|Request|Response|WebSocket)/g, '<span class="type">$1</span>')
                        .replace(/(\w+)\(/g, '<span class="function">$1</span>(')
                        .replace(/(\.[a-zA-Z]+)/g, '<span class="function">$1</span>')
                        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
                        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
                        .replace(/\/\/([^\n]*)/g, '<span class="comment">//$1</span>')
                    }} />
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
