
import React from 'react';
import { Service } from '../types';

interface ServiceListProps {
  services: Service[];
  selectedService: string | null;
  onSelectService: (serviceId: string) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, selectedService, onSelectService }) => {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div 
          key={service.id} 
          className={`p-4 border rounded-md cursor-pointer transition-colors ${
            selectedService === service.id.toString() 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50'
          }`}
          onClick={() => onSelectService(service.id.toString())}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{service.name}</h3>
            <span className="font-semibold">${service.price.toFixed(2)}</span>
          </div>
          {service.description && (
            <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
          )}
          <p className="text-sm text-muted-foreground mt-1">Duration: {service.duration} min</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
