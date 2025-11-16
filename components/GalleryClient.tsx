"use client";

import React, { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

type PhotoItem = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export default function GalleryClient({ filenames }: { filenames: string[] }) {
  const [photos, setPhotos] = useState<PhotoItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Lightbox states
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Load real image sizes
  useEffect(() => {
    if (!filenames || filenames.length === 0) {
      setPhotos([]);
      setLoading(false);
      return;
    }

    let mounted = true;
    const results: Array<PhotoItem | null> = new Array(filenames.length).fill(null);
    let loadedCount = 0;

    filenames.forEach((file, idx) => {
      const img = new Image();
      img.src = `/image/${file}`;
      img.onload = () => {
        results[idx] = {
          src: img.src,
          width: img.naturalWidth || 800,
          height: img.naturalHeight || 600,
          alt: file,
        };
        loadedCount += 1;
        if (loadedCount === filenames.length && mounted) {
          setPhotos(results.filter(Boolean) as PhotoItem[]);
          setLoading(false);
        }
      };
      img.onerror = () => {
        results[idx] = null;
        loadedCount += 1;
        if (loadedCount === filenames.length && mounted) {
          setPhotos(results.filter(Boolean) as PhotoItem[]);
          setLoading(false);
        }
      };
    });

    return () => {
      mounted = false;
    };
  }, [filenames]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

           <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Gallery</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's our gallery images which shows our helps.
          </p>
        </div>

        <section className="bg-white rounded-2xl p-4 shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-sm text-gray-500">Loading images...</div>
            </div>
          ) : photos && photos.length > 0 ? (
            <>
              <RowsPhotoAlbum
                photos={photos}
                spacing={6}
                targetRowHeight={200}
                rowConstraints={{ minPhotos: 1, maxPhotos: 5, singleRowMaxHeight: 360 }}
                onClick={({ index }) => {
                  setIndex(index);
                  setOpen(true);
                }}
              />

              {/* WhatsApp-style Lightbox Viewer */}
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={photos}
                index={index}
                on={{ view: ({ index }) => setIndex(index) }}
                plugins={[Zoom]}
              />

              <p className="mt-4 text-xs text-gray-500">
                Showing images from <code>/public/images</code>
              </p>
            </>
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-500">
              No images found in <code>/public/images</code>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
