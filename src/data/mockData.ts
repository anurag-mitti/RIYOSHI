
import { Salon } from '../types';
import { format, addDays } from 'date-fns';

const generateTimeSlots = (date: Date, bookedSlots: string[] = []) => {
  const slots = [];
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && 
                 date.getMonth() === today.getMonth() && 
                 date.getFullYear() === today.getFullYear();
  
  const currentHour = isToday ? today.getHours() : 0;
  
  for (let hour = 10; hour < 20; hour++) {
    const time1 = `${hour}:00`;
    const time2 = `${hour}:30`;
    
    // For today, only show future time slots
    if (!isToday || hour > currentHour) {
      slots.push({
        time: time1,
        available: !bookedSlots.includes(time1)
      });
    }
    
    if (!isToday || hour > currentHour || (hour === currentHour && today.getMinutes() < 30)) {
      slots.push({
        time: time2,
        available: !bookedSlots.includes(time2)
      });
    }
  }
  
  return slots;
};

// Generate available slots for the next 14 days
const generateAvailableSlotsForSalon = () => {
  const availableSlots: { [date: string]: any[] } = {};
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = addDays(today, i);
    const dateString = format(date, 'yyyy-MM-dd');
    
    // Generate some random booked slots
    const bookedSlotsCount = Math.floor(Math.random() * 8); // 0-7 slots booked
    const bookedSlots: string[] = [];
    
    for (let j = 0; j < bookedSlotsCount; j++) {
      const hour = Math.floor(Math.random() * 10) + 10; // 10 AM - 7 PM
      const minute = Math.random() > 0.5 ? '00' : '30';
      bookedSlots.push(`${hour}:${minute}`);
    }
    
    availableSlots[dateString] = generateTimeSlots(date, bookedSlots);
  }
  
  return availableSlots;
};

