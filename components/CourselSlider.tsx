"use client"
import * as React from "react"
import Autoplay1 from "embla-carousel-autoplay"
import Autoplay2 from "embla-carousel-auto-scroll"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CourselSlider(f: { files: string[], autoplayType?: "autoplay1" | "autoplay2" }) {

  if(f.autoplayType === undefined) 
    f.autoplayType = "autoplay1"
  
  console.log("FILES IN CAROUSEL SLIDER", f);

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        f.autoplayType === "autoplay2"
? Autoplay2(
              {
                speed: 3
          }) : Autoplay1({
                delay: 3000,
              })
      ]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {f?.files?.map((file, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 mx-1 p-0"
          >
            <div className="py-2">
              <Card className="border-0 shadow-lg overflow-hidden group p-0 rounded-none m-0">
                <CardContent className="p-0 relative m-0">
                  <div className="relative h-[300px] md:h-[350px] lg:h-[380px] overflow-hidden">
                    <img
                      src={file}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 md:left-4 bg-white/90 hover:bg-white shadow-lg" />
      <CarouselNext className="right-2 md:right-4 bg-white/90 hover:bg-white shadow-lg" />
    </Carousel>
  )
}