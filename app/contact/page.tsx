import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Building, Handshake, Heart, Mail, MapPin, Phone, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Header */}
      <header className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-red-100/40 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Get in touch with us to learn more about our programs or to support our mission
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Reach Us Directly</h3>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Office Address</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    D-261 New Colony Para Road<br />
                    Rajajipuram, Lucknow - 226017<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Phone Numbers</p>
                  <a href="tel:9005044847" className="block text-orange-600 hover:text-orange-700 font-semibold transition-colors">+91 9005044847</a>
                  <a href="tel:9140177461" className="block text-orange-600 hover:text-orange-700 font-semibold transition-colors">+91 9140177461</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <a href="mailto:rmus2002@rediffmail.com" className="block text-orange-600 hover:text-orange-700 text-sm transition-colors">rmus2002@rediffmail.com</a>
                  <a href="mailto:mus2002lko@gmail.com" className="block text-orange-600 hover:text-orange-700 text-sm transition-colors">mus2002lko@gmail.com</a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md border border-orange-100">
                <p className="font-bold text-gray-900 mb-0.5 text-sm">President</p>
                <p className="text-gray-700 text-xl font-bold">S.K. Chaurasiya</p>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-5 text-white">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <a href="http://www.musindia.org.in" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                  www.musindia.org.in
                </a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Cause</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Your support helps us continue our mission of serving humanity across Uttar Pradesh.
                Every contribution makes a tangible difference.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Handshake, title: "Volunteer With Us", desc: "Join our team of dedicated volunteers making a real impact in 20+ districts" },
                  { icon: Building, title: "Partner Organizations", desc: "Collaborate with us to expand our reach and maximize impact" },
                  { icon: Heart, title: "Support Our Programs", desc: "Your donations help provide essential services to elderly, women, and children" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow border border-blue-50 flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Centers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We welcome visitors to see our work firsthand at our centers across multiple districts in Uttar Pradesh. Contact us to schedule a visit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you want to volunteer, partner with us, or learn more about our programs,
              we're here to help. Reach out today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9005044847" className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
              <a href="mailto:mus2002lko@gmail.com" className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}