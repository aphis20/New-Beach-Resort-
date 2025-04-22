import React from 'react';
import { FaUmbrellaBeach, FaSwimmingPool, FaSpa, FaWineGlassAlt } from 'react-icons/fa';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Beachfront Paradise",
      description: "Experience luxury with our ocean-view suites, private beach access, and sunset cocktails.",
      icon: <FaUmbrellaBeach className="text-4xl text-amber-500" />,
      price: "$299",
      duration: "per night",
      features: ["Private beach access", "Ocean-view balcony", "Complimentary breakfast", "Sunset cocktails"]
    },
    {
      id: 2,
      title: "Poolside Retreat",
      description: "Relax by our infinity pool with poolside service and stunning ocean views.",
      icon: <FaSwimmingPool className="text-4xl text-amber-500" />,
      price: "$249",
      duration: "per night",
      features: ["Infinity pool access", "Poolside service", "Complimentary drinks", "Sun loungers"]
    },
    {
      id: 3,
      title: "Spa & Wellness",
      description: "Indulge in our world-class spa treatments and wellness programs.",
      icon: <FaSpa className="text-4xl text-amber-500" />,
      price: "$199",
      duration: "per treatment",
      features: ["Massage therapy", "Facial treatments", "Yoga sessions", "Wellness consultation"]
    },
    {
      id: 4,
      title: "Dining Experience",
      description: "Savor gourmet meals prepared by our award-winning chefs.",
      icon: <FaWineGlassAlt className="text-4xl text-amber-500" />,
      price: "$159",
      duration: "per person",
      features: ["5-course dinner", "Wine pairing", "Chef's special", "Ocean view dining"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive packages designed to make your stay unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-50 mx-auto mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-center mb-4">{offer.description}</p>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-amber-500">{offer.price}</span>
                  <span className="text-gray-500 ml-1">{offer.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300">
            View All Offers
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

export default Offers;