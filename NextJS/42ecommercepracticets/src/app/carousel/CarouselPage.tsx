"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import camera from "../assets/camera.jpeg";
import cart from "../assets/cart.png";

export function CarouselPage() {
  const images = [
    camera,
    cart,
    camera,
    cart,
    camera,
    cart,
    camera,
    cart,
    camera,
    cart,
  ];

  return (
    <Carousel className="relative w-[60%] m-auto p-4">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-72">
              {" "}
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center p-2 relative h-full bg-cover">
                  <Image
                    src={image}
                    alt={`Image ${index}`}
                    width={900}
                    className=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
