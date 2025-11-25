import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    title: "Discover Modern UI",
    subtitle: "Minimal. Clean. Smooth interactions.",
    offerImg:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
    offerTitle: "Premium UI Kits",
    offerText: "Beautiful, clean & professionally built designs."
  },

  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1600&q=80",
    title: "Clean Minimal Layout",
    subtitle: "Designed for modern digital experiences.",
    offerImg:
      "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&w=900&q=80",
    offerTitle: "Exclusive Access",
    offerText: "Get stunning minimal templates every month."
  },

  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80",
    title: "Smooth Transitions",
    subtitle: "Inspired by premium brand interactions.",
    offerImg:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    offerTitle: "Ultra Minimal Kits",
    offerText: "Perfect for apps, websites & admin dashboards."
  }
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Top = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full h-[520px] rounded-3xl overflow-hidden relative bg-gray-500">

      {/* BACKGROUND SLIDER */}
      <Swiper
        effect="fade"
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000 }}
        speed={1400}
        onSlideChange={(s) => setActive(s.activeIndex)}
        className="absolute inset-0 -z-10"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="w-full h-full bg-cover bg-center brightness-90"
              style={{ backgroundImage: `url(${s.bg})` }}
            >
              <div className="w-full h-full bg-black/50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <div className="flex w-full h-full relative">

        {/* LEFT TEXT */}
        <div className="w-1/2 flex items-center pl-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].title}
              variants={fade}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <h1 className="text-white text-5xl font-bold leading-tight drop-shadow-lg">
                {slides[active].title}
              </h1>

              <p className="text-gray-200 text-xl mt-4 max-w-[400px] leading-relaxed">
                {slides[active].subtitle}
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1 }}
                className="h-[4px] mt-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT OFFER BOX */}
        <div className="w-1/2 flex items-center justify-center pr-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].offerTitle}
              variants={fade}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-[360px] shadow-2xl relative overflow-hidden"
            >
              {/* soft glowing gradient behind box */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 blur-2xl -z-10"></div>

              {/* OFFER IMAGE */}
              <motion.img
                src={slides[active].offerImg}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              {/* OFFER TITLE */}
              <h2 className="text-white text-2xl mt-5 font-semibold">
                {slides[active].offerTitle}
              </h2>

              {/* OFFER TEXT */}
              <p className="text-gray-200 mt-2 text-lg leading-relaxed">
                {slides[active].offerText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Top;
