// ==================== ABOUT PAGE COMPONENT ====================
// File: pages/AboutPage.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Building, ChevronRight, Eye, Target } from "lucide-react";

import { pageData, siteMeta } from "../seoData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageData.about.title,
  description: pageData.about.description,
  keywords: pageData.about.keywords,
  alternates: { canonical: `${siteMeta.siteUrl}/about` },
  openGraph: {
    title: pageData.about.title,
    description: pageData.about.description,
    url: `${siteMeta.siteUrl}/about`,
    images: [{ url: `${siteMeta.siteUrl}${pageData.about.image}`, width: 1200, height: 630, alt: pageData.about.title }],
    type: "article",
  }
};




// This page contains organization history, vision, mission, and objectives
export default function AboutPage({ changePage }: any) {
  return (
    <div>
      <Navbar  />
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Organization Info */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl mb-16 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Building className="w-9 h-9 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Manav Utthan Samiti</h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl">
              <strong className="text-orange-600">Manav Utthan Samiti</strong> is a nonprofit making voluntary organization 
              registered by Registrar, Chits, Funds and Societies, Lucknow, State Uttar Pradesh (India) under 
              <strong> Societies Registration Act XXI of 1860</strong> on <strong className="text-orange-600">4 September 2002</strong>.
            </p>
            
            <p className="text-xl">
              The founders accepted women and child development as the primary duty of the organization, 
              hence naming it Manav Utthan Samiti. Today, we operate as a country-level voluntary organization 
              running various public welfare activities across more than <strong className="text-orange-600">20 districts of Uttar Pradesh</strong>.
            </p>

            <p className="text-xl">
              We work with democratic ideals in practice and recognize <strong>equality, social justice, freedom, 
              continuous development, self-enrichment, and participation</strong> as our core values.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">Registered</div>
              <div className="text-gray-700 font-medium">Sept 4, 2002</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">Coverage</div>
              <div className="text-gray-700 font-medium">20+ Districts</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">Focus</div>
              <div className="text-gray-700 font-medium">Community Welfare</div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To strengthen and develop human resources that act upon true, real, and right direction, 
              ultimately nurturing the bonds of community spirit and social justice, creating peace and harmony, 
              and striving for sustainable human development.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To develop character and skills, health and education of human beings, and to safeguard 
              environmental factors in protection of truth and nature through awareness, training, 
              motivation, research, and action.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl mb-16 border border-gray-100">
          <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">Our Key Objectives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Integrated development of public through effective implementation of state and central government programs
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Eliminate child labor and exploitation while creating environment for child development
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Provide physical, educational, and economic development opportunities for children
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Raise awareness about women's legal rights and eliminate dowry and domestic violence
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Train women in income-generating activities for self-development and empowerment
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Support welfare of labor, poor, and weaker sections of society
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Facilitate group insurance, health insurance, and labor department registration
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Reduce air and water pollution while developing pollution-free environment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-10 text-red-500">
            <div className="text-center bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl mb-4">⚖️</div>
              <h4 className="font-bold text-2xl mb-3">Equality & Justice</h4>
              <p className="text-orange-500 text-lg">Promoting social justice and equality for all members of society</p>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl mb-4">🕊️</div>
              <h4 className="font-bold text-2xl mb-3">Peace & Harmony</h4>
              <p className="text-orange-500 text-lg">Building peaceful and harmonious communities together</p>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl mb-4">🌱</div>
              <h4 className="font-bold text-2xl mb-3">Sustainable Development</h4>
              <p className="text-orange-500 text-lg">Ensuring growth with environmental consciousness and care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
