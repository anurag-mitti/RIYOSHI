
import React from 'react';
import { Search, Calendar, Check } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "1. Discover",
    description: "Search for salons in your area or browse through our curated list of top salons."
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "2. Book",
    description: "Choose your preferred service, date and time slot for your appointment."
  },
  {
    icon: <Check className="h-8 w-8" />,
    title: "3. Enjoy",
    description: "Receive confirmation, get reminders, and enjoy your salon experience."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
