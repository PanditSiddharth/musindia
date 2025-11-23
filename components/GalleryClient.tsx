"use client";

import React, { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import RenderPhotos from "./RenderPhotos";


export default function GalleryClient({ filenames }: { filenames: string[] }) {


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

           <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Gallery</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's our gallery images which shows our helps.
          </p>
        </div>
          <RenderPhotos filenames={filenames} />
      </div>
    </div>
  );
}
