import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, User, ChevronDown, Loader2 } from 'lucide-react';

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

const InfiniteReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [autoScroll, setAutoScroll] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout>();

  // Extended review data with market-competitive pricing context
  const allReviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      country: "USA",
      text: "MarkNova's AI agents transformed our customer service. We saw a 300% increase in response efficiency and saved $50K annually. The ROI was incredible!",
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
      text: "The extension development service was exactly what we needed. Competitive pricing and excellent quality - highly recommend!",
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
      text: "MarkNova's team delivered exceptional results across all our digital marketing channels. Great ROI and professional service.",
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
      text: "From concept to execution, MarkNova exceeded our expectations in every way. Fair pricing and incredible value for startups.",
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
      text: "The web development and AI integration was seamless. Great team to work with and competitive rates for European market!",
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
      text: "The browser extension they developed for us works flawlessly. Professional development at competitive pricing.",
      rating: 5,
      service: "Extension Development",
      date: "2023-12-15",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 13,
      name: "Yuki Tanaka",
      company: "Innovation Labs",
      country: "Japan",
      text: "MarkNova's AI solutions helped us automate our customer support completely. The implementation was smooth and cost-effective.",
      rating: 5,
      service: "AI Agents",
      date: "2023-12-12",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 14,
      name: "Sophie Martin",
      company: "Fashion Brand",
      country: "France",
      text: "Their digital marketing campaigns increased our brand visibility significantly. Great results and transparent pricing structure.",
      rating: 5,
      service: "Digital Marketing",
      date: "2023-12-10",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 15,
      name: "James Wilson",
      company: "Consulting Firm",
      country: "New Zealand",
      text: "Professional website development with excellent attention to detail. The pricing was competitive and the quality outstanding.",
      rating: 5,
      service: "Website Development",
      date: "2023-12-08",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 16,
      name: "Anna Kowalski",
      company: "E-commerce Store",
      country: "Poland",
      text: "The Shopify optimization services transformed our online store. Sales increased by 180% and the investment paid off quickly.",
      rating: 5,
      service: "Shopify Management",
      date: "2023-12-05",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 17,
      name: "Hassan Ahmed",
      company: "Tech Startup",
      country: "Pakistan",
      text: "Local expertise with global standards. The AI agents they developed are helping us compete with international companies.",
      rating: 5,
      service: "AI Agents",
      date: "2023-12-03",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 18,
      name: "Elena Popov",
      company: "Digital Marketing",
      country: "Bulgaria",
      text: "Comprehensive digital marketing services that delivered real results. The team understands European markets very well.",
      rating: 5,
      service: "Digital Marketing",
      date: "2023-12-01",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 19,
      name: "Ryan O'Connor",
      company: "SaaS Company",
      country: "Ireland",
      text: "The web application they built for us is fast, secure, and user-friendly. Excellent value for money in the European market.",
      rating: 5,
      service: "Web Development",
      date: "2023-11-28",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 20,
      name: "Mei Lin",
      company: "E-commerce Platform",
      country: "Taiwan",
      text: "Their extension development expertise helped us create a unique shopping experience. Professional service at competitive rates.",
      rating: 5,
      service: "Extension Development",
      date: "2023-11-25",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  // Simulate API call with delay
  const loadReviews = useCallback(async (pageNum: number) => {
    setLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const startIndex = (pageNum - 1) * 5;
    const endIndex = startIndex + 5;
    const newReviews = allReviews.slice(startIndex, endIndex);
    
    if (newReviews.length === 0) {
      setHasMore(false);
    } else {
      setReviews(prev => pageNum === 1 ? newReviews : [...prev, ...newReviews]);
    }
    
    setLoading(false);
  }, []);

  // Initial load
  useEffect(() => {
    loadReviews(1);
  }, [loadReviews]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => {
            const nextPage = prev + 1;
            loadReviews(nextPage);
            return nextPage;
          });
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading, loadReviews]);

  // Auto-scroll functionality
  useEffect(() => {
    if (autoScroll && reviews.length > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        const reviewsContainer = document.getElementById('reviews-container');
        if (reviewsContainer) {
          const scrollHeight = reviewsContainer.scrollHeight;
          const clientHeight = reviewsContainer.clientHeight;
          const currentScroll = reviewsContainer.scrollTop;
          
          if (currentScroll + clientHeight >= scrollHeight - 100) {
            // Reset to top when reaching bottom
            reviewsContainer.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            // Scroll down by one review height
            reviewsContainer.scrollBy({ top: 200, behavior: 'smooth' });
          }
        }
      }, 3000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [autoScroll, reviews.length]);

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Client Reviews</h2>
        <button
          onClick={toggleAutoScroll}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            autoScroll 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {autoScroll ? 'Pause Auto-scroll' : 'Enable Auto-scroll'}
        </button>
      </div>

      <div 
        id="reviews-container"
        className="h-96 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
      >
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
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
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.company}, {review.country}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{review.text}</p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading more reviews...</span>
          </div>
        )}

        {/* Load more trigger */}
        {hasMore && !loading && (
          <div ref={observerRef} className="flex items-center justify-center py-4">
            <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
          </div>
        )}

        {/* End of reviews */}
        {!hasMore && (
          <div className="text-center py-8 text-gray-500">
            <p>You've seen all our amazing reviews!</p>
            <p className="text-sm mt-2">Want to add your own? Contact us today!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteReviews;