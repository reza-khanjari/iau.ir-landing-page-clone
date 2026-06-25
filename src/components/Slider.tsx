import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface Images {
  src: string;
  alt: string;
}
const images: Images[] = [
  {
    src: "/images/iau-white.png",
    alt: "iau-logo-white",
  },
  {
    src: "/images/iau-blue.png",
    alt: "iau-logo-blue",
  },
  {
    src: "/images/iau-neon.png",
    alt: "iau-logo-white",
  },
  {
    src: "/images/iau-silver.png",
    alt: "iau-logo-gold",
  },

  {
    src: "/images/iau-gold.png",
    alt: "iau-logo-gold",
  },

  {
    src: "/images/iau-green.png",
    alt: "iau-logo-gold",
  },
];

function Slider() {
  return (
    <div className="absolute bg-black top-0 left-0 h-dvh w-full">
      <Swiper
        className="h-full w-full"
        spaceBetween={2}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        simulateTouch={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <img
              className="h-full w-full object-cover object-center"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
