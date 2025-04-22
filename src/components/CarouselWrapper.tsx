import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import ProjectCard from './projectCard/ProjectCard';
import { projectCards } from '../utils/projectData';
import Button from './Button';

const CarouselWrapper = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full mx-auto relative">
      {/* Left Arrow */}
      <Button
        text="<"
        className="absolute z-50 top-1/2 h-15 w-15 flex items-center justify-center -translate-y-1/2 -left-8 text-3xl p-3 bg-gray-900 hover:bg-gray-700"
        onclick={() => swiperRef.current?.slidePrev()}
      />

      {/* Right Arrow */}
      <Button
        text=">"
        className="absolute z-50 top-1/2 h-15 w-15 flex items-center justify-center -translate-y-1/2 right-2 text-3xl p-3 bg-gray-900 hover:bg-gray-700"
        onclick={() => swiperRef.current?.slideNext()}
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2.5}
        pagination={false}
        loop={true}
        className="w-full"
        grabCursor={true}
      >
        {projectCards.map((project, idx) => (
          <SwiperSlide key={idx?.toString()}>
            <ProjectCard icon={undefined} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselWrapper;
