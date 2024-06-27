import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Path from "../../../Infra/routes/path";
import Nav from "../../Componentes/Nav/nav";

const videos = [
  {
    src: "/Videos/Anitta - Free Fire.mp4",
    type: "video/mp4",
  },
  {
    src: "/Videos/facilitadao.mp4",
    type: "video/mp4",
  },
  {
    src: "/Videos/VEIGH - Nois é Nois (Clipe Oficial).mp4",
    type: "video/mp4",
  },
  {
    src: "/Videos/Iza - O Movimento.mp4",
    type: "video/mp4",
  },
  {
    src: "/Videos/Pizza Hut - Melts.mp4",
    type: "video/mp4",
  },
];

const VideoCarousel: React.FC = () => {
  return (
    <div className="flex-col w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="carrossel-videos-mobile md:w-full md:h-screen relative"
      >
        <Nav color="text-white" nome="Sobre Mim" link={Path.INFOS} />

        {videos.map((video, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
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
