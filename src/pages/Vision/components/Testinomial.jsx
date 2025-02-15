import React, { useState, useEffect } from "react";
import {
  BiLeftArrow,
  BiRightArrow,
  BiSolidLeftArrow,
  BiSolidLeftDownArrowCircle,
  BiSolidRightArrow,
} from "react-icons/bi";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Visionary Leadership",
      description:
        "The leadership team at GamingPe has a clear vision for the future of gaming. Their strategic decisions and commitment to innovation have significantly enhanced the gaming experience.",
    },
    {
      title: "Proven Industry Expertise",
      description:
        "With years of experience in the gaming industry, the leadership team understands market trends and user needs, ensuring top-tier services and engagement.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Their dedication to excellence reflects in every aspect of the platform, from seamless gameplay to community-driven initiatives that bring gamers together worldwide.",
    },
    {
      title: "Empowering the Gaming Community",
      description:
        "GamingPe's leadership prioritizes the gaming community, fostering inclusivity, fair competition, and continuous enhancements to ensure players have the best experience.",
    },
    {
      title: "Strategic Growth & Expansion",
      description:
        "Under strong leadership, GamingPe has expanded its reach globally, bringing cutting-edge technology and optimized gaming services to users across different regions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div
      initial={{ rotateY: -180 }} // Start from 0° rotation
      whileInView={{ rotateY: 0 }} // Flip to 180° when in view
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      className="text-white py-12"
    >
      <div className="md:max-w-5xl mx-auto text-center rounded-2xl bg-[#072b3e] px-6 py-2">
        <div className="relative">
          {/* Testimonial Text */}
          <div className="text-gray-100 px-4 md:px-10">
            <p className="text-sm md:text-lg lg:text-2xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text italic max-w-3xl mx-auto mb-6 leading-relaxed">
              {testimonials[activeIndex].title}
            </p>
            <h3 className="text-base  md:text-md lg:text-lg font-semibold text-gray-300">
              {testimonials[activeIndex].description}
            </h3>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bg-blue-400 rounded-full w-8 h-8 items-center justify-center flex top-1/2 left-2  transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="p-2 md:p-3 scale-125 rounded-full  focus:outline-none"
            >
              <BiSolidLeftArrow />
            </button>
          </div>
          <div className="absolute bg-blue-400 rounded-full w-8 h-8 items-center justify-center flex top-1/2 right-2 md:right-2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="p-2 md:p-3 scale-125 rounded-full  focus:outline-none"
            >
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
