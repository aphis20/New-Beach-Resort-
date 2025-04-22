import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUserFriends, FaEnvelope, FaPhone, FaSpinner } from 'react-icons/fa';

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }
    if (formData.guests < 1) newErrors.guests = 'Number of guests must be at least 1';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to confirmation page with booking data
      navigate('/confirmation', { state: { bookingData: formData } });
    } catch (error) {
      console.error('Booking submission failed:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to submit booking. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Book Your Stay</h2>
          <p className="mt-2 text-lg text-gray-600">
            Fill out the form below to make a reservation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
          {errors.submit && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{errors.submit}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUserFriends className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="guests"
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`block w-full pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.guests ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests}</p>}
            </div>

            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                Check-in Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="checkIn"
                  id="checkIn"
                  required
                  min={minDate}
                  value={formData.checkIn}
                  onChange={handleChange}
                  className={`block w-full pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.checkIn ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.checkIn && <p className="mt-1 text-sm text-red-600">{errors.checkIn}</p>}
            </div>

            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                Check-out Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  required
                  min={formData.checkIn || minDate}
                  value={formData.checkOut}
                  onChange={handleChange}
                  className={`block w-full pl-10 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.checkOut ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.checkOut && <p className="mt-1 text-sm text-red-600">{errors.checkOut}</p>}
            </div>

            <div>
              <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">
                Room Type
              </label>
              <select
                name="roomType"
                id="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
                <option value="presidential">Presidential Suite</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              id="specialRequests"
              rows={4}
              value={formData.specialRequests}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Any special requests or requirements?"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Processing...
                </>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking; 