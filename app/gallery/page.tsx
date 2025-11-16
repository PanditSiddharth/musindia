"use server"
// app/gallery/page.tsx
import fs from 'fs';
import path from 'path';
import GalleryClient from '@/components/GalleryClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function Page() {
  const imagesDir = path.join(process.cwd(), 'public', 'image');
  console.log('Images directory:', imagesDir);
  let files: string[] = [];
  try {
    files = fs.readdirSync(imagesDir).filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    console.log('Files found:', files);
  } catch (e) {
    files = [];
  }


  // Pass filenames to the client component which will load actual sizes in browser
  return (
    <div>
      <Navbar />
    <main>
      <GalleryClient filenames={files} />
    </main>
    <Footer />
    </div>
  );
}
