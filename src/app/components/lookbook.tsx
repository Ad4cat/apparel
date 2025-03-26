"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

type VariantImage = {
  id: number;
  img_url: string;
};

type LookBookClientProps = {
  variants: VariantImage[];
};

export default function LookBookClient({ variants }: LookBookClientProps) {
  const delay = Math.floor(Math.random() * 1000) + 2000;
  const plugin = React.useRef(Autoplay({ delay, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {variants.map((variant) => (
          <CarouselItem
            key={variant.id}
            className="flex-shrink-0 justify-center items-center mx-auto basis-1/2 md:basis-1/3 xl:basis-1/4"
          >
            <div className="p-5 pb-16">
              <Card>
                <CardContent className="aspect-square h-auto relative transform transition duration-300 hover:scale-105 hover:shadow-md">
                  <Image
                    src={variant.img_url || "/no-image.png"}
                    alt={`Variant ${variant.id}`}
                    fill
                    className="object-contain"
                  />
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
