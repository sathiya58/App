// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const availableCounselors = [
    { id: 1, name: "Dr. sathiyapriya - Mental Health Specialist" },
    { id: 2, name: "Dr. Dharmasuresh - Relationship Expert" },
    { id: 3, name: "Teju - Career Strategist" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !selectedCounselor) {
      setConfirmationMessage('Please fill out all fields to book your appointment.');
      return;
    }

    // Logic to handle the appointment booking, e.g., send data to an API
    console.log('Booking appointment for:', selectedDate, selectedTime, selectedCounselor, notes);

    // Confirm the booking
    setConfirmationMessage(`Your appointment with ${availableCounselors.find(counselor => counselor.id === parseInt(selectedCounselor))?.name} has been scheduled for ${selectedDate} at ${selectedTime}.`);
  };

  return (
    <div className="booking-container p-6 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      
      {confirmationMessage && (
        <div className="confirmation-message bg-green-100 p-4 mb-6 rounded-md">
          <p className="text-green-800">{confirmationMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Counselor Selection */}
        <div>
          <label htmlFor="counselor" className="block text-lg font-semibold mb-2">Select Counselor</label>
          <select
            id="counselor"
            value={selectedCounselor}
            onChange={(e) => setSelectedCounselor(e.target.value)}
            className="w-full p-3 border rounded-md"
          >
            <option value="">--Choose a Counselor--</option>
            {availableCounselors.map((counselor) => (
              <option key={counselor.id} value={counselor.id}>
                {counselor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-lg font-semibold mb-2">Select Date</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Time Selection */}
        <div>
          <label htmlFor="time" className="block text-lg font-semibold mb-2">Select Time</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Notes Section */}
        <div>
          <label htmlFor="notes" className="block text-lg font-semibold mb-2">Additional Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any notes or preferences for your session?"
            className="w-full p-3 border rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full py-3"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
