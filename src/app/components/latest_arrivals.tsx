"use client";

import React from "react";
import Link from "next/link";
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

type Product = {
  id: number;
  name: string;
  main_img: string;
};

type LatestArrivalsClientProps = {
  products: Product[];
};

export default function LatestArrivalsClient({
  products,
}: LatestArrivalsClientProps) {
  // ランダムな遅延時間を設定
  const delay = Math.floor(Math.random() * 1000) + 2000;
  const plugin = React.useRef(
    Autoplay({ delay: delay, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="relative w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="flex-shrink-0 justify-center items-center mx-auto basis-1/2 md:basis-1/3 xl:basis-1/4"
          >
            <div className="p-5 pb-16">
              <Link href={`/products/${product.name}`}>
                <div className="transform transition duration-300 hover:scale-105">
                  <Card>
                    <CardContent className="aspect-square h-auto relative hover:shadow-md">
                      <Image
                        src={product.main_img || "/no-image.png"}
                        alt={`Product ${product.name}`}
                        fill
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
