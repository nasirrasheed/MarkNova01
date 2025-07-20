import React from 'react';
import { Globe, Smartphone, Search, Zap, CheckCircle, MessageCircle, Palette, Code } from 'lucide-react';

const WebsiteDevelopmentPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's Website Development services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const websiteTypes = [
    { name: "Business Websites", description: "Professional corporate websites that build trust and credibility" },
    { name: "E-commerce Sites", description: "Online stores with payment processing and inventory management" },
    { name: "Portfolio Websites", description: "Showcase your work with stunning visual presentations" },
    { name: "Landing Pages", description: "High-converting pages designed for specific campaigns" },
    { name: "Blog Platforms", description: "Content management systems for regular publishing" },
    { name: "Custom Applications", description: "Tailored web solutions for unique business requirements" }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect display on all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed and performance"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for search engine visibility"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique designs that reflect your brand"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Globe className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Website Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Custom websites that convert visitors into customers. Modern designs, 
              fast performance, and SEO optimization for maximum online impact.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Website Quote
            </button>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Websites We Build
            </h2>
            <p className="text-xl text-gray-600">
              From simple business sites to complex web applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every Website Includes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <feature.icon className="h-12 w-12 text-indigo-700 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Discovery", description: "Understanding your needs and goals" },
              { step: 2, title: "Design", description: "Creating mockups and wireframes" },
              { step: 3, title: "Development", description: "Building your website" },
              { step: 4, title: "Testing", description: "Quality assurance and optimization" },
              { step: 5, title: "Launch", description: "Going live and monitoring" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Development Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Website</h3>
              <div className="text-3xl font-bold text-indigo-700 mb-4">$799</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Up to 5 Pages</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mobile Responsive</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Contact Form</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic SEO</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Week Delivery</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-indigo-700 text-white rounded-xl shadow-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold mb-4">Business Website</h3>
              <div className="text-3xl font-bold mb-4">$1,899</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Up to 10 Pages</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Custom Design</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />CMS Integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Advanced SEO</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />2-3 Weeks Delivery</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Website</h3>
              <div className="text-3xl font-bold text-indigo-700 mb-4">$3,999</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited Pages</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />E-commerce Ready</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom Features</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Premium Support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />4-6 Weeks Delivery</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Get a professional website that represents your brand and converts visitors into customers.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Website Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;