"use client";

import { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../components/ui/carousel";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/06050d32-e704-4a2d-89e7-ba4fdcecaa75/SUPERFLY+10+CLUB+FG%2FMG.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6e46785e-2e49-4fb0-97a7-9912d8dd1e02/ZM+SUPERFLY+10+PRO+FG.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/2bd35304-b101-4313-9869-4c19495b9dcf/JR+ZM+VAPOR+16+ACAD+FG%2FMG+NU2.png",
  "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/06050d32-e704-4a2d-89e7-ba4fdcecaa75/SUPERFLY+10+CLUB+FG%2FMG.png",
];

export default function HomepageCaruselImages() {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="relative w-full max-w-[1200px] mx-auto p-4">
      <h3 className="text-4xl uppercase mb-6 font-bold ">Bizning <span className="text-[#1F7A4D]">Top</span> mahsulotlar</h3>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="gap-4">
          {images.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-72 object-cover rounded-2xl shadow-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg"
        >
          <ChevronLeft className="text-black" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg"
        >
          <ChevronRight className="text-black" />
        </Button>
      </Carousel>
    </div>
  );
}
