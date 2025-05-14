
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import FeaturedSalons from '../components/FeaturedSalons';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <HeroSection />
        <SearchSection />
        <FeaturedSalons />
        <HowItWorks />
      </div>
    </Layout>
  );
};

export default Home;
