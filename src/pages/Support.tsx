import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Headphones, MessageCircle, FileText, Download, ExternalLink } from 'lucide-react';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Orders & Shipping',
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free shipping is available on orders over $99.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.'
        },
        {
          question: 'What if my package is damaged?',
          answer: 'If your package arrives damaged, please contact us within 48 hours with photos. We\'ll arrange a replacement or refund immediately.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be in original condition with all accessories and packaging.'
        },
        {
          question: 'How do I start a return?',
          answer: 'Log into your account and go to Order History. Select the item you want to return and follow the instructions to print a return label.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days after we receive your return. The refund will appear on your original payment method.'
        }
      ]
    },
    {
      title: 'Product Support',
      faqs: [
        {
          question: 'How do I check if a product is compatible?',
          answer: 'Each product page includes detailed compatibility information. You can also use our compatibility checker tool or contact our support team.'
        },
        {
          question: 'Where can I find product manuals?',
          answer: 'Product manuals are available on each product page under the "Downloads" section. You can also find them in our support center.'
        },
        {
          question: 'What if my product stops working?',
          answer: 'First, check our troubleshooting guides. If the issue persists, contact our technical support team for warranty service or repair options.'
        }
      ]
    },
    {
      title: 'Account & Payment',
      faqs: [
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page and enter your email. You\'ll receive a password reset link within a few minutes.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption and are PCI DSS compliant. Your payment information is never stored on our servers.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      icon: Headphones,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM PST',
      action: 'Call Now',
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Submit Ticket',
      description: 'Send us a detailed support request',
      availability: 'Response within 24 hours',
      action: 'Create Ticket',
      color: 'purple'
    }
  ];

  const resources = [
    {
      title: 'User Manuals',
      description: 'Download product manuals and guides',
      icon: Download,
      link: '#'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: ExternalLink,
      link: '#'
    },
    {
      title: 'Warranty Information',
      description: 'Learn about our warranty coverage',
      icon: FileText,
      link: '#'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: Search,
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Support <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get the help you need with our comprehensive support resources and expert assistance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support option that works best for you. Our team is here to help!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${option.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className={`w-8 h-8 text-${option.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
                <button className={`w-full bg-${option.color}-600 text-white py-3 px-6 rounded-lg hover:bg-${option.color}-700 transition-colors font-medium`}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  return (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {expandedFaq === globalIndex ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFaq === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access manuals, tutorials, and other helpful resources to get the most out of your products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is standing by to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Support
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;