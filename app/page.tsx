// app/page.tsx — Premium redesigned homepage
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CourselSlider } from "@/components/CourselSlider";
import GroupBlurCarousel from "@/components/FramerMotion";
import { pageData, siteMeta } from "./seoData";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  Users,
  Heart,
  BookOpen,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  Shield,
  Building,
  Phone,
  Mail,
  Award,
  Star,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: pageData.home.title,
  description: pageData.home.description,
  keywords: pageData.home.keywords,
  alternates: { canonical: `${siteMeta.siteUrl}/` },
  openGraph: {
    title: pageData.home.title,
    description: pageData.home.description,
    url: `${siteMeta.siteUrl}/`,
    images: [{ url: `${siteMeta.siteUrl}${pageData.home.image}`, width: 1200, height: 630, alt: pageData.home.title }],
    type: "website",
  },
};

export default async function MusindiaWebsite() {
  const imagesDir = path.join(process.cwd(), "public", "image");
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(imagesDir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .map((photo) => "/image/" + photo);
  } catch (e) {
    files = [];
  }

  const stats = [
    { value: "20+", label: "Districts", sub: "Across Uttar Pradesh", color: "from-orange-500 to-red-500" },
    { value: "23", label: "Years", sub: "Of dedicated service", color: "from-blue-500 to-indigo-600" },
    { value: "100+", label: "Programs", sub: "Active welfare initiatives", color: "from-green-500 to-teal-600" },
    { value: "1000+", label: "Lives", sub: "Impacted every year", color: "from-purple-500 to-pink-600" },
  ];

  const services = [
    {
      icon: Users,
      title: "Vriddha Ashram",
      desc: "Compassionate elderly care providing shelter, medical support, and dignified living for senior citizens.",
      color: "from-orange-400 to-red-500",
      href: "/work/old-age-home",
    },
    {
      icon: Heart,
      title: "Women Empowerment",
      desc: "Legal awareness, skill training, and empowerment programs for women's rights and self-development.",
      color: "from-pink-400 to-rose-500",
      href: "/work",
    },
    {
      icon: BookOpen,
      title: "Child Development",
      desc: "Eliminating child labor and providing education, health, and opportunities for children.",
      color: "from-blue-400 to-indigo-600",
      href: "/work",
    },
    {
      icon: Handshake,
      title: "Minority Welfare",
      desc: "Government scheme awareness, education, and community empowerment for minority groups.",
      color: "from-green-400 to-teal-500",
      href: "/work/empowering-minority-community-through-education",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative backdrop-blur-lg overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 bg-orange-200/30 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/40 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative">
          {/* Header Banner */}
          <div className="flex items-center gap-5 p-6 mb-8">
            <img src="/clogo.png" alt="Logo" className="w-36 h-auto flex-shrink-0" />
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-orange-200 to-transparent" />
            <div>
              <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-1">
                <span className="text-green-700">Manav</span>{" "}
                <span className="text-red-600">Utthan Samiti</span>
              </h1>
              <p className="text-red-400 text-sm md:text-base italic font-medium">
                दिलों को जोडने का एक प्रयास!
              </p>
              <p className="text-red-400 text-sm md:text-base italic font-medium">
                मानवता को ऊँचा उठाने का एक विश्वास!!
              </p>
              <div className="mt-2 h-0.5 w-48 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>
          </div>

          {/* Carousels */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-4">
            <CourselSlider files={files} autoplayType="autoplay1" />
          </div>
          <div className="md:hidden">
            <GroupBlurCarousel files={files} groupSize={1} />
          </div>
          <div className="hidden md:block lg:hidden">
            <GroupBlurCarousel files={files} groupSize={2} />
          </div>
          <div className="hidden lg:block">
            <GroupBlurCarousel files={files} groupSize={3} />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl mt-4 mb-6">
            <CourselSlider files={files} autoplayType="autoplay2" />
          </div>

          {/* View Gallery CTA */}
          <div className="flex justify-center mb-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-white border border-orange-200 hover:border-orange-400 text-orange-600 hover:text-orange-700 px-6 py-3 rounded-2xl font-semibold text-sm shadow-sm hover:shadow-md transition-all"
            >
              <ChevronDown className="w-4 h-4" />
              View Full Gallery
            </Link>
          </div>

          {/* Hero Headline */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4" />
              Registered NGO • Serving Since 2002
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Lives,
              <span className="block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Building Communities
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
              A registered nonprofit dedicated to women & child development, elderly care,
              and comprehensive community welfare across{" "}
              <strong className="text-orange-600">20+ districts</strong> of Uttar Pradesh.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-orange-200 transition-all"
              >
                Our Programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-3.5 rounded-2xl font-bold text-sm hover:border-orange-300 hover:text-orange-600 transition-all shadow-sm"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group relative p-7 hover:border-orange-100 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.color}`} />
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-1`}>
                  {s.value}
                </div>
                <div className="font-bold text-gray-800 text-base">{s.label}</div>
                <div className="text-gray-400 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={i}
                  href={s.href}
                  className="group bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col "
                >


                  <div className="p-6 flex flex-col justify-between gap-2 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex justify-between">
                      <div
                        className={`h-10 w-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center relative overflow-hidden justify-self-end`}
                      >
                        <div className="absolute inset-0 bg-black/10" />
                        <Icon className="w-5 h-5 text-white/90 z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex items-center gap-1 text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT STRIP ===================== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Serving Humanity Across Uttar Pradesh
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Manav Utthan Samiti is a nonprofit voluntary organization registered under the
                Societies Registration Act XXI of 1860 on{" "}
                <strong className="text-gray-700">4 September 2002</strong> in Lucknow, Uttar Pradesh.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We focus on women and child development and actively operate welfare activities in over
                20 districts, believing in equality, justice, freedom, and community participation.
              </p>
              <div className="space-y-3">
                {[
                  "Registered under Societies Registration Act XXI of 1860",
                  "Operating across 20+ districts in Uttar Pradesh",
                  "Backed by Ministry of Social Justice & Empowerment",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-orange-200 transition-all"
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Registered", value: "Sept 4, 2002", icon: Building },
                { label: "Districts", value: "20+ Covered", icon: Award },
                { label: "Programs", value: "100+ Active", icon: Heart },
                { label: "Lives", value: "1000+ Yearly", icon: Users },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 text-center"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">{item.value}</div>
                    <div className="text-gray-400 text-xs mt-1">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Handshake className="w-4 h-4" /> Join Our Mission
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/85 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                Whether you want to volunteer, partner with us, or learn more about our programs,
                we're here to help. Reach out today and join us in transforming lives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:9005044847"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
                <a
                  href="mailto:mus2002lko@gmail.com"
                  className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg"
                >
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}