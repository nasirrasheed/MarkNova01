import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappContact = (service = 'general') => {
    const messages = {
      general: "Hi, I'm interested in MarkNova's services. Could you please provide more information?",
      'ai-agents': "Hi, I'm interested in MarkNova's AI Agents. Could you please provide more information about pricing and implementation?",
      'web-development': "Hi, I'm interested in MarkNova's Web Development services. Could you please provide more information?",
      'digital-marketing': "Hi, I'm interested in MarkNova's Digital Marketing services. Could you please provide more information?",
      'shopify': "Hi, I'm interested in MarkNova's Shopify Management services. Could you please provide more information?",
      'extension': "Hi, I'm interested in MarkNova's Extension Development services. Could you please provide more information?",
      'website': "Hi, I'm interested in MarkNova's Website Development services. Could you please provide more information?"
    };

    const message = encodeURIComponent(messages[service] || messages.general);
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
    setIsExpanded(false);
  };

  const services = [
    { key: 'ai-agents', label: 'AI Agents', color: 'bg-blue-600' },
    { key: 'web-development', label: 'Web Development', color: 'bg-purple-600' },
    { key: 'digital-marketing', label: 'Digital Marketing', color: 'bg-orange-600' },
    { key: 'shopify', label: 'Shopify Management', color: 'bg-green-600' },
    { key: 'extension', label: 'Extensions', color: 'bg-indigo-600' },
    { key: 'website', label: 'Websites', color: 'bg-teal-600' }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Service Options */}
      {isExpanded && (
        <div className="mb-4 space-y-2 animate-in slide-in-from-bottom-2 duration-300">
          {services.map((service, index) => (
            <button
              key={service.key}
              onClick={() => whatsappContact(service.key)}
              className={`block w-full text-left px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 ${service.color}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {service.label}
            </button>
          ))}
          <button
            onClick={() => whatsappContact('general')}
            className="block w-full text-left px-4 py-2 rounded-lg bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
          >
            General Inquiry
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
          aria-label="Contact via WhatsApp"
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWhatsApp;