import React, { useState } from 'react';
import { Bot, MessageCircle, TrendingUp, Clock, DollarSign, Users, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import PricingTable from '../../components/PricingTable';

const AIAgentsPage = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's AI Agents. Could you please provide more information about pricing and implementation?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const agents = [
    {
      id: 1,
      name: "CustomerCare AI",
      description: "24/7 customer support automation",
      icon: MessageCircle,
      features: ["Live Chat Support", "Ticket Management", "Multi-language Support", "Sentiment Analysis"],
      benefits: ["Reduce response time by 95%", "Handle 1000+ queries simultaneously", "24/7 availability", "70% cost reduction"],
      implementation: "2-3 weeks",
      roi: "300% in 6 months",
      pricing: "Starting at $299/month"
    },
    {
      id: 2,
      name: "SalesBoost AI",
      description: "Intelligent sales automation and lead qualification",
      icon: TrendingUp,
      features: ["Lead Qualification", "Sales Pipeline Management", "Automated Follow-ups", "Performance Analytics"],
      benefits: ["Increase conversion by 45%", "Qualify leads automatically", "Reduce sales cycle time", "Boost revenue by 60%"],
      implementation: "3-4 weeks",
      roi: "250% in 4 months",
      pricing: "Starting at $499/month"
    },
    {
      id: 3,
      name: "SchedulePro AI",
      description: "Smart appointment and meeting scheduling",
      icon: Clock,
      features: ["Calendar Integration", "Automated Reminders", "Rescheduling Management", "Time Zone Optimization"],
      benefits: ["Eliminate scheduling conflicts", "Reduce no-shows by 80%", "Save 15 hours/week", "Improve client satisfaction"],
      implementation: "1-2 weeks",
      roi: "200% in 3 months",
      pricing: "Starting at $199/month"
    },
    {
      id: 4,
      name: "Ecommerce AI",
      description: "Complete e-commerce automation solution",
      icon: DollarSign,
      features: ["Product Recommendations", "Inventory Management", "Order Processing", "Customer Analytics"],
      benefits: ["Increase sales by 80%", "Reduce cart abandonment", "Optimize inventory", "Personalized shopping"],
      implementation: "4-6 weeks",
      roi: "400% in 8 months",
      pricing: "Starting at $699/month"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Analysis",
      description: "We analyze your business needs and identify automation opportunities"
    },
    {
      step: 2,
      title: "Custom AI Development",
      description: "Our team develops and customizes AI agents specifically for your business"
    },
    {
      step: 3,
      title: "Integration & Testing",
      description: "Seamless integration with your existing systems and thorough testing"
    },
    {
      step: 4,
      title: "Launch & Optimization",
      description: "Go live with continuous monitoring and performance optimization"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Bot className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Agents That Transform Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Boost efficiency by 300%, reduce costs by 70%, and provide 24/7 customer service 
              with our cutting-edge AI agents tailored for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={whatsappContact}
                className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Custom AI Quote
              </button>
              <button
                onClick={() => document.getElementById('agents-showcase').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore AI Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Agents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why AI Agents Are the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI agents are revolutionizing how businesses operate, providing unprecedented efficiency 
              and customer satisfaction while dramatically reducing operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Respond to customers in milliseconds, not minutes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Never miss a customer inquiry, even while you sleep</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Reduce operational costs by up to 70%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Growth</h3>
              <p className="text-gray-600">Handle unlimited customers without hiring more staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Showcase */}
      <section id="agents-showcase" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Agent Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our specialized AI agents or get a custom solution built for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <agent.icon className="h-8 w-8 text-blue-700 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{agent.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {agent.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm text-gray-600">Implementation</div>
                        <div className="font-semibold text-blue-700">{agent.implementation}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">ROI</div>
                        <div className="font-semibold text-green-600">{agent.roi}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Pricing</div>
                        <div className="font-semibold text-orange-600">{agent.pricing}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={whatsappContact}
                    className="w-full mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Get This AI Agent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to deployment, we ensure a smooth transition to AI-powered operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable service="ai-agents" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join the AI revolution and transform your business operations. 
            Get a free consultation and see how AI agents can boost your efficiency by 300%.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Free AI Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIAgentsPage;