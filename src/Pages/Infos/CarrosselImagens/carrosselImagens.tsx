import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  { src: "/img/1.jpg" , alt: 'Image 1' },
  { src: "/img/2.jpg" , alt: 'Image 2' },
  { src: "/img/3.jpg" , alt: 'Image 3' },
  { src: "/img/4.jpeg" , alt: 'Image 4' },
  { src: "/img/5.jpeg" , alt: 'Image 5' },
  { src: "/img/6.jpeg" , alt: 'Image 6' },
  { src: "/img/7.jpeg" , alt: 'Image 7' },
  { src: "/img/8.png" , alt: 'Image 8' },
  { src: "/img/9.png" , alt: 'Image 9' },
];

const CarrosselImagens: React.FC = () => {
  return (
    
    <div className="flex-col mt-10 px-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="altura-carrossel-imagens"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img className="h-full" src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrosselImagens;
