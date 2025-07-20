import React, { useState, useEffect, useRef } from 'react';
import { Star, User, Pause, Play } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  company: string;
  country: string;
  text: string;
  rating: number;
  service: string;
  date: string;
  avatar?: string;
}

const HorizontalReviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Extended review data for continuous scrolling
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      country: "USA",
      text: "MarkNova's AI agents transformed our customer service completely. We saw a 300% increase in response efficiency and saved $50K annually. The ROI was incredible!",
      rating: 5,
      service: "AI Agents",
      date: "2024-01-15",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      company: "Gulf Enterprises",
      country: "UAE",
      text: "The web development team delivered beyond our expectations. Professional service at competitive rates - much better value than other agencies we considered.",
      rating: 5,
      service: "Web Development",
      date: "2024-01-10",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "Maria Silva",
      company: "E-commerce Plus",
      country: "Brazil",
      text: "Their Shopify management increased our sales by 250% in just 3 months. The pricing was fair and the results exceeded our investment by far.",
      rating: 5,
      service: "Shopify Management",
      date: "2024-01-08",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      name: "David Chen",
      company: "Digital Solutions",
      country: "Singapore",
      text: "MarkNova's digital marketing strategies helped us reach new markets effectively. Great value for money compared to other agencies in the region.",
      rating: 5,
      service: "Digital Marketing",
      date: "2024-01-05",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 5,
      name: "Emma Thompson",
      company: "Creative Agency",
      country: "UK",
      text: "The extension development service was exactly what we needed. Competitive pricing and excellent quality - highly recommend for any business!",
      rating: 5,
      service: "Extension Development",
      date: "2024-01-03",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      company: "Local Business",
      country: "Spain",
      text: "Professional website development that perfectly captured our brand identity. The pricing was transparent and fair from the start.",
      rating: 5,
      service: "Website Development",
      date: "2024-01-01",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 7,
      name: "Priya Patel",
      company: "Tech Innovations",
      country: "India",
      text: "The AI agents have revolutionized our business processes. Outstanding work and competitive pricing in the AI solutions market!",
      rating: 5,
      service: "AI Agents",
      date: "2023-12-28",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 8,
      name: "Michael Brown",
      company: "Retail Chain",
      country: "Canada",
      text: "MarkNova's team delivered exceptional results across all our digital marketing channels. Great ROI and professional service throughout.",
      rating: 5,
      service: "Digital Marketing",
      date: "2023-12-25",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 9,
      name: "Lisa Wang",
      company: "Startup Hub",
      country: "Australia",
      text: "From concept to execution, MarkNova exceeded our expectations in every way. Fair pricing and incredible value for startups like ours.",
      rating: 5,
      service: "Web Development",
      date: "2023-12-22",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 10,
      name: "Johann Schmidt",
      company: "Manufacturing Co.",
      country: "Germany",
      text: "The web development and AI integration was seamless. Great team to work with and competitive rates for the European market!",
      rating: 5,
      service: "AI Agents",
      date: "2023-12-20",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 11,
      name: "Fatima Al-Zahra",
      company: "Digital Agency",
      country: "Morocco",
      text: "Excellent Shopify management services. Our online store performance improved dramatically with their optimization strategies.",
      rating: 5,
      service: "Shopify Management",
      date: "2023-12-18",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 12,
      name: "Roberto Silva",
      company: "Tech Solutions",
      country: "Mexico",
      text: "The browser extension they developed for us works flawlessly across all platforms. Professional development at competitive pricing.",
      rating: 5,
      service: "Extension Development",
      date: "2023-12-15",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const cardWidth = 320; // width of each review card + margin
    const totalWidth = reviews.length * cardWidth;

    const scroll = () => {
      if (!isPaused && !isHovered) {
        scrollPosition += scrollSpeed;
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isHovered, reviews.length]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real testimonials from satisfied clients worldwide
            </p>
          </div>
          
          {/* Accessibility Control */}
          <button
            onClick={togglePause}
            className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
            aria-label={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
          >
            {isPaused ? (
              <>
                <Play className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Resume</span>
              </>
            ) : (
              <>
                <Pause className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Pause</span>
              </>
            )}
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-hidden"
            style={{ 
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {review.avatar ? (
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 truncate">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {review.company}, {review.country}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                  {review.text}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays for Visual Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HorizontalReviews;