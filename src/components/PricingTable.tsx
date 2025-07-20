import React, { useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, DollarSign, Star, Info } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  marketPosition: 'budget' | 'competitive' | 'premium';
  savings?: string;
}

interface PricingTableProps {
  service: 'ai-agents' | 'web-development' | 'digital-marketing' | 'shopify' | 'extension' | 'website';
}

const PricingTable: React.FC<PricingTableProps> = ({ service }) => {
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [showMarketComparison, setShowMarketComparison] = useState(false);

  // Market-researched competitive pricing
  const pricingData = {
    'ai-agents': [
      {
        id: 'starter',
        name: 'AI Starter',
        price: 299,
        originalPrice: 399,
        period: '/month',
        description: 'Perfect for small businesses starting with AI automation',
        features: [
          '1 AI Agent (Customer Service)',
          'Up to 1,000 interactions/month',
          'Basic customization',
          'Email support',
          '24/7 AI availability',
          'Basic analytics dashboard'
        ],
        marketPosition: 'competitive' as const,
        savings: '25% below market average'
      },
      {
        id: 'business',
        name: 'AI Business',
        price: 699,
        originalPrice: 899,
        period: '/month',
        description: 'Comprehensive AI solution for growing businesses',
        features: [
          '3 AI Agents (Customer Service, Sales, Support)',
          'Up to 10,000 interactions/month',
          'Full customization',
          'Priority support',
          'Advanced analytics',
          'CRM integration',
          'Multi-language support',
          'Custom training data'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '22% below market average'
      },
      {
        id: 'enterprise',
        name: 'AI Enterprise',
        price: 1499,
        originalPrice: 1999,
        period: '/month',
        description: 'Enterprise-grade AI automation for large organizations',
        features: [
          'Unlimited AI Agents',
          'Unlimited interactions',
          'Complete customization',
          'Dedicated support manager',
          'Custom integrations',
          'Advanced security',
          'White-label options',
          'API access',
          'Custom reporting'
        ],
        marketPosition: 'premium' as const,
        savings: '25% below enterprise competitors'
      }
    ],
    'web-development': [
      {
        id: 'basic',
        name: 'Basic Website',
        price: 1999,
        originalPrice: 2499,
        period: 'one-time',
        description: 'Professional website for small businesses',
        features: [
          '5-7 Pages',
          'Responsive Design',
          'Basic SEO',
          'Contact Forms',
          '2 Weeks Delivery',
          '3 Months Support'
        ],
        marketPosition: 'competitive' as const,
        savings: '20% below market rate'
      },
      {
        id: 'business',
        name: 'Business Application',
        price: 4999,
        originalPrice: 6499,
        period: 'one-time',
        description: 'Custom web application with advanced features',
        features: [
          'Custom Features',
          'Database Integration',
          'User Authentication',
          'Advanced SEO',
          '4-6 Weeks Delivery',
          '6 Months Support',
          'Admin Dashboard',
          'API Integration'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '23% below market rate'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Solution',
        price: 9999,
        originalPrice: 12999,
        period: 'one-time',
        description: 'Large-scale web application with enterprise features',
        features: [
          'Unlimited Features',
          'Multiple Integrations',
          'Scalable Architecture',
          'Dedicated Support',
          'Custom Timeline',
          '1 Year Support',
          'Performance Optimization',
          'Security Audit'
        ],
        marketPosition: 'premium' as const,
        savings: '23% below enterprise rates'
      }
    ],
    'digital-marketing': [
      {
        id: 'starter',
        name: 'Marketing Starter',
        price: 999,
        originalPrice: 1299,
        period: '/month',
        description: 'Essential digital marketing for small businesses',
        features: [
          'SEO Optimization',
          'Social Media Management (2 platforms)',
          'Basic PPC Campaign',
          'Monthly Reports',
          'Email Support'
        ],
        marketPosition: 'competitive' as const,
        savings: '23% below market average'
      },
      {
        id: 'growth',
        name: 'Growth Marketing',
        price: 2499,
        originalPrice: 3199,
        period: '/month',
        description: 'Comprehensive marketing for growing businesses',
        features: [
          'Everything in Starter',
          'Advanced PPC Campaigns',
          'Content Marketing',
          'Conversion Optimization',
          'Social Media (5 platforms)',
          'Priority Support',
          'Bi-weekly Strategy Calls'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '22% below market average'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Marketing',
        price: 4999,
        originalPrice: 6499,
        period: '/month',
        description: 'Full-service marketing for large organizations',
        features: [
          'Full-Service Marketing',
          'Multi-Channel Campaigns',
          'Advanced Analytics',
          'Dedicated Team',
          '24/7 Support',
          'Custom Strategy',
          'Weekly Reporting'
        ],
        marketPosition: 'premium' as const,
        savings: '23% below enterprise rates'
      }
    ],
    'shopify': [
      {
        id: 'setup',
        name: 'Store Setup',
        price: 1499,
        originalPrice: 1899,
        period: 'one-time',
        description: 'Complete Shopify store setup and launch',
        features: [
          'Complete Store Setup',
          'Theme Customization',
          'Product Upload (50 items)',
          'Payment Gateway Setup',
          'Basic SEO',
          '2 Weeks Delivery'
        ],
        marketPosition: 'competitive' as const,
        savings: '21% below market rate'
      },
      {
        id: 'management',
        name: 'Monthly Management',
        price: 899,
        originalPrice: 1199,
        period: '/month',
        description: 'Ongoing Shopify store management and optimization',
        features: [
          'Everything in Setup',
          'Ongoing Management',
          'Performance Optimization',
          'Monthly Reports',
          'Priority Support',
          'Inventory Management'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '25% below market average'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Management',
        price: 1999,
        originalPrice: 2599,
        period: '/month',
        description: 'Enterprise Shopify management with advanced features',
        features: [
          'Complete Store Management',
          'Advanced Analytics',
          'Custom Integrations',
          'Dedicated Manager',
          '24/7 Support',
          'Multi-store Management'
        ],
        marketPosition: 'premium' as const,
        savings: '23% below enterprise rates'
      }
    ],
    'extension': [
      {
        id: 'simple',
        name: 'Simple Extension',
        price: 899,
        originalPrice: 1199,
        period: 'one-time',
        description: 'Basic browser extension with core functionality',
        features: [
          'Basic Functionality',
          'Single Platform',
          'Basic UI',
          '1-2 Weeks Delivery',
          '3 Months Support'
        ],
        marketPosition: 'competitive' as const,
        savings: '25% below market rate'
      },
      {
        id: 'advanced',
        name: 'Advanced Extension',
        price: 2499,
        originalPrice: 3199,
        period: 'one-time',
        description: 'Feature-rich extension with custom functionality',
        features: [
          'Advanced Features',
          'Multi-Platform',
          'Custom UI/UX',
          'API Integration',
          '3-4 Weeks Delivery',
          '6 Months Support'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '22% below market rate'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Extension',
        price: 4999,
        originalPrice: 6499,
        period: 'one-time',
        description: 'Enterprise-grade extension with full customization',
        features: [
          'Complex Features',
          'All Platforms',
          'Premium Design',
          'Full Integration',
          'Custom Timeline',
          '1 Year Support'
        ],
        marketPosition: 'premium' as const,
        savings: '23% below enterprise rates'
      }
    ],
    'website': [
      {
        id: 'starter',
        name: 'Starter Website',
        price: 799,
        originalPrice: 999,
        period: 'one-time',
        description: 'Simple website for small businesses',
        features: [
          'Up to 5 Pages',
          'Mobile Responsive',
          'Contact Form',
          'Basic SEO',
          '1 Week Delivery'
        ],
        marketPosition: 'budget' as const,
        savings: '20% below market rate'
      },
      {
        id: 'business',
        name: 'Business Website',
        price: 1899,
        originalPrice: 2399,
        period: 'one-time',
        description: 'Professional website with advanced features',
        features: [
          'Up to 10 Pages',
          'Custom Design',
          'CMS Integration',
          'Advanced SEO',
          '2-3 Weeks Delivery',
          'Analytics Setup'
        ],
        popular: true,
        marketPosition: 'competitive' as const,
        savings: '21% below market rate'
      },
      {
        id: 'premium',
        name: 'Premium Website',
        price: 3999,
        originalPrice: 4999,
        period: 'one-time',
        description: 'High-end website with premium features',
        features: [
          'Unlimited Pages',
          'E-commerce Ready',
          'Custom Features',
          'Premium Support',
          '4-6 Weeks Delivery',
          'Performance Optimization'
        ],
        marketPosition: 'premium' as const,
        savings: '20% below premium rates'
      }
    ]
  };

  const tiers = pricingData[service] || [];

  useEffect(() => {
    // Set the popular tier as default selected
    const popularTier = tiers.find(tier => tier.popular);
    if (popularTier) {
      setSelectedTier(popularTier.id);
    } else if (tiers.length > 0) {
      setSelectedTier(tiers[0].id);
    }
  }, [service, tiers]);

  const getMarketPositionColor = (position: string) => {
    switch (position) {
      case 'budget': return 'text-green-600 bg-green-100';
      case 'competitive': return 'text-blue-600 bg-blue-100';
      case 'premium': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMarketPositionLabel = (position: string) => {
    switch (position) {
      case 'budget': return 'Budget Friendly';
      case 'competitive': return 'Best Value';
      case 'premium': return 'Premium Quality';
      default: return 'Standard';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Market-Competitive Pricing
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Our prices are researched and positioned competitively in the global market
        </p>
        <button
          onClick={() => setShowMarketComparison(!showMarketComparison)}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <Info className="h-4 w-4 mr-1" />
          {showMarketComparison ? 'Hide' : 'Show'} Market Comparison
        </button>
      </div>

      {showMarketComparison && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Market Research Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                <span className="font-medium">Cost Savings</span>
              </div>
              <p className="text-gray-600">Our prices are 20-25% below market average while maintaining premium quality.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <DollarSign className="h-4 w-4 text-blue-600 mr-2" />
                <span className="font-medium">Transparent Pricing</span>
              </div>
              <p className="text-gray-600">No hidden fees or surprise costs. What you see is what you pay.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-600 mr-2" />
                <span className="font-medium">Value Guarantee</span>
              </div>
              <p className="text-gray-600">Premium quality services at competitive rates with satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              tier.popular 
                ? 'border-blue-500 transform scale-105' 
                : selectedTier === tier.id
                ? 'border-blue-300'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedTier(tier.id)}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  {tier.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      ${tier.originalPrice.toLocaleString()}{tier.period}
                    </div>
                  )}
                  <div className="text-3xl font-bold text-gray-900">
                    ${tier.price.toLocaleString()}
                    <span className="text-lg text-gray-600 font-normal">{tier.period}</span>
                  </div>
                  {tier.savings && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      {tier.savings}
                    </div>
                  )}
                </div>

                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getMarketPositionColor(tier.marketPosition)}`}>
                  {getMarketPositionLabel(tier.marketPosition)}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  const message = encodeURIComponent(`Hi, I'm interested in the ${tier.name} package for ${service}. Could you please provide more information?`);
                  window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Need a custom solution? We offer flexible pricing for unique requirements.
        </p>
        <button
          onClick={() => {
            const message = encodeURIComponent(`Hi, I need a custom solution for ${service}. Could you please provide a personalized quote?`);
            window.open(`https://wa.me/923359112095?text=${message}`, '_blank');
          }}
          className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Request Custom Quote
        </button>
      </div>
    </div>
  );
};

export default PricingTable;