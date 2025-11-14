// ==================== FOOTER COMPONENT ====================
// File: components/Footer.jsx

import { Heart } from "lucide-react";
import Link from "next/link";

// Reusable footer with organization info and navigation
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Manav Utthan Samiti</h3>
                <p className="text-orange-400 text-sm font-medium">Est. 2002</p>
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              A registered nonprofit voluntary organization serving humanity through dedicated welfare 
              activities across 20+ districts of Uttar Pradesh since 2002.
            </p>
            <p className="text-gray-500 text-sm">
              Registered under Societies Registration Act XXI of 1860
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-orange-400 transition-colors text-base">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-base">
              <p className="leading-relaxed">D-261 New Colony Para Road<br />Rajajipuram, Lucknow - 226017<br />Uttar Pradesh, India</p>
              <p className="pt-2">
                <a href="tel:9005044847" className="hover:text-orange-400 transition-colors">+91 9005044847</a><br />
                <a href="tel:9140177461" className="hover:text-orange-400 transition-colors">+91 9140177461</a>
              </p>
              <p>
                <a href="mailto:mus2002lko@gmail.com" className="hover:text-orange-400 transition-colors">mus2002lko@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="text-base">&copy; 2025 Manav Utthan Samiti. All rights reserved.</p>
          <p className="mt-3 text-base">
            <a href="http://www.musindia.org.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-medium">
              www.musindia.org.in
            </a>
          </p>
          <p className="mt-4 text-sm text-gray-500">President: S.K. Chaurasiya</p>
        </div>
      </div>
    </footer>
  );
}