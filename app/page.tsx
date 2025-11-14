import { Menu, X, Phone, Mail, MapPin, Heart, Users, BookOpen, Home, ChevronRight, Award, Target, Eye, Handshake, Building, Shield, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Collage from '@/components/image/Collage';
import Image from 'next/image';

// app/page.tsx
import { pageData, siteMeta } from "./seoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageData.home.title,
  description: pageData.home.description,
  keywords: pageData.home.keywords,
  alternates: {
    canonical: `${siteMeta.siteUrl}/`
  },
  openGraph: {
    title: pageData.home.title,
    description: pageData.home.description,
    url: `${siteMeta.siteUrl}/`,
    images: [
      {
        url: `${siteMeta.siteUrl}${pageData.home.image}`,
        width: 1200,
        height: 630,
        alt: pageData.home.title,
      },
    ],
    type: "website",
  }
};


export default function MusindiaWebsite() {

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main>
        <HomePage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ==================== HOME PAGE COMPONENT ====================
// File: pages/HomePage.jsx
// This is the landing page with hero section, stats, and overview
function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-sm p-4">
            <h1 className="text-4xl text-red-600 sm:text-4xl md:text-6xl font-bold text-gray-900 text-center">
            Manav Utthan Samiti 
            </h1>
            {/* <Image
              src={'/image/gallery3.png'}
              alt={`hero`}
              width={1200}
              height={200}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 33vw"
            /> */}
          </div>
          <div className='mt-12'>
            <Collage images={['/image/gallery0.jpeg', '/image/gallery1.jpeg', '/image/gallery2.jpeg']} layout="masonry" />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Lives,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Building Communities
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              A registered nonprofit voluntary organization dedicated to women and child development,
              elderly care, and comprehensive community welfare across 20+ districts of Uttar Pradesh
            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <Users className="w-24 h-24 text-white z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vriddha Ashram</h3>
                <p className="text-gray-600 leading-relaxed">Compassionate elderly care providing shelter, medical support, and dignified living for senior citizens</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <Heart className="w-24 h-24 text-white z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Women Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">Legal awareness, skill training, and empowerment programs for women's rights and self-development</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <BookOpen className="w-24 h-24 text-white z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Child Development</h3>
                <p className="text-gray-600 leading-relaxed">Eliminating child labor and providing education, health, and development opportunities for children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2">20+</div>
              <div className="text-gray-600 font-semibold text-lg">Districts Covered</div>
              <p className="text-sm text-gray-500 mt-2">Across Uttar Pradesh</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-2">23</div>
              <div className="text-gray-600 font-semibold text-lg">Years of Service</div>
              <p className="text-sm text-gray-500 mt-2">Since 2002</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 mb-2">100+</div>
              <div className="text-gray-600 font-semibold text-lg">Active Programs</div>
              <p className="text-sm text-gray-500 mt-2">Welfare initiatives</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-2">1000+</div>
              <div className="text-gray-600 font-semibold text-lg">Lives Impacted</div>
              <p className="text-sm text-gray-500 mt-2">Every year</p>
            </div>
          </div>

        </div>

      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg">Elderly Care through Vriddha Ashram facilities with comprehensive support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg">Women empowerment, legal rights awareness, and skill development programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg">Child welfare, education, and elimination of child labor</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg">Environmental protection and pollution reduction initiatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Join us in making a tangible difference in communities across Uttar Pradesh. Whether through
                volunteering, partnerships, or support, every contribution helps us serve those in need.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Registered under Societies Registration Act XXI of 1860</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Building className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Operating since 4 September 2002</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

