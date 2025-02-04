"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

export default function LookBook() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="relative w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 justify-center items-center mx-auto basis-1/2 md:basis-1/3 xl:basis-1/4"
          >
            <div className="p-5 pb-16">
              <Card>
                <CardContent className="aspect-square h-auto relative hover:">
                  <span className="justify-center items-center text-4xl font-semibold ">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
