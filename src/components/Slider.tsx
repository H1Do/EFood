import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Product } from '../models/Product';

import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps {
  slides: any[];
}

const Slider: React.FC<SliderProps> = ({ slides = [] }) => {
  const breakpoints = {
    1200: {
      slidesPerView: 5,
    },
    900: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    504: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <div className="slider">
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
          {slides.map((slide: Product) => (
            <SwiperSlide key={slide.id}>
              <ProductCard item={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider__actions">
          <button className="slider__button slider__button-prev" type="button">
            <svg
              width="34.000000"
              height="34.000000"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M0 17C0 7.62 7.62 0 17 0C26.37 0 34 7.62 34 17C34 26.37 26.37 34 17 34C7.62 34 0 26.37 0 17ZM31.36 17C31.36 9.07 24.92 2.63 17 2.63C9.07 2.63 2.63 9.07 2.63 17C2.63 24.92 9.07 31.36 17 31.36C24.92 31.36 31.36 24.92 31.36 17Z"
                fill="#D1D2DC"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M18.81 24.51L12.23 17.93C11.72 17.42 11.72 16.59 12.23 16.07L18.81 9.49C19.3 9.07 20.03 9.07 20.53 9.49C21.08 9.96 21.14 10.79 20.67 11.35L15.02 17L20.67 22.66C21.18 23.17 21.18 24 20.67 24.51C20.16 25.03 19.33 25.03 18.81 24.51Z"
                fill="#D1D2DC"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <div className="slider__pagination"></div>
          <button className="slider__button slider__button-next" type="button">
            <svg
              width="34.000000"
              height="34.000000"
              viewBox="0 0 34 34"
              fill="none"
              style={{ scale: '-1 1' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M0 17C0 7.62 7.62 0 17 0C26.37 0 34 7.62 34 17C34 26.37 26.37 34 17 34C7.62 34 0 26.37 0 17ZM31.36 17C31.36 9.07 24.92 2.63 17 2.63C9.07 2.63 2.63 9.07 2.63 17C2.63 24.92 9.07 31.36 17 31.36C24.92 31.36 31.36 24.92 31.36 17Z"
                fill="#D1D2DC"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M18.81 24.51L12.23 17.93C11.72 17.42 11.72 16.59 12.23 16.07L18.81 9.49C19.3 9.07 20.03 9.07 20.53 9.49C21.08 9.96 21.14 10.79 20.67 11.35L15.02 17L20.67 22.66C21.18 23.17 21.18 24 20.67 24.51C20.16 25.03 19.33 25.03 18.81 24.51Z"
                fill="#D1D2DC"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
