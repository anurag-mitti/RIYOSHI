
export interface Service {
  id: number;
  name: string;
  price: number;
  description?: string;
  duration: number;
  category?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Salon {
  id: number;
  name: string;
  address: string;
  imageUrl?: string;
  description?: string;
  rating: number;
  reviewCount: number;
  services: Service[];
  availableSlots: { [date: string]: TimeSlot[] };
  reviews?: Review[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  profileImage?: string;
}

export interface Booking {
  id: number;
  userId: number;
  salonId: number;
  serviceId: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
