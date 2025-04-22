import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Footer Link Section Component
const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a 
            href={link.href} 
            className="hover:text-blue-400 transition-colors"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Social Media Icon Component
const SocialIcon = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors"
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </a>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  // Footer sections data
  const sections = [
    {
      title: 'Solutions',
      links: [
        { href: '/solutions/hotel-management', text: 'Hotel Management' },
        { href: '/solutions/booking-system', text: 'Booking System' },
        { href: '/solutions/guest-services', text: 'Guest Services' },
        { href: '/solutions/room-management', text: 'Room Management' },
        { href: '/solutions/event-planning', text: 'Event Planning' },
      ],
    },
    {
      title: 'Support',
      links: [
        { href: '/support/help-center', text: 'Help Center' },
        { href: '/support/contact', text: 'Contact Us' },
        { href: '/support/faqs', text: 'FAQs' },
        { href: '/support/feedback', text: 'Feedback' },
        { href: '/support/live-chat', text: 'Live Chat' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', text: 'About Us' },
        { href: '/careers', text: 'Careers' },
        { href: '/press', text: 'Press' },
        { href: '/blog', text: 'Blog' },
        { href: '/partners', text: 'Partners' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/legal/privacy-policy', text: 'Privacy Policy' },
        { href: '/legal/terms', text: 'Terms of Service' },
        { href: '/legal/cookies', text: 'Cookie Policy' },
        { href: '/legal/accessibility', text: 'Accessibility' },
        { href: '/legal/compliance', text: 'Compliance' },
      ],
    },
  ];

  // Social media data
  const socialLinks = [
    { href: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://youtube.com', icon: FaYoutube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <FooterSection 
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Subscription Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest offers and news</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              Designed by Komolafe &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 