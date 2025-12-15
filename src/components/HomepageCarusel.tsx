"use client";

import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../components/ui/carousel";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    badge: "Limited time only",
    title: "Get 30% off",
    description:
      "Sneakers made with your comfort in mind so you can put all of your focus into your next session.",
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/06050d32-e704-4a2d-89e7-ba4fdcecaa75/SUPERFLY+10+CLUB+FG%2FMG.png",
  },
  {
    id: 2,
    badge: "New Collection",
    title: "Summer Sale",
    description:
      "Discover our latest collection with amazing discounts on premium quality products.",
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6e46785e-2e49-4fb0-97a7-9912d8dd1e02/ZM+SUPERFLY+10+PRO+FG.png",
  },
  {
    id: 3,
    badge: "Featured Deal",
    title: "Free Shipping",
    description:
      "Get free shipping on all orders over $50. Shop now and save on delivery costs.",
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/2bd35304-b101-4313-9869-4c19495b9dcf/JR+ZM+VAPOR+16+ACAD+FG%2FMG+NU2.png",
  },
];

export default function HomepageCarusel() {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className=" flex items-center justify-center  p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[1400px] relative  ">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative  rounded-2xl md:rounded-3xl overflow-hidden  ">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-14 min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
                    {/* Left Content */}
                    <div className="space-y-3 md:space-y-4 lg:space-y-5 z-10 text-center">
                      <span className="inline-block text-black text-xs md:text-sm font-medium tracking-wide">
                        {slide.badge}
                      </span>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F7A4D] text-balance leading-tight">
                        <Link to={"/product"}>{slide.title}</Link>
                      </h1> 

                      <p className="text-black text-sm md:text-base lg:text-lg max-w-lg mx-auto text-pretty leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Right Image */}
                    <Link to={"/product"}>
                      <div className="relative h-[220px] md:h-80 lg:h-[380px] flex items-center justify-center">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt="Product showcase"
                          className="w-full h-full object-contain "
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 size-9 md:size-11 lg:size-12 rounded-full bg-white hover:bg-white/90 border-none shadow-xl transition-all hover:scale-105"
          >
            <ChevronLeft className="size-4 md:size-5 lg:size-6 text-neutral-950" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 size-9 md:size-11 lg:size-12 rounded-full bg-white hover:bg-white/90 border-none shadow-xl transition-all hover:scale-105"
          >
            <ChevronRight className="size-4 md:size-5 lg:size-6 text-neutral-950" />
            <span className="sr-only">Next slide</span>
          </Button>
        </Carousel>
      </div>
    </div>
  );
}
