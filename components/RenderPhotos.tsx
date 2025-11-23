'use client'
import React, { useEffect, useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { Zoom } from 'yet-another-react-lightbox/plugins';
type PhotoItem = {
    src: string;
    width: number;
    height: number;
    alt?: string;
};

const RenderPhotos = ({ filenames }: { filenames: string[] }) => {

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
            img.src = `${file}`;
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
        <section className="shadow-sm">
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
                </>
            ) : (
                <div className="h-48 flex items-center justify-center text-gray-500">
                    No images found in <code>/public/images</code>
                </div>
            )}
        </section>
    )
}

export default RenderPhotos