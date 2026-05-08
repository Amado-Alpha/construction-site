import React from "react";
import { Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Small Title */}
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            About Our Company
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-4xl font-light leading-tight text-[#111]">
            A Team Of Reliable and <br />
            Experienced Contractors
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-6 leading-7 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-2xl">
            {["Our Mission", "Our Vision", "Our Value"].map((item) => (
              <div
                key={item}
                className="bg-[#f6ede7] border-l-2 border-brand px-4 py-5"
              >
                <h4 className="font-semibold text-[#111] mb-2">{item}</h4>
                <p className="text-sm text-gray-500 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            {/* Button */}
            <button className="bg-brand hover:bg-brand-hover transition-colors text-white font-medium px-7 py-3 rounded-md">
              Learn More
            </button>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-brand flex items-center justify-center text-brand">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Want to Discuss?
                </p>
                <p className="font-bold text-[#111] text-lg">
                  +123 (456)-7896
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end lg:mr-8">
          {/* Background Shape */}
          <div className="absolute -right-8 -bottom-8 w-[80%] h-[96%] bg-brand/10 rounded-2xl"></div>

          {/* Main Card */}
          <div className="relative z-10 w-full max-w-md">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
                alt="Construction Team"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-0 left-0 bg-brand text-white px-6 py-4 rounded-tr-2xl rounded-bl-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase">
                Works Of
              </p>

              <div className="flex items-end gap-2 leading-none">
                <span className="text-5xl font-extrabold">25.</span>
                <span className="text-3xl font-bold uppercase">
                  Experience
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;