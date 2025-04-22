import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Booking from './components/Booking';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
