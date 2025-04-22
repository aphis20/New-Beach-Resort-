import React from 'react';
import { FaBed, FaSwimmingPool, FaUmbrellaBeach, FaWifi, FaCoffee } from 'react-icons/fa';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Ocean View Suite",
      description: "Wake up to breathtaking ocean views from your private balcony. This suite features a king-size bed, modern amenities, and direct beach access.",
      price: "$299",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: [
        { icon: <FaBed />, text: "King Size Bed" },
        { icon: <FaUmbrellaBeach />, text: "Beach Access" },
        { icon: <FaWifi />, text: "Free WiFi" }
      ]
    },
    {
      id: 2,
      title: "Luxury Pool Villa",
      description: "Your private oasis with a plunge pool, outdoor shower, and tropical garden. Perfect for couples seeking privacy and luxury.",
      price: "$399",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: [
        { icon: <FaSwimmingPool />, text: "Private Pool" },
        { icon: <FaBed />, text: "King Size Bed" },
        { icon: <FaWifi />, text: "Free WiFi" }
      ]
    },
    {
      id: 3,
      title: "Family Suite",
      description: "Spacious suite perfect for families, featuring two bedrooms, a living area, and a kitchenette. Close to all resort amenities.",
      price: "$449",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      amenities: [
        { icon: <FaBed />, text: "Two Bedrooms" },
        { icon: <FaWifi />, text: "Free WiFi" },
        { icon: <FaCoffee />, text: "Kitchenette" }
      ]
    },
    {
      id: 4,
      title: "Honeymoon Suite",
      description: "Romantic retreat with a four-poster bed, private jacuzzi, and stunning sunset views. Includes champagne and chocolate on arrival.",
      price: "$499",
      image: "https://images.unsplash.com/photo-1566669437685-2f63f0973c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: [
        { icon: <FaBed />, text: "Four-Poster Bed" },
        { icon: <FaSwimmingPool />, text: "Private Jacuzzi" },
        { icon: <FaWifi />, text: "Free WiFi" }
      ]
    },
    {
      id: 5,
      title: "Presidential Suite",
      description: "Ultimate luxury with panoramic ocean views, private butler service, and exclusive access to the VIP lounge. The epitome of beachfront living.",
      price: "$799",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      amenities: [
        { icon: <FaBed />, text: "King Size Bed" },
        { icon: <FaSwimmingPool />, text: "Private Pool" },
        { icon: <FaWifi />, text: "Free WiFi" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms & Suites</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of luxurious accommodations, each designed to provide the perfect beach getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Room Info Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                  <p className="text-gray-200 mb-4">{room.description}</p>
                  
                  {/* Amenities */}
                  <div className="flex space-x-4 mb-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-white transform transition-transform duration-300 group-hover:translate-x-0 translate-x-4" style={{ transitionDelay: `${index * 100}ms` }}>
                        <span className="text-amber-500 mr-2">{amenity.icon}</span>
                        <span className="text-sm">{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                    <span className="text-2xl font-bold text-amber-500">{room.price}</span>
                    <span className="text-white text-sm">per night</span>
                  </div>
                </div>
              </div>

              {/* Room Title (Always Visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm rounded-b-2xl transform transition-transform duration-300 group-hover:translate-y-full">
                <h3 className="text-xl font-bold text-white">{room.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-amber-500 font-semibold">{room.price}</span>
                  <span className="text-white text-sm">per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            View All Rooms
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;