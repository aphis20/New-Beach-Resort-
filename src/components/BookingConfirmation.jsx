import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHotel, FaCalendarAlt, FaUserFriends, FaEnvelope, FaPhone } from 'react-icons/fa';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookingData = state?.bookingData || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-8 text-center">
            <FaCheckCircle className="mx-auto h-16 w-16 text-white" />
            <h2 className="mt-4 text-3xl font-extrabold text-white">Booking Confirmed!</h2>
            <p className="mt-2 text-blue-100">Your reservation has been successfully processed</p>
          </div>

          {/* Booking Details */}
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaHotel className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Room Type</h3>
                  <p className="mt-1 text-gray-600 capitalize">{bookingData.roomType || 'Standard Room'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaUserFriends className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Guests</h3>
                  <p className="mt-1 text-gray-600">{bookingData.guests || 1} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaCalendarAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Check-in Date</h3>
                  <p className="mt-1 text-gray-600">{bookingData.checkIn || 'Not specified'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaCalendarAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Check-out Date</h3>
                  <p className="mt-1 text-gray-600">{bookingData.checkOut || 'Not specified'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaEnvelope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">{bookingData.email || 'Not specified'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaPhone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">{bookingData.phone || 'Not specified'}</p>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            {bookingData.specialRequests && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Special Requests</h3>
                <p className="mt-2 text-gray-600">{bookingData.specialRequests}</p>
              </div>
            )}

            {/* Booking Reference */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Booking Reference: <span className="font-medium">{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                A confirmation email has been sent to {bookingData.email || 'your email address'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePrint}
                className="flex-1 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Print Confirmation
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation; 