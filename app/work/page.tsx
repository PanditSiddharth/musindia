// ==================== WORK PAGE COMPONENT ====================
// File: pages/WorkPage.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BookOpen, ChevronRight, Handshake, Heart, Leaf, Target, Users } from "lucide-react";
import Link from "next/link";
import { programs } from "./programs";

// This page displays all programs, initiatives, and detailed work areas

export default function WorkPage() {

  return (
    <div>
      <Navbar  />
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Work</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive welfare programs serving communities across 20+ districts of Uttar Pradesh
          </p>
        </div>

        {/* Main Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Link key={index} href={"/work/" + program?.slug} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className={`h-32 bg-gradient-to-br ${program.gradient} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                </div>
                <div className="mt-auto h-8 border border-gray-400 w-28 rounded-2xl text-black flex items-center justify-center m-3 justify-self-center">More Details</div>
              </Link>
            );
          })}
        </div>

        {/* Detailed Program Sections */}
        <div className="space-y-12">
          {/* Women Welfare */}
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-10 shadow-xl border border-pink-100">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Women Welfare Programs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Legal rights awareness campaigns and workshops</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Anti-dowry movement and prevention programs</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Domestic violence prevention and support</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Female feticide awareness initiatives</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Vocational skill training programs</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-pink-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Self-help group formation and support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Child Development */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-blue-100">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Child Development Initiatives</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Child labor elimination programs</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Educational support and scholarships</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Health and nutrition programs</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Child exploitation prevention</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Skill development workshops</span>
                </li>
                <li className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <ChevronRight className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Recreation and sports facilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Elderly Care */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 shadow-xl border border-orange-100">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Vriddha Ashram Services</h3>
            </div>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our Vriddha Ashram (old age home) provides comprehensive care for senior citizens, ensuring 
              dignity, comfort, and quality of life through dedicated services:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">Shelter & Care</h4>
                <p className="text-gray-600">Safe, comfortable living facilities with 24/7 support and supervision</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <div className="text-4xl mb-4">⚕️</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">Medical Support</h4>
                <p className="text-gray-600">Regular health checkups, medical assistance, and emergency care</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">Social Activities</h4>
                <p className="text-gray-600">Recreational programs, cultural events, and companionship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">Making Real Impact</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Through our dedicated programs across 20+ districts in Uttar Pradesh, we continue to transform 
            lives and build stronger, more equitable communities. Every initiative is driven by our unwavering 
            commitment to social justice, equality, and sustainable development for all.
          </p>
          <button 
            className="mt-8 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}