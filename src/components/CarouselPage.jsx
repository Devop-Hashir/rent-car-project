"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { profile } from "@/constants/AppData";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

export default function CarouselPage() {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            display: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {profile.map((slide, index) => (
            <CarouselItem
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
              className={`w-full h-full bg-cover bg-no-repeat bg-center relative pointer-events-none`}
            >
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.6)] opacity-90"></div>
              <div>
                <Card className="bg-transparent border-none">
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="flex flex-col relative lg:justify-center items-center h-[40vh] md:h-[60vh]">
                      <h3 className="flex justify-center items-center mb-1 lg:mb-5 gap-6 text-2xl lg:text-5xl ">
                        <span className="text-white font-black transition-[3s]">{slide.title}</span>
                      </h3>
                      <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12">
                      <i className={"fad fa-" + slide.icon}></i>
                        <span>{slide.text}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}
