// pages/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Building, ChevronRight, Eye, Target, BookOpen, HeartHandshake, Users, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { pageData, siteMeta } from "../seoData";
import type { Metadata } from "next";
import {AchievementsSection} from "../../components/Achievements";

export const metadata: Metadata = {
  title: pageData.about.title,
  description: pageData.about.description,
  keywords: pageData.about.keywords,
  alternates: { canonical: `${siteMeta.siteUrl}/about` },
  openGraph: {
    title: pageData.about.title,
    description: pageData.about.description,
    url: `${siteMeta.siteUrl}/about`,
    images: [
      {
        url: `${siteMeta.siteUrl}${pageData.about.image}`,
        width: 1200,
        height: 630,
        alt: pageData.about.title,
      },
    ],
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen" >
      <Navbar />

      {/* ================= HEADER ================= */}
      <header className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Empowering communities through welfare, education, healthcare, and social justice since 2002.
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-10">

        {/* ================= ORGANIZATION HISTORY ================= */}
        <section className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Building className="w-9 h-9 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Manav Utthan Samiti</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong className="text-orange-600">Manav Utthan Samiti</strong> is a nonprofit voluntary organization registered under
            <strong> Societies Registration Act XXI of 1860</strong> on
            <strong className="text-orange-600"> 4 September 2002</strong> in Lucknow, Uttar Pradesh.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The organization focuses on women and child development and now actively operates welfare activities in over
            <strong className="text-orange-600"> 20 districts of Uttar Pradesh</strong>.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            We believe in equality, justice, freedom, continuous development, and community participation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Registered", value: "Sept 4, 2002" },
              { label: "Coverage", value: "20+ Districts" },
              { label: "Focus", value: "Community Welfare" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">{item.label}</div>
                <div className="text-gray-700 font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To strengthen human resources, promote social justice, build harmony, and strive for sustainable human development.
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
              To enhance character, skills, health, education, environmental awareness, and community responsibility.
            </p>
          </div>
        </section>

        {/* ================= OBJECTIVES ================= */}
        <section className="bg-white rounded-3xl p-10 shadow-2xl mb-16 border border-gray-100">
          <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">Our Key Objectives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Effective implementation of government programs for public development",
              "Eliminating child labor and promoting child rights",
              "Providing education, physical, and economic development opportunities",
              "Empowering women and eliminating dowry & domestic violence",
              "Training women for income‑generating activities",
              "Supporting laborers, poor, and weaker sections",
              "Facilitating health & group insurance programs",
              "Reducing pollution and promoting environment‑friendly practices",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start">
                <ChevronRight className="w-7 h-7 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OLD AGE HOME ACTIVITIES ================= */}
        <section className="bg-white rounded-3xl p-10 shadow-xl mb-16 border border-gray-100">
          <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">Old Age Home Activities</h3>

          <div className="space-y-10 text-gray-700 text-lg leading-relaxed">

            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <h4 className="font-bold text-2xl text-orange-600 mb-3">Distribution Program (7 Nov 2025)</h4>
              <p>
                Tricycles, wheelchairs, silicon pillows, belts, hearing aids, walking sticks and more were distributed to 118 senior citizens.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-2xl text-blue-600 mb-3">Government Inspection (29 Oct 2025)</h4>
              <p>
                District Social Welfare Officer inspected the Radha Krishna Old Age Home. 45 residents were present and functioning was appreciated.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <h4 className="font-bold text-2xl text-green-700 mb-3">Eye Checkup Camp</h4>
              <p>
                Eye specialist examined residents; spectacles were distributed. Several officials and volunteers remained present.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <h4 className="font-bold text-2xl text-purple-700 mb-3">Distribution of Leather Bags</h4>
              <p>
                Leather bags and essentials were distributed by BDC Pradhan Shri Nempal Yadav. Residents were treated respectfully as family.
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
              <h4 className="font-bold text-2xl text-yellow-700 mb-3">International Yoga Day (21 June 2025)</h4>
              <p>
                Trainers conducted yoga sessions for elderly and public. Benefits of yoga for pain relief were explained.
              </p>
            </div>

            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
              <h4 className="font-bold text-2xl text-red-700 mb-3">Awareness Campaign (24 April 2025)</h4>
              <p>
                Social awareness campaign conducted via public vehicle in nearby villages, schools, railway stations, etc.
              </p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-2xl text-indigo-700 mb-3">Sunderkand & Ramcharitmanas (20–21 Feb 2025)</h4>
              <p>
                24‑hour recitation followed by prasad & community feast. District officials and many citizens participated.
              </p>
            </div>

          </div>
        </section>

        {/* ================= SOCIAL AUDIT REPORT ================= */}
        <section className="bg-white rounded-3xl p-10 shadow-xl mb-16 border border-gray-100">
          <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">Social Audit Report (23–26 Sept 2023)</h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Social Audit Team interacted with all elderly residents, reviewed records, and organized a workshop on elderly rights.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            It was observed that residents live like a family, regularly participating in bhajan‑kirtan, yoga, and recreational activities.
          </p>

          <div className="bg-gray-50 p-6 rounded-2">

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start"><ShieldCheck className="w-6 h-6 text-green-600 mt-1 mr-3" /> Proper care, nutrition, and medical support were verified.</li>
                <li className="flex items-start"><ShieldCheck className="w-6 h-6 text-green-600 mt-1 mr-3" /> Records were maintained transparently and updated regularly.</li>
                <li className="flex items-start"><ShieldCheck className="w-6 h-6 text-green-600 mt-1 mr-3" /> No instances of negligence or mistreatment were found.</li>
                <li className="flex items-start"><ShieldCheck className="w-6 h-6 text-green-600 mt-1 mr-3" /> Elderly residents expressed satisfaction with facilities and staff.</li>
              </ul>
            </div>
          </div>
        </section>
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
}
