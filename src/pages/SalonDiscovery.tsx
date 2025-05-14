
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchSection from '../components/SearchSection';
import SalonList from '../components/SalonList';
import { mockSalons } from '../data/mockData';

const SalonDiscovery = () => {
  const [location, setLocation] = useState('');
  const [salons, setSalons] = useState(mockSalons);

  const handleSearch = (searchLocation: string) => {
    setLocation(searchLocation);
    // In a real app, we would filter salons based on location
    // For now, we'll just use the mock data
    setSalons(mockSalons);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Salon</h1>
        <SearchSection onSearch={handleSearch} />
        <SalonList salons={salons} />
      </div>
    </Layout>
  );
};

export default SalonDiscovery;
