"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pad = (value: number) => String(value).padStart(2, "0");

interface ProjectHeroCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectHeroCarousel({
  images,
  title,
}: ProjectHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const multiple = images.length > 1;

  return (
    <div className="absolute inset-0">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        slidesPerView={1}
        rewind={multiple}
        speed={650}
        navigation={multiple}
        pagination={multiple ? { clickable: true } : false}
        keyboard={{ enabled: multiple, pageUpDown: false }}
        a11y={{ enabled: true }}
        aria-label={`${title} screenshots`}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="project-hero-swiper h-full w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={src}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 1200px) calc(100vw - 32px), 1152px"
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {multiple && (
        <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold tabular-nums text-white/90 backdrop-blur-md sm:right-6 sm:top-6">
          {pad(activeIndex + 1)} / {pad(images.length)}
        </span>
      )}
    </div>
  );
}
