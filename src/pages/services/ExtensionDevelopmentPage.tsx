import React from 'react';
import { Smartphone, Chrome, Puzzle, CheckCircle, MessageCircle, Code2, Shield, Zap } from 'lucide-react';

const ExtensionDevelopmentPage = () => {
  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's Extension Development services. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const extensionTypes = [
    { name: "Browser Extensions", platforms: ["Chrome", "Firefox", "Safari", "Edge"] },
    { name: "VS Code Extensions", platforms: ["Visual Studio Code", "Code OSS"] },
    { name: "Mobile App Extensions", platforms: ["iOS", "Android"] },
    { name: "Desktop App Plugins", platforms: ["Electron", "Native Apps"] }
  ];

  const features = [
    "Cross-Platform Compatibility", "Secure Code Implementation", "User-Friendly Interface", "Performance Optimization",
    "Regular Updates", "Customer Support", "Custom Functionality", "Integration Capabilities"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Puzzle className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Extension Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Custom browser extensions, mobile app extensions, and desktop plugins 
              that enhance user experience and extend functionality.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Extension Quote
            </button>
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Extension Types We Develop
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive extension development across all major platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extensionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{type.name}</h3>
                <div className="space-y-2">
                  {type.platforms.map((platform, idx) => (
                    <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {platform}
                    </div>
                  ))}
                </div>
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
              Why Choose Our Extension Development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-sm text-gray-600">Built with security best practices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-sm text-gray-600">Optimized for speed and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Code2 className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-sm text-gray-600">Maintainable and scalable code</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Chrome className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Cross-Platform</h3>
              <p className="text-sm text-gray-600">Works across all major platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Extension Development Pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Extension</h3>
              <div className="text-3xl font-bold text-purple-700 mb-4">$899</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic Functionality</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Single Platform</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic UI</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />1-2 Weeks</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-purple-700 text-white rounded-xl shadow-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Extension</h3>
              <div className="text-3xl font-bold mb-4">$2,499</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Advanced Features</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Multi-Platform</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />Custom UI/UX</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />API Integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-yellow-400 mr-2" />3-4 Weeks</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Extension</h3>
              <div className="text-3xl font-bold text-purple-700 mb-4">Custom</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Complex Features</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />All Platforms</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Premium Design</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Full Integration</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Timeline: TBD</li>
              </ul>
              <button onClick={whatsappContact} className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Extension?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let's create a powerful extension that enhances user experience and extends your platform's capabilities.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Extension Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExtensionDevelopmentPage;