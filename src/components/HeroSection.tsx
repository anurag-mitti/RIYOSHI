
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-20 md:py-32 overflow-hidden rounded-lg mb-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-1/3 w-60 h-60 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Perfect Salon Experience
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Discover and book the best salons near you with RIYOSHI's seamless salon booking platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/discover')}>
              Discover Salons
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
