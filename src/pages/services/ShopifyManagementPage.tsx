import React from 'react';
import { ShoppingCart, TrendingUp, BarChart, Settings, CheckCircle, MessageCircle, Package, Users } from 'lucide-react';

const ShopifyManagementPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's Shopify Management services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "Store Setup & Design",
      description: "Complete Shopify store setup with custom design and branding"
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Product listing, inventory management, and catalog optimization"
    },
    {
      icon: TrendingUp,
      title: "Sales Optimization",
      description: "Conversion rate optimization and sales funnel improvements"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and business intelligence"
    },
    {
      icon: Settings,
      title: "App Integration",
      description: "Third-party app setup and custom functionality integration"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Customer service setup and support system implementation"
    }
  ];

  const benefits = [
    "Increase sales by up to 250%",
    "Reduce cart abandonment by 40%",
    "Improve customer retention",
    "Streamline operations",
    "Professional store appearance",
    "Mobile-optimized experience"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <ShoppingCart className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shopify Store Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Complete Shopify management services to maximize your e-commerce success. 
              From setup to optimization, we handle everything so you can focus on growth.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Shopify Management Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Shopify Management Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to run a successful Shopify store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proven Results for E-commerce Success
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Shopify management services have helped businesses achieve remarkable growth 
                through strategic optimization and professional management.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Sales Increase</span>
                    <span className="font-bold text-green-700">250%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Conversion Rate</span>
                    <span className="font-bold text-green-700">+180%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Customer Retention</span>
                    <span className="font-bold text-green-700">+120%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shopify Management Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the management level that fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Store Setup</h3>
              <div className="text-3xl font-bold text-green-700 mb-4">$1,499</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Complete Store Setup</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Theme Customization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Product Upload (50 items)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Payment Gateway Setup</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic SEO</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-green-700 text-white rounded-xl shadow-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Monthly Management</h3>
              <div className="text-3xl font-bold mb-4">$899<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Everything in Setup</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Ongoing Management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Performance Optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Monthly Reports</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Priority Support</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Management</h3>
              <div className="text-3xl font-bold text-green-700 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Complete Store Management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced Analytics</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom Integrations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated Manager</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 Support</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Shopify Store?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Let our experts manage your Shopify store while you focus on growing your business. 
            Start seeing results within the first month.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Growing Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopifyManagementPage;