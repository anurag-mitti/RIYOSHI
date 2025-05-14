
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { mockSalons } from '../data/mockData';

const FeaturedSalons = () => {
  const navigate = useNavigate();
  // Take just the first 4 salons for featured section
  const featuredSalons = mockSalons.slice(0, 4);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Salons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredSalons.map((salon) => (
          <Card 
            key={salon.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer hover-scale"
            onClick={() => navigate(`/salon/${salon.id}`)}
          >
            <div className="h-48 relative">
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
              <div className="absolute top-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded-md backdrop-blur-sm text-sm font-medium">
                ★ {salon.rating}
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold text-lg mb-1">{salon.name}</h3>
              <p className="text-muted-foreground text-sm truncate">{salon.address}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {salon.services.slice(0, 3).map((service) => (
                  <span key={service.id} className="bg-secondary/30 text-secondary-foreground text-xs px-2 py-1 rounded-md">
                    {service.name}
                  </span>
                ))}
                {salon.services.length > 3 && (
                  <span className="text-muted-foreground text-xs py-1">
                    +{salon.services.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0 text-sm text-muted-foreground">
              {salon.reviewCount} reviews
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button 
          onClick={() => navigate('/discover')}
          className="text-primary hover:text-primary/80 font-medium"
        >
          View All Salons →
        </button>
      </div>
    </div>
  );
};

export default FeaturedSalons;
