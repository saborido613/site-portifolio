import React from "react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VideoCarousel: React.FC = () => {
  return (
    <div className="flex-col w-full h-full">
      {/* <Swiper
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
      </Swiper> */}
    </div>
  );
};

export default VideoCarousel;
