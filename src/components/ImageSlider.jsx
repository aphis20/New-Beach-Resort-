import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "Sunset Paradise",
      description: "Experience breathtaking sunsets from our private beach",
      location: "North Shore, Oahu"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Poolside",
      description: "Relax by our infinity pool with stunning ocean views",
      location: "Beachfront Resort"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Ocean View Suites",
      description: "Wake up to panoramic views of the Pacific Ocean",
      location: "Premium Accommodation"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Tropical Gardens",
      description: "Stroll through our lush tropical gardens",
      location: "Resort Grounds"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1566669437685-2f63f0973c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Beachfront Dining",
      description: "Savor gourmet meals with your toes in the sand",
      location: "Ocean View Restaurant"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Private Villas",
      description: "Experience ultimate privacy in our luxury villas",
      location: "Exclusive Accommodation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-1000">
              <div className="max-w-4xl mx-auto">
                <span className="text-amber-400 text-sm font-semibold tracking-widest mb-2 block transform transition-transform duration-500 delay-200">
                  {slide.location}
                </span>
                <h2 className="text-4xl font-bold mb-4 transform transition-transform duration-500 delay-300">
                  {slide.title}
                </h2>
                <p className="text-xl text-gray-200 transform transition-transform duration-500 delay-400">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 1000);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-500 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

    