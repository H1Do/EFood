import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import LeftArrowIcon from 'shared/assets/images/icons/left-arrow-icon.svg?react';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

interface SliderProps {
  slides: ReactNode[];
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  slides = [],
  className = '',
}) => {
  const breakpoints = {
    1200: {
      slidesPerView: 5,
    },
    967: {
      slidesPerView: 4,
    },
    660: {
      slidesPerView: 3,
    },
    462: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <div className={`slider ${className}`}>
      <div className="slider__inner">
        <Swiper
          className="slider__products"
          modules={[Navigation, Pagination, A11y]}
          breakpoints={breakpoints}
          spaceBetween={29}
          navigation={{
            nextEl: '.slider__button-next',
            prevEl: '.slider__button-prev',
          }}
          pagination={{
            el: '.slider__pagination',
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
        >
          {slides.map((slide: ReactNode, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>

        <div className="slider__actions">
          <button className="slider__button slider__button-prev" type="button">
            <LeftArrowIcon />
          </button>
          <div className="slider__pagination"></div>
          <button className="slider__button slider__button-next" type="button">
            <LeftArrowIcon style={{ scale: '-1 1' }} />
          </button>
        </div>
      </div>
    </div>
  );
};
