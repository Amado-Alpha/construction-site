import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import designElementSVG from "@/assets/svgs/design-element.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    id: 1,
    title: "Marjan Increment Project – Package 4 Offshore Gas Facilities",
    location: "Offshore Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Commercial Tower Development",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Industrial Pipeline Construction",
    location: "Doha, Qatar",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Industrial Pipeline Construction",
    location: "Doha, Qatar",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Industrial Pipeline Construction",
    location: "Doha, Qatar",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
  },
];



export default function ProjectSpotlights() {
  return (
    <section className="relative bg-neutral-800 py-24 overflow-hidden">
        {/* Decorative SVG */}
        <div
        className="absolute -top-30 -left-8 w-[180px] h-[220px] bg-no-repeat bg-contain z-10 pointer-events-none"
        style={{
            backgroundImage: `url(${designElementSVG})`,
            backgroundSize: "70%",
            backgroundPosition: "left top",
        }}
        />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-white text-4xl md:text-5xl md:ml-4 font-bold">
            Project Spotlights
          </h2>
        </div>

        {/* Slider */}
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
           
            navigation
            pagination={{ clickable: true }}
          
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 1.5,
                slideShadows: false,
                scale: 0.85,
            }}
            className="project-swiper !overflow-visible"
            >
            {projects.map((project) => (
            <SwiperSlide
                key={project.id}
                className="!w-[85%] md:!w-[70%]"
            >
              <div className="relative overflow-hidden shadow-2xl rounded-lg">
               
                {/* Image */}
                <div className="h-[260px] md:h-[420px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-[#2B469F]/95 border-l-4 border-b-4 border-l-lime-400 border-b-lime-400 px-6 py-5">
                  <h3 className="text-white text-xl md:text-3xl font-bold leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/90 text-sm md:text-base mt-2">
                    {project.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style>{`
        .project-swiper {
          padding-bottom: 60px;
        }

        .project-swiper .swiper-slide {
          transition: all 0.4s ease;
          opacity: 0.45;
          filter: blur(2px);
          transform: scale(0.9);
        }

        .project-swiper .swiper-slide-active {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
        }

        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: white;
          background: #16a34a;
          width: 42px;
          height: 42px;
        }

        .project-swiper .swiper-button-next::after,
        .project-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .project-swiper .swiper-pagination {
          bottom: 0px !important;
        }

        .project-swiper .swiper-pagination-bullet {
          width: 50px;
          height: 4px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.4);
        }

        .project-swiper .swiper-pagination-bullet-active {
          background: #84cc16;
        }
      `}</style>
    </section>
  );
}