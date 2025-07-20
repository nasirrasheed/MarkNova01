import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's digital marketing services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const services = [
    { name: 'AI Agents', path: '/services/ai-agents' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Extension Development', path: '/services/extension-development' },
    { name: 'Shopify Management', path: '/services/shopify-management' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">MarkNova</span>
            </div>
            <p className="text-gray-400">
              Leading digital marketing agency specializing in AI agents and innovative solutions for global clients.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Serving clients worldwide</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/services/ai-agents" className="text-gray-400 hover:text-white transition-colors">AI Agents</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+92 335 9112095</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@marknova.com</span>
              </div>
              <button
                onClick={whatsappContact}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MarkNova. All rights reserved. | CEO: Muhammad Nasir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;