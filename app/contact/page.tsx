// ==================== CONTACT PAGE COMPONENT ====================
// File: pages/ContactPage.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Building, Handshake, Heart, Mail, MapPin, Phone } from "lucide-react";

// This page contains contact information, office details, and call-to-action
export default function ContactPage({ changePage }: any) {
  console.log(changePage)
  return (<div>

      <Navbar  />
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our programs or to support our mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-xl border border-orange-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900 mb-2">Office Address</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    D-261 New Colony Para Road<br />
                    Rajajipuram, Lucknow - 226017<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900 mb-2">Email</p>
                  <a href="mailto:rmus2002@rediffmail.com" className="text-orange-600 hover:underline block text-lg font-medium">
                    rmus2002@rediffmail.com
                  </a>
                  <a href="mailto:mus2002lko@gmail.com" className="text-orange-600 hover:underline block text-lg font-medium">
                    mus2002lko@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900 mb-2">Contact Numbers</p>
                  <a href="tel:9005044847" className="text-gray-700 hover:text-orange-600 block text-xl font-semibold">
                    +91 9005044847
                  </a>
                  <a href="tel:9140177461" className="text-gray-700 hover:text-orange-600 block text-xl font-semibold">
                    +91 9140177461
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <p className="font-bold text-xl text-gray-900 mb-2">President</p>
                <p className="text-gray-700 text-2xl font-semibold">S.K. Chaurasiya</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-2">Website</p>
                <a href="http://www.musindia.org.in" target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-xl font-semibold">
                  www.musindia.org.in
                </a>
              </div>
            </div>
          </div>

          {/* Support & Involvement */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Support Our Cause</h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Your support helps us continue our mission of serving humanity across Uttar Pradesh. 
                Every contribution, whether time or resources, makes a tangible difference in the lives of those we serve.
              </p>
              
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <Handshake className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900">Volunteer With Us</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Join our team of dedicated volunteers making a real impact in communities across 20+ districts
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900">Partner Organizations</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Collaborate with us to expand our reach and maximize impact across Uttar Pradesh
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900">Support Our Programs</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Your donations help us provide essential services to elderly, women, and children in need
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-10 shadow-xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Centers</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We welcome visitors to see our work firsthand at our centers and facilities across 
                multiple districts in Uttar Pradesh. Contact us to schedule a visit.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you want to volunteer, partner with us, or learn more about our programs, 
            we're here to help. Reach out today and join us in transforming lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:9005044847"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a 
              href="mailto:mus2002lko@gmail.com"
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
  </div>
  <Footer />
    </div>
  );
}