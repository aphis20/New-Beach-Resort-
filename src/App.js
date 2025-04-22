import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Booking from './components/Booking';
import BookingConfirmation from './components/BookingConfirmation';
import { useApp } from './context/AppContext';

const AppContent = () => {
  const { isLoading, notifications } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Offers />
              <Plan />
              <Rooms />
              <ImageSlider />
            </>
          } />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </main>
      <Footer />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <LoadingSpinner size="xl" color="white" />
        </div>
      )}

      {/* Notifications */}
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => {}}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
