"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = { files: string[]; groupSize?: number; delayMs?: number };

export default function GroupBlurCarousel({ files, groupSize = 3, delayMs = 4000 }: Props) {
  // chunk images into groups of `groupSize`
  const groups = useMemo(() => {
    const out: string[][] = [];
    for (let i = 0; i < files.length; i += groupSize) out.push(files.slice(i, i + groupSize));
    // if last group smaller, you can pad or allow smaller group
    return out.length ? out : [[]];
  }, [files, groupSize]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % groups.length), delayMs);
    return () => clearInterval(id);
  }, [groups.length, delayMs]);

  // animation variants
  const exitVariant = {
    initial: { opacity: 1, filter: "blur(0px)", y: 0 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.2 },
    },
  };

  const enterVariant = {
    initial: { opacity: 0, filter: "blur(8px)", y: 10 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.2 } },
    exit: {},
  };

  return (
    <div className="w-full relative">
      <div className="w-full h-[250px] md:h-[320px] lg:h-[380px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          {/* key changes so AnimatePresence will exit old group then enter new group */}
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={exitVariant}
          >
            <div className="w-full flex gap-2 justify-center">
              {/* Render images of current group */}
              {groups[index].map((src, i) => (
                <motion.div
                  key={src + i}
                  variants={enterVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex-1 min-w-[0] overflow-hidden bg-gray-100"
                >
                  <div className="w-full h-[250px] md:h-[320px] lg:h-[380px] relative">
                    {/* use next/image if you want; here plain img for simplicity */}
                    <img
                      src={src}
                      alt={`slide-${index}-${i}`}
                      className="w-full h-full object-cover"
                      draggable={true}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optional simple indicators */}
      {/* <div className="flex gap-2 justify-center mt-3">
        {groups.map((_, g) => (
          <button
            key={g}
            onClick={() => setIndex(g)}
            className={`w-3 h-3 rounded-full ${g === index ? "bg-black" : "bg-gray-300"}`}
            aria-label={`Go to group ${g + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
