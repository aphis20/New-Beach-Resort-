import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hotel lobby"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative pt-16 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Welcome to Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience luxury and comfort in our beautifully designed rooms with stunning views and world-class amenities.
          </p>
          <a
            href="/book"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;