import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import designElementSVG from "@/assets/svgs/design-element.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="relative bg-brand/10 py-16 overflow-hidden">
        {/* Decorative SVG */}
        <div
        className="absolute -top-10 -left-0.05 w-[180px] h-[220px] bg-no-repeat bg-contain z-10 pointer-events-none"
        style={{
            backgroundImage: `url(${designElementSVG})`,
            backgroundSize: "40%",
            backgroundPosition: "left top",
        }}
        />
      <div className="max-w-7xl mx-auto md:px-8 mt-12">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">PROJECTS</h2>
          <p className="text-3xl font-light text-gray-900">
            Our Project Spotlights
          </p>
          <div className="mt-4 w-12 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Slider Wrapper */}
        <div className="relative lg:px-8">
          {/* Prev Button */}
          <button className="project-prev absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-brand/50 hover:bg-brand text-white  backdrop-blur-md border border-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button className="project-next absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-brand/50 hover:bg-brand text-white  backdrop-blur-md border border-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300">
            <ChevronRight size={24} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".project-prev",
              nextEl: ".project-next",
            }}
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
                  <div className="absolute bottom-0 left-0 w-full bg-brand border-l-4 border-b-4 border-l-brand border-b-brand px-6 py-5">
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

        .project-swiper .swiper-pagination {
          bottom: 0px !important;
        }

        .project-swiper .swiper-pagination-bullet {
          width: 50px;
          height: 4px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.4);
          transition: all 0.3s ease;
        }

        .project-swiper .swiper-pagination-bullet-active {
          background: #84cc16;
          width: 70px;
        }
      `}</style>
    </section>
  );
}