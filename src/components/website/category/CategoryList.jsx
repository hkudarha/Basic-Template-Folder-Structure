import React from "react";
import { categoriesData } from "../../../utils/data.utils";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CategoryList = () => {
  return (
    <div className="py-12 px-6  mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Browse <span className="text-primary">Categories</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        freeModeMomentum={false}
        allowTouchMove={false}
        speed={6000} // long smooth speed
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="mySwiper"
        style={{
          transitionTimingFunction: "linear",
        }}
      >
        {categoriesData.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div
              className="
                group relative rounded-2xl overflow-hidden
                bg-white border border-gray-100 shadow-sm
               hover:-translate-y-2
                transition-all duration-700 ease-out
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="
                  w-full h-48 object-cover
                  transform transition-all duration-[1200ms]
                  group-hover:scale-110 group-hover:rotate-1
                "
              />

              {/* Gradient overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/60 via-black/10 to-transparent
                  opacity-70 group-hover:opacity-90
                  transition-all duration-700
                "
              />

              {/* Title */}
              <h3
                className="
                  absolute bottom-4 left-4 text-white text-lg font-semibold
                  opacity-0 translate-y-3
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-700 ease-out
                "
              >
                {cat.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryList;
