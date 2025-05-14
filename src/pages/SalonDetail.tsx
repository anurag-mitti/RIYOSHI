
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceList from '../components/ServiceList';
import BookingCalendar from '../components/BookingCalendar';
import ReviewSection from '../components/ReviewSection';
import { mockSalons } from '../data/mockData';

const SalonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [salon, setSalon] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, fetch the salon data from an API
    // For now, we'll just use the mock data
    const foundSalon = mockSalons.find(salon => salon.id === parseInt(id || '0'));
    setSalon(foundSalon);
  }, [id]);

  if (!salon) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <p>Loading salon details...</p>
        </div>
      </Layout>
    );
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookingSubmit = () => {
    if (selectedService && selectedDate && selectedTime) {
      // In a real app, send booking data to an API
      alert(`Booking submitted for ${salon.name} on ${selectedDate.toLocaleDateString()} at ${selectedTime} for ${selectedService}`);
    } else {
      alert('Please select a service, date, and time to book an appointment.');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg mb-8">
          <div className="h-64 bg-gradient-to-r from-primary/30 to-accent/30 relative">
            {salon.imageUrl && (
              <img 
                src={salon.imageUrl} 
                alt={salon.name} 
                className="w-full h-full object-cover opacity-90"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">{salon.name}</h1>
              <p className="text-white/80">{salon.address}</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-${i < salon.rating ? 'yellow-500' : 'gray-400'}`}>★</span>
                  ))}
                </div>
                <span className="ml-2 text-white/80">{salon.rating} ({salon.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About {salon.name}</h2>
                <p className="text-muted-foreground mb-6">{salon.description || 'No description available.'}</p>
                
                <h2 className="text-2xl font-semibold mb-4">Services</h2>
                <ServiceList 
                  services={salon.services} 
                  selectedService={selectedService} 
                  onSelectService={handleServiceSelect}
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
                <BookingCalendar 
                  availableSlots={salon.availableSlots} 
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={handleDateSelect}
                  onTimeSelect={handleTimeSelect}
                />
                
                <button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-md mt-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                  onClick={handleBookingSubmit}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <ReviewSection reviews={salon.reviews || []} />
      </div>
    </Layout>
  );
};

export default SalonDetail;
