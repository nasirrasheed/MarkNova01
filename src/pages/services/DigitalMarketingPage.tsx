import React from 'react';
import { Megaphone, TrendingUp, Target, Users, Search, Share2, CheckCircle, MessageCircle, BarChart } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const DigitalMarketingPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's Digital Marketing services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Search engine optimization and marketing to increase visibility and drive traffic"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all major platforms"
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns for immediate results and ROI"
    },
    {
      icon: Users,
      title: "Content Marketing",
      description: "Engaging content strategies that build brand authority and drive conversions"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to measure campaign success"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Optimizing every touchpoint to maximize conversions and revenue"
    }
  ];

  const channels = [
    "Google Ads", "Facebook Ads", "Instagram Marketing", "LinkedIn Campaigns", 
    "YouTube Advertising", "TikTok Marketing", "Email Marketing", "Influencer Marketing"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Megaphone className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing That Delivers Results
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Comprehensive digital marketing strategies that drive traffic, generate leads, 
              and grow your business across all digital channels.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Marketing Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-orange-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Channels We Master
            </h2>
            <p className="text-xl text-gray-600">
              Reach your audience wherever they are with multi-channel strategies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center font-semibold text-gray-700 hover:shadow-lg transition-shadow">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Measurable Results for Every Campaign
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our data-driven approach ensures every marketing dollar works harder for your business. 
                We focus on metrics that matter: leads, sales, and ROI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">300%</div>
                  <div className="text-gray-600">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">150%</div>
                  <div className="text-gray-600">Lead Generation Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">75%</div>
                  <div className="text-gray-600">Cost Per Lead Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">90%</div>
                  <div className="text-gray-600">Client Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Comprehensive marketing audit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom strategy development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Multi-channel campaign execution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Real-time performance tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Monthly optimization reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable service="digital-marketing" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Let's create a digital marketing strategy that drives real results for your business. 
            Get started with a free marketing audit today.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Free Marketing Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;