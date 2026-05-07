import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

// images
import heroImage1 from "@/assets/images/home-hero-1.jpg";
import heroImage2 from "@/assets/images/home-hero-2.jpg";
import heroImage3 from "@/assets/images/home-hero-3.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const swiperRef = useRef(null);

  const heroSlides = [
    {
      src: heroImage1,
      title: "Building Excellence",
      subtitle: "Commercial & Residential",
    },
    {
      src: heroImage2,
      title: "Crafting Landmarks",
      subtitle: "Since 1999",
    },
    {
      src: heroImage3,
      title: "Precision Engineering",
      subtitle: "Quality Assured",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentSlide = heroSlides[activeIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* SWIPER BACKGROUND */}
      <Swiper
        modules={[Autoplay, EffectCreative, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="creative"
        creativeEffect={{
          prev: { shadow: false, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.src})` }}
              animate={{
                scale: [1, 1.1],
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
              transition={{
                scale: {
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-end pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              {currentSlide.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-200 font-light tracking-wide">
              {currentSlide.subtitle}
            </p>
          </motion.div>

        </div>
      </div>

      {/* CLICKABLE INDICATORS */}
      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* COUNTER */}
      <div className="absolute bottom-6 right-6 z-30 text-white/60 text-sm font-light tracking-wider">
        {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
      </div>

      {/* SCROLL HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-white/30"
        />
      </motion.div>

    </div>
  );
};

export default HeroSection;