import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { albums } from "../../data";
import { AudioPlayer } from "react-audio-play";

export default function AlbumSlider() {
  const [thumbsSwiper, setthumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        effect="coverflow"
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[EffectCoverflow, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} className="mb-12">
            <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
              <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                <img
                  src={album.img}
                  alt=""
                  className="w-ful h-full object-cover"
                />
              </div>
              <div className="flex flex-1 w-full h-[500px]">
                <div className="capitalize flex-1 flex flex-col xl:px-12">
                  {album.tracks.map((track, i) => (
                    <div className="flex flex-1 w-full h-[500px]" key={i}>
                      <div className="flex flex-1 items-center gap-x-2 font-semibold xl:font-extrabold">
                        <div className="text-accent text-sm xl:text-lg">
                          0{i + 1}.
                        </div>
                        <div className="text-sm xl:text-base">{track.name}</div>
                      </div>
                      <div>
                        <AudioPlayer
                          src={track.src}
                          loop
                          preload="none"
                          color="#fff"
                          volume={40}
                          volumePlacement="bottom"
                          className="album-player"
                          style={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setthumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {albums.map((thumb, i) => (
          <SwiperSlide
            key={i}
            className="relative group overflow-hidden border-2 border-transparent w-[245px] rounded-[10px]"
          >
            <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
              <img src={thumb.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-all" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
