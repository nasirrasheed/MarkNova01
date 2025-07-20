import React from 'react';
import { User, Award, Globe, Users, MessageCircle, Target, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi Muhammad Nasir, I'm interested in learning more about MarkNova's services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships, not just projects"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every strategy and solution is designed to deliver measurable business results"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We understand diverse markets and create solutions that work worldwide"
    }
  ];

  const achievements = [
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "1200+", label: "Projects Completed", icon: Award },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "5+", label: "Years Experience", icon: Target }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MarkNova
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading the digital transformation revolution with AI-powered solutions 
              and innovative marketing strategies for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Muhammad Nasir
                <span className="block text-xl text-blue-600 font-normal mt-2">CEO & Founder</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Muhammad Nasir founded MarkNova with a vision to democratize access to cutting-edge 
                digital marketing and AI solutions for businesses of all sizes. With a passion for 
                innovation and a deep understanding of global markets, he has led the company to 
                serve clients across 25+ countries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Under his leadership, MarkNova has specialized in AI agents - an emerging field 
                that's becoming the primary revenue driver for the company. His expertise in 
                identifying market trends and implementing scalable solutions has helped hundreds 
                of businesses achieve remarkable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={whatsappContact}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Connect with Muhammad
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Muhammad Nasir</h3>
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>5+ Years in Digital Marketing</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Serving 25+ Countries</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>500+ Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a freelance-based digital marketing agency to a global leader in AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">2019</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Beginning</h3>
              <p className="text-gray-600">Started as a freelance digital marketing service, focusing on helping small businesses establish their online presence.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">2021</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Expansion</h3>
              <p className="text-gray-600">Expanded operations globally, serving clients across multiple continents and establishing MarkNova as a trusted brand.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">2023</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Revolution</h3>
              <p className="text-gray-600">Pioneered AI agent solutions, becoming an early leader in business automation and AI-powered customer service.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              To empower businesses worldwide with innovative AI solutions and digital marketing strategies 
              that drive real results. We believe every business, regardless of size, deserves access to 
              cutting-edge technology that can transform their operations and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialized skills that deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">AI & Automation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Agent Development</li>
                <li>• Business Process Automation</li>
                <li>• Machine Learning Integration</li>
                <li>• Customer Service Automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Digital Marketing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SEO & SEM Strategies</li>
                <li>• Social Media Marketing</li>
                <li>• PPC Campaign Management</li>
                <li>• Content Marketing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Web Application Development</li>
                <li>• E-commerce Solutions</li>
                <li>• Browser Extensions</li>
                <li>• Shopify Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join hundreds of businesses worldwide who trust MarkNova for their digital transformation. 
            Let's discuss how we can help you achieve your goals.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start the Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;