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
  Images,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { programs } from "@/app/work/programs";
import Image from "next/image";

const getWorks = () => {
  const pro = [] as any[];
  for (const program of programs) {
    pro.push({ name: program.title, href: `/work/${program.slug}`, submenu: [] });
  }
  return pro;
}

const navigation = [
  { name: "Home", id: "home", href: "/", icon: Home, submenu: [] },
  // {
  //   name: "Program", id: "program", icon: Heart, submenu: [
  //     { name: "Atal Vayo Abhyuday Yojna", href: "/atal-vayo-abhyuday-yojna", submenu: [] },
  //     { name: "Nai Roshani", href: "/nai-roshani", submenu: [] },
  //     { name: "Kisan Gosthi Program", href: "/kisan-gosthi-program", submenu: [] },
  //     { name: "International Yoga Day", href: "/international-yoga-day", submenu: [] },
  //     { name: "Tobacco Control Program", href: "/tobacco-control-program", submenu: [] },
  //     { name: "Inter National Day", href: "/inter-national-day", submenu: [] },
  //     { name: "Culture Program", href: "/culture-program", submenu: [] },
  //     { name: "Financial Literacy", href: "/financial-literacy", submenu: [] },
  //   ]
  // },
    {
    name: "Program", id: "program", icon: Heart, submenu: [
      { name: "Atal Vayo Abhyuday Yojna", href: "/about#1", submenu: [] },
      { name: "Nai Roshani", href: "/about#2", submenu: [] },
      { name: "Kisan Gosthi Program", href: "/about#3", submenu: [] },
      { name: "International Yoga Day", href: "/about#4", submenu: [] },
      { name: "Tobacco Control Program", href: "/about#5", submenu: [] },
      { name: "Inter National Day", href: "/about#6", submenu: [] },
      { name: "Culture Program", href: "/about#7", submenu: [] },
      { name: "Financial Literacy", href: "/about#8", submenu: [] },
    ]
  },

  {
    name: "Old Age Home", id: "old-age-home", icon: Heart, submenu: [
      {
        name: "Old Age Home Software", href: "https://dahua-smartpss.en.softonic.com/download", submenu: []
      },
      {
        name: "Old Age Home", href: "/work/old-age-home", submenu: []
      },

    ]
  },
  {
    name: "Gallery", id: "gallery", href: "/gallery", icon: Images, submenu: []
  },
  {
    name: "About Us", id: "about", icon: Users, submenu: [
      { name: "About Us", href: "/about", submenu: [] },
      { name: "Our Vision", href: "/about#vision-top", submenu: [] },
      { name: "Our Mission", href: "/about#vision-top", submenu: [] },
      { name: "Achievements", href: "/about/achievements", submenu: [] },
    ]
  },
  {
    name: "Our Work", id: "work", icon: Heart, submenu: [
      { name: "Work", href: "/work", submenu: [] },

      ...getWorks()
    ]
  },
  { name: "Contact", id: "contact", href: "/contact", icon: Phone, submenu: [] },
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

  const isActive = (href?: string) => {
    if (!href) return false;
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
            <Image src="/logo.png" alt="Manav Utthan Samiti Logo" height={60} width={180} />


          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2" aria-label="Primary">
            <Menubar className="flex items-center gap-2">
              {navigation.map((item) => {
                const active = isActive(item?.href);
                return (
                  <MenubarMenu key={item.id}>
                    {item.href && (
                      <Link href={item.href}
                        className={`inline-flex items-center gap-2 px-2 py-1 rounded-lg font-medium transition focus:outline-none text-gray-700 hover:bg-orange-50 hover:text-orange-600 focus:ring-2 focus:ring-orange-400`}
                        aria-current={active ? "page" : undefined}
                      >
                        <item.icon className="w-4 h-4" aria-hidden />
                        <span>{item.name}</span>
                      </Link>
                    )}
                    {!item.href && (
                      <div>
                        <MenubarTrigger
                          className={`inline-flex items-center gap-2 px-4 rounded-lg font-medium transition ${active
                            ? "text-white shadow"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                          aria-current={active ? "page" : undefined}
                        >
                          <item.icon className="w-4 h-4" aria-hidden />
                          <span>{item.name}</span>
                        </MenubarTrigger>
                        <MenubarContent>
                          {
                            item.submenu.map((subitem) => (
                              (subitem || [] as any[])?.submenu.length > 0 ? (
                                <MenubarSub key={subitem.name}>
                                  <MenubarSubTrigger>{subitem.name}</MenubarSubTrigger>
                                  <MenubarSubContent>
                                    {subitem.submenu.map((itm: any) => <Link key={itm.href} href={itm.href}>
                                      <MenubarItem key={itm.name} >{itm.name}</MenubarItem>
                                    </Link>)}
                                  </MenubarSubContent>
                                </MenubarSub>
                              ) : (
                                <Link key={subitem.name} href={subitem.href} target={subitem.href?.startsWith("http") ? "_blank" : "_self"} rel={subitem.href?.startsWith("http") ? "noopener noreferrer" : undefined}>
                                  <MenubarItem >
                                    {subitem.name}
                                  </MenubarItem>
                                </Link>
                              )))
                          }

                          {/* <MenubarSeparator /> */}
                        </MenubarContent>
                      </div>
                    )}
                  </MenubarMenu>
                );
              })}
            </Menubar>
          </nav>

          {/* mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        {/* mobile nav */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-200 ${isMenuOpen ? "max-h-auto pb-4" : "max-h-0"
            }`}
          aria-hidden={!isMenuOpen}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="flex flex-col">
            {navigation.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger
                    // href={item?.href + ""}
                    className={`flex w-full px-4 py-3 rounded-lg text-left font-medium transition text-gray-700 focus:outline-none hover:bg-gray-50 hover:no-underline`}
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" aria-hidden />
                      <span className="hover:no-underline">{item.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {
                      item.submenu.length > 0 ? item.submenu.map((subitem) => (
                        (subitem || [] as any[])?.submenu.length > 0 ? (
                          <div key={subitem.name}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <div>{subitem.name}</div>
                            <div>
                              {subitem.submenu.map((itm: any) => <Link key={itm.href} href={itm.href}>
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                <div key={itm.name} className="px-4 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 hover:cursor-pointer">{itm.name}</div>

                              </Link>)}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={subitem.name} href={subitem.href} target={subitem.href?.startsWith("http") ? "_blank" : "_self"}
                            rel={subitem.href?.startsWith("http") ? "noopener noreferrer" : undefined}

                          >
                            <div
                              className="pl-8 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 flex items-center ">
                              <ArrowRight className="w-4 h-4 mr-2" />

                              {subitem.name}
                            </div>
                          </Link>
                        ))) : <Link className="pl-8 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-gray-50 flex items-center " href={item.href + ""} key={item.name}>
                        <ArrowRight className="w-4 h-4 mr-2" />

                        {item.name}
                      </Link>
                    }
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </header>
  );
}