export const mockSalons: Salon[] = [
  {
    id: 1,
    name: "Style Studio",
    address: "123 Main St, Koramangala, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Style Studio is a premium salon offering high-quality haircuts, styling, and color services in a luxurious environment.",
    rating: 4.8,
    reviewCount: 253,
    services: [
      { id: 101, name: "Men's Haircut", price: 35, duration: 30, description: "Precision haircut tailored to your face shape and style preferences" },
      { id: 102, name: "Women's Haircut", price: 45, duration: 45, description: "Expert cutting and styling for all hair lengths" },
      { id: 103, name: "Hair Coloring", price: 80, duration: 90, description: "Full color service including consultation and styling" },
      { id: 104, name: "Blowout", price: 30, duration: 30, description: "Professional blow dry and styling" },
      { id: 105, name: "Highlights", price: 120, duration: 120, description: "Partial or full highlights to enhance your natural color" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 1001, userName: "Sarah J.", rating: 5, comment: "Amazing service! My stylist understood exactly what I wanted. Will definitely be back!", date: "2023-04-15" },
      { id: 1002, userName: "Michael T.", rating: 4, comment: "Great haircut, but had to wait a bit even with an appointment.", date: "2023-04-10" },
      { id: 1003, userName: "Priya K.", rating: 5, comment: "The best salon in the area. Love how they transformed my hair!", date: "2023-04-05" }
    ]
  },
  {
    id: 2,
    name: "Urban Cuts",
    address: "456 Market Ave, Indiranagar, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
    description: "Urban Cuts specializes in trendy, modern styles for all hair types with a focus on sustainable products.",
    rating: 4.5,
    reviewCount: 187,
    services: [
      { id: 201, name: "Modern Haircut", price: 40, duration: 45, description: "Contemporary style cut with consultation" },
      { id: 202, name: "Beard Trim", price: 20, duration: 20, description: "Precision beard shaping and trimming" },
      { id: 203, name: "Head Shave", price: 30, duration: 30, description: "Clean head shave with hot towel service" },
      { id: 204, name: "Hair & Beard Combo", price: 55, duration: 60, description: "Complete grooming package" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 2001, userName: "Rahul S.", rating: 5, comment: "Best men's haircut in the city. The attention to detail is impressive.", date: "2023-04-12" },
      { id: 2002, userName: "David L.", rating: 4, comment: "Great service and atmosphere. A bit pricey but worth it.", date: "2023-04-08" }
    ]
  },
  {
    id: 3,
    name: "Bliss Beauty",
    address: "789 Park Blvd, HSR Layout, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Bliss Beauty offers a full range of beauty services, from hair styling to manicures and facials.",
    rating: 4.7,
    reviewCount: 219,
    services: [
      { id: 301, name: "Full Facial", price: 60, duration: 60, description: "Deep cleansing facial with massage" },
      { id: 302, name: "Manicure", price: 25, duration: 30, description: "Nail care and polish application" },
      { id: 303, name: "Pedicure", price: 30, duration: 45, description: "Foot care and polish application" },
      { id: 304, name: "Mani-Pedi Combo", price: 50, duration: 75, description: "Complete hand and foot treatment" },
      { id: 305, name: "Eyebrow Threading", price: 15, duration: 15, description: "Precision eyebrow shaping" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 3001, userName: "Aisha M.", rating: 5, comment: "Amazing facial! My skin feels so refreshed and clean now.", date: "2023-04-14" },
      { id: 3002, userName: "Jessica W.", rating: 4, comment: "Good manicure, but wish they had more polish options.", date: "2023-04-11" },
      { id: 3003, userName: "Linda R.", rating: 5, comment: "The staff is so friendly and professional. Best beauty salon around!", date: "2023-04-03" }
    ]
  },
  {
    id: 4,
    name: "The Barber Shop",
    address: "321 Cedar St, Whitefield, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b24f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Traditional barbershop offering classic men's grooming services in a vintage atmosphere.",
    rating: 4.6,
    reviewCount: 142,
    services: [
      { id: 401, name: "Classic Cut", price: 30, duration: 30, description: "Traditional men's haircut" },
      { id: 402, name: "Hot Towel Shave", price: 35, duration: 45, description: "Straight razor shave with hot towel treatment" },
      { id: 403, name: "Kid's Cut", price: 20, duration: 20, description: "Haircuts for children under 12" },
      { id: 404, name: "Senior's Cut", price: 25, duration: 30, description: "Specialized service for senior clients" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 4001, userName: "Robert J.", rating: 5, comment: "Best barber in town. Been coming here for years and never disappointed.", date: "2023-04-13" },
      { id: 4002, userName: "Sam P.", rating: 4, comment: "Solid haircut and great atmosphere. Love the vintage vibe.", date: "2023-04-07" }
    ]
  },
  {
    id: 5,
    name: "Luxe Hair & Spa",
    address: "555 Luxury Lane, Richmond Town, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    description: "Upscale salon and spa experience with the latest hair and beauty treatments.",
    rating: 4.9,
    reviewCount: 312,
    services: [
      { id: 501, name: "Premium Cut & Style", price: 75, duration: 60, description: "Expert cutting and styling from master stylists" },
      { id: 502, name: "Keratin Treatment", price: 180, duration: 180, description: "Professional smoothing treatment" },
      { id: 503, name: "Hot Stone Massage", price: 90, duration: 90, description: "Relaxing massage with heated stones" },
      { id: 504, name: "Deep Conditioning", price: 45, duration: 30, description: "Intensive hair treatment for damaged locks" },
      { id: 505, name: "Balayage", price: 200, duration: 180, description: "Hand-painted highlights for a natural look" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 5001, userName: "Emma L.", rating: 5, comment: "Worth every penny! The balayage they did is perfect.", date: "2023-04-16" },
      { id: 5002, userName: "Sophia C.", rating: 5, comment: "Incredible experience from start to finish. The hot stone massage was divine.", date: "2023-04-09" },
      { id: 5003, userName: "Neha G.", rating: 4, comment: "Beautiful salon and great service. A bit expensive but the quality shows.", date: "2023-04-04" }
    ]
  },
  {
    id: 6,
    name: "Quick Cuts",
    address: "888 Fast Ave, Jayanagar, Bangalore",
    imageUrl: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Efficient, no-appointment necessary haircuts for when you need to look good fast.",
    rating: 4.2,
    reviewCount: 95,
    services: [
      { id: 601, name: "Express Cut", price: 20, duration: 20, description: "Quick haircut without the wait" },
      { id: 602, name: "Wash & Cut", price: 25, duration: 25, description: "Basic wash and haircut" },
      { id: 603, name: "Buzz Cut", price: 15, duration: 15, description: "All-over clipper cut" },
      { id: 604, name: "Bang Trim", price: 10, duration: 10, description: "Fringe maintenance" }
    ],
    availableSlots: generateAvailableSlotsForSalon(),
    reviews: [
      { id: 6001, userName: "Tom H.", rating: 4, comment: "Great for when you need a quick cut. In and out in 20 minutes!", date: "2023-04-15" },
      { id: 6002, userName: "Kyle M.", rating: 3, comment: "Decent cut for the price, but sometimes the quality varies depending on who you get.", date: "2023-04-06" }
    ]
  }
];
