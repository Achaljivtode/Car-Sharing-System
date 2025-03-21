import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Car Sharing System</h2>
          <p className="text-sm mt-2">
            Your trusted ride-sharing platform. Safe, reliable, and affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/book" className="hover:underline">Book a Ride</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Support & Social Links */}
        <div>
          <h2 className="text-lg font-semibold">Support</h2>
          <ul className="mt-2 space-y-1">
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>

          {/* Social Media */}
        </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex flex-col justify-center gap-4 mt-2">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-red-500">YouTube</a>
            </div>
          </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Car Sharing System. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer