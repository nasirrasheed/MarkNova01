import React, { useState } from 'react';
import { ExternalLink, Star, MessageCircle, Filter, Search } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const whatsappContact = () => {
    const message = encodeURIComponent("Hi, I'm interested in MarkNova's services after seeing your portfolio. Could you please provide more information?");
    window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
  };

  const projects = [
    {
      id: 1,
      title: "TechStart AI Customer Service Platform",
      category: "ai-agents",
      client: "TechStart Inc., USA",
      description: "Implemented AI customer service agents that reduced response time by 95% and increased customer satisfaction by 40%.",
      results: ["300% efficiency increase", "95% faster response time", "40% higher satisfaction", "$50K+ cost savings"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "MarkNova's AI agents transformed our customer service completely. We went from struggling with response times to having 24/7 automated support.",
      rating: 5
    },
    {
      id: 2,
      title: "Gulf Enterprises E-commerce Platform",
      category: "web-development",
      client: "Gulf Enterprises, UAE",
      description: "Custom e-commerce platform with advanced inventory management and multi-currency support for international sales.",
      results: ["250% sales increase", "40+ countries reached", "99.9% uptime", "Mobile-first design"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "The e-commerce platform exceeded all our expectations. Sales have increased dramatically since launch.",
      rating: 5
    },
    {
      id: 3,
      title: "E-commerce Plus Shopify Optimization",
      category: "shopify",
      client: "E-commerce Plus, Brazil",
      description: "Complete Shopify store optimization including theme customization, app integration, and conversion optimization.",
      results: ["250% sales growth", "60% conversion increase", "40% cart abandonment reduction", "Mobile optimization"],
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Our Shopify store performance improved dramatically. Sales increased by 250% in just 3 months!",
      rating: 5
    },
    {
      id: 4,
      title: "Digital Solutions Marketing Campaign",
      category: "digital-marketing",
      client: "Digital Solutions, Singapore",
      description: "Comprehensive digital marketing strategy including SEO, PPC, and social media marketing for B2B lead generation.",
      results: ["300% lead increase", "150% ROI improvement", "10+ new markets", "Brand recognition boost"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "The marketing strategy helped us reach new markets we never thought possible. Outstanding results!",
      rating: 5
    },
    {
      id: 5,
      title: "Creative Agency Browser Extension",
      category: "extension",
      client: "Creative Agency, UK",
      description: "Custom browser extension for project management and client communication with real-time collaboration features.",
      results: ["50% workflow improvement", "Real-time collaboration", "Cross-browser compatibility", "User-friendly interface"],
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "The browser extension streamlined our entire workflow. It's exactly what we needed for our team.",
      rating: 5
    },
    {
      id: 6,
      title: "Local Business Website Redesign",
      category: "website",
      client: "Local Business, Spain",
      description: "Complete website redesign with modern UI/UX, SEO optimization, and mobile responsiveness for better user experience.",
      results: ["200% traffic increase", "Mobile-first design", "SEO optimization", "Fast loading speed"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Our new website perfectly captures our brand identity. The design is modern and professional.",
      rating: 5
    },
    {
      id: 7,
      title: "Tech Innovations AI Sales Agent",
      category: "ai-agents",
      client: "Tech Innovations, India",
      description: "AI sales agent implementation for lead qualification and customer onboarding automation.",
      results: ["180% sales boost", "Automated lead qualification", "24/7 availability", "Customer onboarding"],
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "The AI sales agent revolutionized our sales process. We're closing more deals than ever before.",
      rating: 5
    },
    {
      id: 8,
      title: "Retail Chain Digital Transformation",
      category: "digital-marketing",
      client: "Retail Chain, Canada",
      description: "End-to-end digital marketing transformation including omnichannel strategy and customer journey optimization.",
      results: ["400% online sales", "Omnichannel presence", "Customer journey optimization", "Brand consistency"],
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "MarkNova delivered exceptional results across all our digital marketing channels. Highly recommended!",
      rating: 5
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai-agents', label: 'AI Agents' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'shopify', label: 'Shopify Management' },
    { value: 'extension', label: 'Extension Development' },
    { value: 'website', label: 'Website Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Real projects, real results. See how we've helped businesses worldwide 
              achieve their digital transformation goals.
            </p>
            <button
              onClick={whatsappContact}
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.value === project.category)?.label}
                    </span>
                    <div className="flex items-center">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="bg-gray-50 p-3 rounded-lg mb-4 italic text-gray-700 text-sm">
                    "{project.testimonial}"
                  </blockquote>
                  
                  <button
                    onClick={whatsappContact}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Similar Results
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Measurable results across all our client projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join hundreds of successful businesses worldwide. Let's discuss your project 
            and create a success story together.
          </p>
          <button
            onClick={whatsappContact}
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Your Success Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;