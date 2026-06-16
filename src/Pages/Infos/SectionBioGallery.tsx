import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { galleryImages } from "../../data/content";

function SectionBioGallery() {
  return (
    <section className="section-bio-gallery">
      <div className="container">
        <Swiper
          className="gallery-swiper"
          modules={[Autoplay, Navigation, Pagination]}
          loop
          speed={800}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ el: ".gallery-swiper-pagination", clickable: true }}
          navigation={{ nextEl: ".gallery-swiper-next", prevEl: ".gallery-swiper-prev" }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery-swiper-pagination swiper-pagination" />
        <button type="button" className="gallery-swiper-prev swiper-button-prev" aria-label="Previous slide" />
        <button type="button" className="gallery-swiper-next swiper-button-next" aria-label="Next slide" />
      </div>
    </section>
  );
}

export default SectionBioGallery;
