import React from 'react';
import { Car, Shield, Globe, Users, Leaf, Clock } from 'lucide-react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

// import PropTypes from 'prop-types';

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* <Icon className="w-10 h-10 text-blue-600 mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div
        className="border relative h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white lg:mt-60 lg:ml-30 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Driving the Future of Mobility</h1>
              <p className="text-xl">Sustainable, convenient, and affordable car sharing for everyone. Join us in revolutionizing urban transportation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're committed to transforming urban mobility by providing accessible, sustainable, and efficient car sharing solutions. Our vision is to reduce traffic congestion, lower emissions, and make transportation more affordable for everyone.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="24/7 Availability"
              description="Access cars whenever you need them, day or night, with our convenient booking system."
            />
            <FeatureCard
              icon={Shield}
              title="Safe & Secure"
              description="Fully insured vehicles with regular maintenance and cleaning protocols."
            />
            <FeatureCard
              icon={Leaf}
              title="Eco-Friendly"
              description="Modern, fuel-efficient fleet including hybrid and electric vehicles."
            />
            <FeatureCard
              icon={Globe}
              title="Widespread Coverage"
              description="Convenient pickup locations across the city, always near you."
            />
            <FeatureCard
              icon={Users}
              title="Community Focused"
              description="Join thousands of satisfied members in our growing sharing community."
            />
            <FeatureCard
              icon={Car}
              title="Diverse Fleet"
              description="Choose from a wide range of vehicles to suit your specific needs."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
            <div className="text-gray-600">Vehicles Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
  // FeatureCard.propTypes = {
  //   icon: PropTypes.elementType.isRequired,
  //   title: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  // };
}
// export default AboutPage;
export default AboutPage;
