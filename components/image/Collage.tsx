"use client";

import React from "react";
import Image from "next/image";

/**
 * Collage component for Next.js + TailwindCSS
 * Props:
 *  - images: string[] (array of image URLs / static imports)
 *  - layout: "masonry" | "grid" (default: "masonry")
 *  - cols: number (columns for grid; ignored for masonry)
 */
export default function Collage({
  images = [],
  layout = "masonry",
  cols = 3,
}: {
  images: string[];
  layout?: "masonry" | "grid";
  cols?: number;
}) {
  if (!images || images.length === 0) return null;

  // Grid layout (CSS Grid)
  if (layout === "grid") {
    const gridCols = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols}`;
    return (
      <div className={`grid ${gridCols} gap-3`}>
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-sm">
            <Image
              src={src}
              alt={`collage-${i}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={i < 3} // prioritize first few images
            />
          </div>
        ))}
      </div>
    );
  }

  // Masonry layout using CSS columns (simple, responsive)
  return (
    <div className="masonry-container" style={{ columnGap: "1rem" }}>
      {images.map((src, i) => (
        <div
          key={i}
          className="masonry-item mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-sm"
        >
          <Image
            src={src}
            alt={`collage-${i}`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i < 3}
          />
        </div>
      ))}

      <style jsx>{`
        .masonry-container {
          column-count: 1;
        }
        @media (min-width: 640px) {
          .masonry-container {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .masonry-container {
            column-count: 3;
          }
        }
        .masonry-item {
          /* ensure items don't break across columns */
        }
      `}</style>
    </div>
  );
}

/*
Usage:

import Collage from "./components/nextjs-collage-component";

const imgs = [
  "/images/1.jpg",
  "/images/2.jpg",
  // absolute urls or imported static assets
];

<Collage images={imgs} layout="masonry" />

Notes:
- This uses next/image; make sure images are allowed in next.config.js if remote.
- Tailwind helps for spacing; replace with your CSS if not using Tailwind.
- For large galleries consider lazy loading, pagination, or virtualization.
- If you want Pinterest-like masonry with column ordering preserved, use a JS masonry library (e.g., react-masonry-css).
*/
