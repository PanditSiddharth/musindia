"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Heart } from "lucide-react";
import { programs } from "@/app/work/programs";
import Image from "next/image";

const getWorks = () =>
  programs.map((p) => ({ name: p.title, href: `/work/${p.slug}` }));

const navigation = [
  { name: "Home", href: "/", children: [] },
  {
    name: "Programs",
    href: "#",
    children: [
      { name: "Atal Vayo Abhyuday Yojna", href: "/about#1" },
      { name: "Nai Roshani", href: "/about#2" },
      { name: "Kisan Gosthi Program", href: "/about#3" },
      { name: "International Yoga Day", href: "/about#4" },
      { name: "Tobacco Control Program", href: "/about#5" },
      { name: "Financial Literacy", href: "/about#8" },
    ],
  },
  {
    name: "Old Age Home",
    href: "#",
    children: [
      { name: "Old Age Home", href: "/work/old-age-home" },
      {
        name: "Old Age Home Software",
        href: "https://dahua-smartpss.en.softonic.com/download",
      },
    ],
  },
  { name: "Gallery", href: "/gallery", children: [] },
  {
    name: "About Us",
    href: "#",
    children: [
      { name: "About Us", href: "/about" },
      { name: "Our Vision", href: "/about#vision-top" },
      { name: "Achievements", href: "/about/achievements" },
    ],
  },
  {
    name: "Our Work",
    href: "#",
    children: [{ name: "All Work", href: "/work" }, ...getWorks()],
  },
  { name: "Contact", href: "/contact", children: [] },
];

function DropdownMenu({ items }: { items: { name: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-64">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-orange-50"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
    <div
            // role="button"
            tabIndex={0}
            // onClick={() => (window.location.href = "/")}
            onKeyDown={(e) => {
              // if (e.key === "Enter" || e.key === " ") window.location.href = "/";
            }}
            className="flex items-center gap-3 cursor-pointer select-none"
            aria-label="Manav Utthan Samiti - go to home"
          >
            <Image src="/logo.png" alt="Manav Utthan Samiti Logo" height={30} width={120} />


          </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children.length > 0 && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href !== "#" && item.children.length === 0 ? (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        pathname === item.href || pathname?.startsWith(item.href + "/")
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        activeDropdown === item.name
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                  {item.children.length > 0 &&
                    activeDropdown === item.name && (
                      <DropdownMenu items={item.children} />
                    )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:9005044847"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-orange-200 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children.length === 0 ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.name && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            target={
                              child.href.startsWith("http") ? "_blank" : "_self"
                            }
                            className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <a
              href="tel:9005044847"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold mt-3"
            >
              <Phone className="w-4 h-4" />
              +91 9005044847
            </a>
          </div>
        </div>
      </header>
    </>
  );
}