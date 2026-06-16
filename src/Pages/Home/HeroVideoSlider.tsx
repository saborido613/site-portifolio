import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { heroSlides } from "../../data/content";
import { useVideoModal } from "../../context/VideoModalContext";
import PlayIcon from "../../components/PlayIcon";

function activateSlideVideo(swiper: SwiperType) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  document.querySelectorAll<HTMLVideoElement>(".hero-bg-video").forEach((video) => {
    const slide = video.closest(".swiper-slide");
    if (slide === activeSlide) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

function HeroVideoSlider() {
  const { openModal } = useVideoModal();

  return (
    <section className="hero-video-slider">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        loop
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ el: ".hero-swiper-pagination", clickable: true }}
        navigation={{ nextEl: ".hero-swiper-next", prevEl: ".hero-swiper-prev" }}
        onSwiper={(swiper) => activateSlideVideo(swiper)}
        onSlideChange={(swiper) => activateSlideVideo(swiper)}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <video className="hero-bg-video" muted loop playsInline preload="metadata">
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
            <div className="video-overlay" />

            <div className="slide-caption-wrapper">
              <span className="slide-category font-sans">{slide.category}</span>
              <h2 className="slide-title">{slide.title}</h2>
              <button
                type="button"
                className="btn-primary play-project-btn"
                data-video-url={slide.videoUrl}
                onClick={() => openModal(slide.videoUrl, slide.title, slide.category)}
              >
                <PlayIcon />
                {slide.btnText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-swiper-pagination swiper-pagination" />
      <button type="button" className="hero-swiper-prev swiper-button-prev" aria-label="Previous slide" />
      <button type="button" className="hero-swiper-next swiper-button-next" aria-label="Next slide" />
    </section>
  );
}

export default HeroVideoSlider;
