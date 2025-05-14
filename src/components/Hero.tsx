
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
            v1.0.0 Released
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            High Performance C++ HTTP Server
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            A blazing fast, lightweight C++ server framework designed for 
            modern applications with superior performance and minimal overhead.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download size={16} />
              Download v1.0.0
            </Button>
          </div>
          
          <div className="mt-10 font-mono text-sm text-foreground/70">
            <span className="typing-demo inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1">
              $ git clone https://github.com/cpp-server/cppserver.git
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
