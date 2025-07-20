import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, Users, Award, TrendingUp, MessageCircle, ArrowRight, Code, Smartphone, ShoppingCart, Megaphone, Star } from 'lucide-react';
import HorizontalReviews from '../components/HorizontalReviews';

const HomePage = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const targetValues = {
    clients: 500,
    projects: 1200,
    countries: 25,
    satisfaction: 98
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      country: "USA",
      text: "MarkNova's AI agents transformed our customer service. We saw a 300% increase in response efficiency.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Gulf Enterprises",
      country: "UAE",
      text: "The web development team delivered beyond our expectations. Professional and timely service.",
      rating: 5
    },
    {
      name: "Maria Silva",
      company: "E-commerce Plus",
      country: "Brazil",
      text: "Their Shopify management increased our sales by 250% in just 3 months. Incredible results!",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Digital Solutions",
      country: "Singapore",
      text: "MarkNova's digital marketing strategies helped us reach new markets effectively.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "Creative Agency",
      country: "UK",
      text: "The extension development service was exactly what we needed. Highly recommend!",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      company: "Local Business",
      country: "Spain",
      text: "Professional website development that perfectly captured our brand identity.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "Tech Innovations",
      country: "India",
      text: "The AI agents have revolutionized our business processes. Outstanding work!",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "Retail Chain",
      country: "Canada",
      text: "MarkNova's team delivered exceptional results across all our digital marketing channels.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "Startup Hub",
      country: "Australia",
      text: "From concept to execution, MarkNova exceeded our expectations in every way.",
      rating: 5
    },
    {
      name: "Johann Schmidt",
      company: "Manufacturing Co.",
      country: "Germany",
      text: "The web development and AI integration was seamless. Great team to work with!",
      rating: 5
    }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        clients: Math.min(prev.clients + targetValues.clients / steps, targetValues.clients),
        projects: Math.min(prev.projects + targetValues.projects / steps, targetValues.projects),
        countries: Math.min(prev.countries + targetValues.countries / steps, targetValues.countries),
        satisfaction: Math.min(prev.satisfaction + targetValues.satisfaction / steps, targetValues.satisfaction)
      }));
    }, stepDuration);

    setTimeout(() => clearInterval(interval), duration);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's digital marketing services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Cutting-edge AI solutions that automate customer service, sales, and business processes",
      link: "/services/ai-agents",
      featured: true,
      benefits: ["24/7 Customer Support", "300% Efficiency Increase", "Cost Reduction"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance",
      link: "/services/web-development",
      benefits: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: Smartphone,
      title: "Extension Development",
      description: "Browser extensions and mobile app extensions that enhance user experience",
      link: "/services/extension-development",
      benefits: ["Cross-Platform", "User-Friendly", "Secure"]
    },
    {
      icon: ShoppingCart,
      title: "Shopify Management",
      description: "Complete Shopify store management to maximize your e-commerce success",
      link: "/services/shopify-management",
      benefits: ["Sales Optimization", "Inventory Management", "Customer Analytics"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites that convert visitors into customers",
      link: "/services/website-development",
      benefits: ["Modern Design", "Mobile Responsive", "Fast Performance"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      link: "/services/digital-marketing",
      benefits: ["Social Media", "SEO/SEM", "Content Marketing"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-yellow-400"> AI-Powered</span> Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              MarkNova delivers cutting-edge AI agents and digital marketing services to clients worldwide. 
              Boost efficiency by 300% and scale your business globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/ai-agents"
                className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                <Bot className="mr-2 h-5 w-5" />
                Explore AI Agents
              </Link>
              <button
                onClick={whatsappContact}
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Working with Clients All Over the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From startups to enterprise companies, we've helped businesses across 25+ countries 
            achieve their digital transformation goals with our innovative solutions and dedicated expertise.
          </p>
          
          {/* Animated Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {Math.floor(counters.clients)}+
              </div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {Math.floor(counters.projects)}+
              </div>
              <div className="text-gray-600 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {Math.floor(counters.countries)}+
              </div>
              <div className="text-gray-600 font-semibold">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {Math.floor(counters.satisfaction)}%
              </div>
              <div className="text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  service.featured 
                    ? 'bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-xl' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                <service.icon className={`h-12 w-12 mb-4 ${service.featured ? 'text-yellow-400' : 'text-blue-700'}`} />
                <h3 className={`text-xl font-bold mb-3 ${service.featured ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${service.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className={`flex items-center text-sm ${service.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                      <Star className="h-4 w-4 mr-2 text-yellow-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className={`inline-flex items-center font-semibold transition-colors ${
                    service.featured 
                      ? 'text-yellow-400 hover:text-yellow-300' 
                      : 'text-blue-700 hover:text-blue-800'
                  }`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionary AI Agents for Modern Business
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our AI agents are the future of business automation. They handle customer inquiries, 
                process orders, schedule appointments, and provide 24/7 support while you focus on growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-yellow-400 mr-3" />
                  <div>
                    <div className="font-semibold">300% Efficiency</div>
                    <div className="text-blue-200 text-sm">Response Time Improvement</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-yellow-400 mr-3" />
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-blue-200 text-sm">Always Available</div>
                  </div>
                </div>
              </div>
              <Link
                to="/services/ai-agents"
                className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Discover AI Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <Bot className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">AI-Powered Solutions</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Customer Service Automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Sales Process Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Lead Generation & Qualification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Appointment Scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Reviews */}
      <HorizontalReviews />

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses worldwide. Get a free consultation 
            and discover how our AI-powered solutions can accelerate your growth.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;