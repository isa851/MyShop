import React from "react";
import { Users, Award, Globe, Heart, Zap, Shield } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TechStore Islam
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the latest technology
            innovations from the world's leading brands. Since 2015, we've been
            your trusted partner in the digital revolution.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At TechStore Islam, we believe technology should enhance and
                simplify your life. Our mission is to democratize access to
                cutting-edge technology by offering premium products at
                competitive prices, backed by exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We carefully curate our product selection to ensure every item
                meets our high standards for quality, innovation, and value.
                From the latest smartphones to professional-grade laptops, we're
                here to help you find the perfect tech solution.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment
              to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, bringing you the latest
                innovations and breakthrough products.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust
              </h3>
              <p className="text-gray-600">
                We build lasting relationships through transparency,
                reliability, and exceptional customer service.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Passion
              </h3>
              <p className="text-gray-600">
                Our team is passionate about technology and dedicated to helping
                you find the perfect solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-gray-300">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                99.5%
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Brand Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind TechStore Pro, dedicated to
              bringing you the best technology experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Abdikalilov Islam
              </h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Tech entrepreneur with 15+ years of experience in the
                electronics industry.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Abdikalilov Islam
              </h3>
              <p className="text-blue-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former Apple engineer passionate about bringing cutting-edge
                technology to everyone.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Head of Customer Success"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Abdikalilov Islam
              </h3>
              <p className="text-blue-600 mb-2">Head of Customer Success</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer has an exceptional
                experience with our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're honored to be recognized by industry leaders and customers
              alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Best E-commerce 2023
              </h3>
              <p className="text-sm text-gray-600">Tech Retail Awards</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Customer Choice 2023
              </h3>
              <p className="text-sm text-gray-600">
                Consumer Electronics Association
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Sustainable Business
              </h3>
              <p className="text-sm text-gray-600">Green Tech Initiative</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Security Excellence
              </h3>
              <p className="text-sm text-gray-600">Cybersecurity Council</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
