
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Lock, Cpu, Clock, RefreshCw, LayoutGrid } from 'lucide-react';

const featuresList = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Blazing Fast',
    description: 'Optimized C++ core handles thousands of requests per second with minimal latency.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Secure by Default',
    description: 'Built-in support for TLS, HTTPS, and modern security practices.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'Low Overhead',
    description: 'Minimal memory footprint and CPU usage, perfect for resource-constrained environments.'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Asynchronous APIs',
    description: 'Non-blocking I/O operations for handling concurrent connections efficiently.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Fast Development',
    description: 'Intuitive API design for rapid application development without sacrificing performance.'
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: 'Modular Design',
    description: 'Plug-in architecture allows for easy extension and customization.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Built with performance and developer experience in mind, our C++ server
            framework provides everything you need to build modern web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card key={index} className="bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
