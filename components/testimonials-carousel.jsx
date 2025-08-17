"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Carousel({ items, renderItem }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 pl-4" key={index}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <Button
        className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4"
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4"
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`rounded-full h-3 w-3 ${index === selectedIndex ? "bg-primary" : ""}`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
