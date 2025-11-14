"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Heart,
  Users,
  Home,
} from "lucide-react";

const navigation = [
  { name: "Home", id: "home", href: "/", icon: Home },
  { name: "About Us", id: "about", href: "/about", icon: Users },
  { name: "Our Work", id: "work", href: "/work", icon: Heart },
  { name: "Contact", id: "contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top on navigation (client-only)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  const isActive = (href: string) => {
    // treat root specially
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo / Brand */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => (window.location.href = "/")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") window.location.href = "/";
            }}
            className="flex items-center gap-3 cursor-pointer select-none"
            aria-label="Manav Utthan Samiti - go to home"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shrink-0">
              <Heart className="w-7 h-7 text-white" aria-hidden />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                Manav Utthan Samiti
              </h1>
              <p className="text-xs text-orange-600 font-medium">
                Serving Humanity Since 2002
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-2" aria-label="Primary">
            <ul className="flex items-center gap-2">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                        active
                          ? "bg-orange-500 text-white shadow"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                      aria-current={active ? "page" : undefined}
                    >
                      <item.icon className="w-4 h-4" aria-hidden />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        {/* mobile nav */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            isMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col gap-2 mt-2">
            {navigation.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left font-medium transition ${
                      active ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
                    } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="w-5 h-5" aria-hidden />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
