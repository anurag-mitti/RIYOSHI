
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const GetStarted = () => {
  return (
    <section id="docs" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in Minutes</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Follow these simple steps to set up CppServer in your project
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="cmake" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="cmake">CMake</TabsTrigger>
              <TabsTrigger value="package">Package Manager</TabsTrigger>
              <TabsTrigger value="manual">Manual Build</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cmake">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Using CMake</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">1. Add CppServer as a dependency</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`# In your CMakeLists.txt
include(FetchContent)
FetchContent_Declare(
  cppserver
  GIT_REPOSITORY https://github.com/cpp-server/cppserver.git
  GIT_TAG v1.0.0
)
FetchContent_MakeAvailable(cppserver)

# Link against the library
target_link_libraries(your_project PRIVATE cppserver)`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">2. Include and use in your project</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`#include <cppserver/http_server.hpp>

int main() {
  cppserver::HttpServer server(8080);
  server.get("/", [](const auto& req, auto& res) {
    res.send("Hello from CppServer!");
  });
  server.start();
  return 0;
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="package">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Using Package Managers</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Option 1: vcpkg</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`# Install the package
vcpkg install cppserver

# In your CMakeLists.txt
find_package(CppServer CONFIG REQUIRED)
target_link_libraries(your_project PRIVATE CppServer::cppserver)`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Option 2: Conan</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`# Add to your conanfile.txt
[requires]
cppserver/1.0.0

# Then run
conan install .
  
# In your CMakeLists.txt
find_package(CppServer CONFIG REQUIRED)
target_link_libraries(your_project PRIVATE CppServer::cppserver)`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="manual">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Manual Build</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">1. Clone the repository</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`git clone https://github.com/cpp-server/cppserver.git
cd cppserver`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">2. Build the library</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`mkdir build && cd build
cmake ..
cmake --build .
cmake --install . --prefix /path/to/install`}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">3. Link in your project</h4>
                      <div className="code-block">
                        <pre>
                          <code>{`# In your CMakeLists.txt
find_package(CppServer REQUIRED)
target_link_libraries(your_project PRIVATE CppServer::cppserver)`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <Button className="gap-2">
              Read Full Documentation
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
