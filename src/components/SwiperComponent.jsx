import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComponent({ children, slidesPerView = 1 }) { // Accept children props
  return (
    <Swiper
      modules={[Navigation, Pagination]} 
      spaceBetween={10}                  
      slidesPerView={slidesPerView}                  
      navigation                         
      pagination={{ clickable: true }}
      className='swiper-wrapper'
    >
      {children}
    </Swiper>
  );
}
