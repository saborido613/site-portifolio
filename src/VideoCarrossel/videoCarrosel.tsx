import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const videos = [
  { src: '/Videos/videoplayback.mp4', type: 'video/mp4' },
  { src: '/Videos/VEIGH - Nois é Nois (Clipe Oficial).mp4', type: 'video/mp4' },
  { src: '/Videos/videoplayback (1).mp4', type: 'video/mp4'},
];

const VideoCarousel: React.FC = () => {
  return (
    <div className="flex-col w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-screen h-screen relative"
      >
      <nav className="flex
        justify-between
        items-center
        bg-transparent
        absolute 
        top-10
        px-8
        w-full
        z-10
        text-white">
          <div>
              <h1 className="text-4xl">VIC ALMEIDA</h1>
          </div>

          <div className="flex
            gap-14 
            text-xl">
              <a href="https://docs.google.com/spreadsheets/d/1Gs7Au8YzKtpUa2blVWr3DNJmntskoM16F4ahPFmeRZA/htmlview#gid=0">Projetos</a>
              <a href="">Sobre</a>
              <a href="">Contato</a>
          </div>
      </nav>




        {videos.map((video, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;


