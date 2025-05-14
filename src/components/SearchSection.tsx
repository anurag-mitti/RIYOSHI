
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, MapPin } from 'lucide-react';

interface SearchSectionProps {
  onSearch?: (location: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(location);
    } else {
      navigate(`/discover?location=${encodeURIComponent(location)}`);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // In a real app, we would use the coordinates to fetch nearby salons
        // For demo purposes, we'll just set a placeholder location
        setLocation('Current Location');
        if (onSearch) {
          onSearch('Current Location');
        }
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="bg-card shadow-lg rounded-lg p-6 mb-12">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter location (e.g., Koramangala)"
            className="pl-10"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button 
          type="button" 
          variant="outline"
          onClick={getCurrentLocation}
          className="md:w-auto"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Current Location
        </Button>
        <Button type="submit" className="md:w-auto">
          Find Salons
        </Button>
      </form>
    </div>
  );
};

export default SearchSection;
