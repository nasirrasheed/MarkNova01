import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Agents', path: '/services/ai-agents', highlight: true },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Extension Development', path: '/services/extension-development' },
    { name: 'Shopify Management', path: '/services/shopify-management' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's digital marketing services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold text-gray-900">MarkNova</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-700 transition-colors ${
                location.pathname === '/' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                className="flex items-center text-gray-700 hover:text-blue-700 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {servicesDropdown && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        service.highlight 
                          ? 'text-blue-700 font-semibold bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-700'
                      }`}
                    >
                      {service.name}
                      {service.highlight && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-1 rounded">Featured</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/projects" 
              className={`text-gray-700 hover:text-blue-700 transition-colors ${
                location.pathname === '/projects' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-700 transition-colors ${
                location.pathname === '/about' ? 'text-blue-700 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <button
              onClick={whatsappContact}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              <Link to="/" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
              <div className="py-2">
                <div className="text-gray-700 font-semibold mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block py-1 text-sm ${
                        service.highlight ? 'text-blue-700 font-semibold' : 'text-gray-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/projects" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/about" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>About</Link>
              <button
                onClick={() => {
                  whatsappContact();
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;