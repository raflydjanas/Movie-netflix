import { getMovieHero } from "../../Services/authservices";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperSlides from "../../layout/home/SwiperSlides";

function Swipper() {
  const [heroMovie, setHeroMovie] = useState([]);
  const autoplay = true;
  const swiperRef = useRef(null);

  useEffect(() => {
    getMovieHero().then((data) => {
      setHeroMovie(data);
      // console.log(data);
    });
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const swiperContainer = swiperInstance.el;
    const mouseEnter = () => {
      swiperInstance.autoplay.stop();
    };
    const mouseLeave = () => {
      swiperInstance.autoplay.start();
    };

    swiperContainer.addEventListener("mouseenter", mouseEnter);
    swiperContainer.addEventListener("mouseleave", mouseLeave);

    return () => {
      swiperContainer.addEventListener("mouseenter", mouseEnter);
      swiperContainer.addEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div>
      <Swiper
        className="cursor-grab "
        spaceBetween={30}
        centeredSlides={true}
        autoplay={autoplay ? { delay: 3000 } : false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        ref={swiperRef}
      >
        {heroMovie.map((movie) => (
          <SwiperSlide key={movie.id} className="">
            <SwiperSlides movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipper;
