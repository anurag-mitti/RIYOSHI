
import React from 'react';
import { Calendar } from './ui/calendar';
import { format, addDays, isSameDay } from 'date-fns';
import { TimeSlot } from '../types';

interface BookingCalendarProps {
  availableSlots: { [date: string]: TimeSlot[] };
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateSelect: (date: Date | null) => void;
  onTimeSelect: (time: string) => void;
}

const generateTimeSlots = (start: number = 10, end: number = 20): string[] => {
  const slots: string[] = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
};

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  availableSlots,
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect
}) => {
  const today = new Date();
  
  // Get all time slots for the selected date
  const getTimeSlotsForDate = (date: Date | null): TimeSlot[] => {
    if (!date) return [];
    
    // Format the date to match the keys in availableSlots
    const dateKey = format(date, 'yyyy-MM-dd');
    return availableSlots[dateKey] || [];
  };
  
  const timeSlots = selectedDate ? getTimeSlotsForDate(selectedDate) : [];
  
  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        disabled={(date) => date < today}
        className="rounded-md border"
      />
      
      {selectedDate && (
        <div>
          <h3 className="font-semibold mb-3">Available Times on {format(selectedDate, 'MMMM d, yyyy')}</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {timeSlots.length > 0 ? (
              timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  className={`p-2 border rounded-md text-sm text-center transition-colors ${
                    selectedTime === slot.time
                      ? 'bg-primary text-white'
                      : slot.available
                      ? 'hover:border-primary'
                      : 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!slot.available}
                  onClick={() => slot.available && onTimeSelect(slot.time)}
                >
                  {slot.time}
                </button>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">No time slots available for this date.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
