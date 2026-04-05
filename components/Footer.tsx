import { Heart, MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  Manav Utthan Samiti
                </h3>
                <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
                  Est. 2002
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-sm">
              A registered nonprofit voluntary organization serving humanity through welfare activities
              across <span className="text-orange-400 font-semibold">20+ districts</span> of Uttar Pradesh since 2002.
            </p>
            <p className="text-gray-500 text-xs mb-6">
              Registered under Societies Registration Act XXI of 1860
            </p>
            {/* Social / CTA */}
            <a
              href="tel:9005044847"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-orange-500/30"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/work" },
                { name: "Gallery", href: "/gallery" },
                { name: "Achievements", href: "/about/achievements" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-0.5 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-widest uppercase">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  D-261 New Colony Para Road,<br />
                  Rajajipuram, Lucknow - 226017<br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:9005044847" className="block text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    +91 9005044847
                  </a>
                  <a href="tel:9140177461" className="block text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    +91 9140177461
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:mus2002lko@gmail.com" className="block text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    mus2002lko@gmail.com
                  </a>
                  <a href="mailto:rmus2002@rediffmail.com" className="block text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    rmus2002@rediffmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a
                  href="http://www.musindia.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-sm transition-colors"
                >
                  www.musindia.org.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Manav Utthan Samiti. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            President:{" "}
            <span className="text-gray-400 font-semibold">S.K. Chaurasiya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}