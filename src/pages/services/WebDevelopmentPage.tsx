import React from 'react';
import { Code, Smartphone, Globe, Zap, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const WebDevelopmentPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's Web Development services. Could you please provide more information about pricing and timeline?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "PHP", "MongoDB", "PostgreSQL"
  ];

  const features = [
    "Responsive Design", "Fast Loading Speed", "SEO Optimization", "Security Features",
    "Cross-browser Compatibility", "Mobile-First Approach", "API Integration", "Database Design"
  ];

  const process = [
    { step: 1, title: "Requirements Analysis", description: "Understanding your business needs and technical requirements" },
    { step: 2, title: "Design & Planning", description: "Creating wireframes, mockups, and technical architecture" },
    { step: 3, title: "Development", description: "Building your web application with modern technologies" },
    { step: 4, title: "Testing & Launch", description: "Thorough testing and deployment to production" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Code className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Custom web applications built with cutting-edge technologies. 
              Fast, secure, and scalable solutions for businesses worldwide.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Development Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modern Web Solutions for Every Business
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in creating high-performance web applications that deliver exceptional user experiences. 
                Our team uses the latest technologies and best practices to ensure your web presence stands out.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Smartphone className="h-6 w-6 text-blue-700 mr-2" />
                  <span className="text-gray-700">Mobile Responsive</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-700 mr-2" />
                  <span className="text-gray-700">Lightning Fast</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-blue-700 mr-2" />
                  <span className="text-gray-700">SEO Optimized</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-2" />
                  <span className="text-gray-700">Quality Assured</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white px-3 py-2 rounded-lg text-center font-semibold text-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive web development features for complete solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable service="web-development" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss your project requirements and create a custom solution that drives results.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;