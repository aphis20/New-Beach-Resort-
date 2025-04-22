import React, { useState } from 'react';
import { FaCalendarAlt, FaHotel, FaUmbrellaBeach } from 'react-icons/fa';

const Plan = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "Perfect for a quick escape to paradise",
      duration: "2 Days",
      price: "$499",
      icon: <FaCalendarAlt className="text-4xl text-amber-500" />,
      features: [
        "Luxury ocean-view room",
        "Welcome cocktail",
        "Beach access",
        "Breakfast buffet",
        "Spa credit"
      ],
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      popular: false
    },
    {
      id: 2,
      title: "Beach Retreat",
      description: "Experience the ultimate beach vacation",
      duration: "5 Days",
      price: "$1,299",
      icon: <FaUmbrellaBeach className="text-4xl text-amber-500" />,
      features: [
        "Premium suite with balcony",
        "Daily breakfast & dinner",
        "Private beach access",
        "Spa treatments",
        "Water sports activities"
      ],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      popular: true
    },
    {
      id: 3,
      title: "Luxury Escape",
      description: "Indulge in pure luxury and relaxation",
      duration: "7 Days",
      price: "$2,499",
      icon: <FaHotel className="text-4xl text-amber-500" />,
      features: [
        "Presidential suite",
        "All-inclusive dining",
        "Private pool access",
        "Personal butler service",
        "VIP airport transfer"
      ],
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Perfect Stay</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated packages designed for every type of traveler
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            {plans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-600 hover:text-amber-500'
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`transform transition-all duration-500 ${
                activeTab === index
                  ? 'scale-105 opacity-100'
                  : 'scale-95 opacity-50'
              }`}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredCard === plan.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2">
                      {plan.icon}
                      <span className="text-white text-xl font-semibold">{plan.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-amber-500">{plan.price}</span>
                    <span className="text-gray-500 ml-1">per person</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-amber-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300">
            Customize Your Plan
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

export default Plan;