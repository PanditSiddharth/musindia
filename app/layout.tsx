import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta } from "./seoData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteMeta.siteName,
    template: "%s | " + siteMeta.siteName,
  },
  metadataBase: new URL(siteMeta.siteUrl),
  description: "Manav Utthan Samiti — Serving humanity since 2002.",
  icons: {
    icon: "/image/gallery3.png",
    apple: "/image/gallery3.png",
  },
  openGraph: {
    title: siteMeta.siteName,
    description: "Manav Utthan Samiti — Serving humanity since 2002.",
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteName,
    images: [
      {
        url: siteMeta.defaultImage,
        width: 1200,
        height: 630,
        alt: siteMeta.siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
