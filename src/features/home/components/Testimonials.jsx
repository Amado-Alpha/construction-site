import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

// Updated with construction company testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager, Skyline Developments",
    comment: "Their construction team delivered our commercial building ahead of schedule with outstanding quality. Communication was smooth throughout the project, and every detail was handled professionally.",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Procurement Manager, Urban Build Supplies",
    comment: "We’ve partnered with them for multiple construction projects, and their consistency is impressive. Materials, execution, and site management are all handled with top-tier professionalism.",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5
  },
  {
    name: "Amina Patel",
    role: "Property Developer, Prime Estates",
    comment: "As a developer, I needed a reliable construction partner. They delivered a residential complex that exceeded expectations in both design execution and structural quality.",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 4
  },
  {
    name: "David Okonjo",
    role: "Site Engineer, Horizon Construction",
    comment: "Their team handled our site operations efficiently, even during challenging conditions. Safety standards and project coordination were excellent across all phases.",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    name: "Lisa Müller",
    role: "Project Lead, Apex Construction",
    comment: "Working with this company has streamlined our project delivery process. From planning to execution, everything is well-organized and executed with precision.",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background section_container">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</h2>
          <p className="text-3xl font-light text-gray-900">
            What Our Clients Say
          </p>
          <div className="mt-4 w-12 h-0.5 bg-gray-300 mx-auto"></div>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-gray-300 dark:bg-gray-600',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-primary'
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false 
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay]}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full p-6 text-center shadow-sm hover:shadow-md transition-shadow border-border">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-sm italic text-muted-foreground mb-6">
                        "{testimonial.comment}"
                      </blockquote>
                      
                      <div>
                        <h3 className="text-md font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;