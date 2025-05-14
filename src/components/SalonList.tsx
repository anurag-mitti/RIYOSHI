
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Salon } from '../types';

interface SalonListProps {
  salons: Salon[];
}

const SalonList: React.FC<SalonListProps> = ({ salons }) => {
  const navigate = useNavigate();

  if (salons.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No salons found. Try a different location.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {salons.map((salon) => (
        <Card 
          key={salon.id} 
          className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer hover-scale"
          onClick={() => navigate(`/salon/${salon.id}`)}
        >
          <div className="h-56 relative">
            {salon.imageUrl ? (
              <img 
                src={salon.imageUrl} 
                alt={salon.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image available</span>
              </div>
            )}
            <div className="absolute top-2 right-2 bg-background/80 text-foreground px-3 py-1 rounded-md backdrop-blur-sm text-sm font-medium flex items-center">
              <span className="text-yellow-500 mr-1">★</span> {salon.rating}
            </div>
          </div>
          <CardContent className="pt-4">
            <h3 className="font-bold text-xl mb-1">{salon.name}</h3>
            <p className="text-muted-foreground mb-3 text-sm">{salon.address}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {salon.services.slice(0, 3).map((service) => (
                <span key={service.id} className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">
                  {service.name}
                </span>
              ))}
              {salon.services.length > 3 && (
                <span className="text-muted-foreground text-xs py-1">
                  +{salon.services.length - 3} more
                </span>
              )}
            </div>
            
            <div className="text-sm text-muted-foreground flex flex-wrap justify-between items-center">
              <span>Starting from ${Math.min(...salon.services.map(s => s.price))}</span>
              <span>{salon.reviewCount} reviews</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <button className="text-primary hover:text-primary/80 text-sm font-medium">
              Book Now →
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SalonList;
