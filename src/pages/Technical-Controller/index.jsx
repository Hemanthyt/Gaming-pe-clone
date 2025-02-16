/* eslint-disable react/jsx-key */
import React from "react";
import TcCard from "./Components/TC-Card";
import { TCCardData } from "../../data";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const TechnicalController = () => {
  const logos = [assets.Tc1, assets.Tc2, assets.Tc3, assets.Tc4, assets.Tc5];
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <div className="bg-[#031521] px-6">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          Technical Connector
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-semibold mt-3">
          Empowering seamless, global payment solutions with AI-driven
          innovation.
        </p>
      </motion.div>

      {/* Connector Technology Services */}
      <div className="flex h-screen flex-col md:flex-row items-center justify-center bg-[#031521] px-6 md:px-12 lg:px-24 space-y-10 md:space-y-0 md:space-x-10">
        {/* Left Section - Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
            CONNECTOR <br /> TECHNOLOGY <br /> SERVICES
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
            Welcome to Connector Technology Services, your trusted partner in
            payment solutions. We provide seamless and secure transaction
            processing to enhance business operations. Experience reliable
            service tailored to meet your specific needs.
          </p>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          animate={{
            y: [0, -10, 0], // Move up and down
          }}
          transition={{
            duration: 1, // Time for one cycle
            repeat: Infinity, // Infinite loop
            repeatType: "loop", // Loops continuously
            ease: "easeInOut", // Smooth transition
          }}
          className="relative flex justify-center w-full md:w-1/2"
        >
          {/* Background Shape */}
          <div className="absolute bottom-0 right-24  w-60 h-80 bg-gradient-to-b from-[#1d677d] to-[#b3a332] rounded-[48px]"></div>

          {/* Image */}
          <motion.img
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            src="https://gamingpe.io/assets/connector_img-BqgLmEVE.webp"
            alt="Person Holding Phone"
            className="relative z-10 w-[50%] lg:w-[100%]  left-64 object-cover"
          />

          <svg
            width="100%"
            height="500"
            viewBox="0 0 500 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 15 1 Q 10 200,300 60 T 350 350"
              stroke="url(#grad1)"
              strokeWidth="4"
              fill="transparent"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "yellow", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "blue", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
          {/* <div className="absolute top-[35%] left-[2%] w-4 h-4 bg-white rounded-full opacity-80"></div>
          <div className="absolute bottom-[35%] right-[10%] w-5 h-5 bg-white rounded-full opacity-80"></div> */}
        </motion.div>
      </div>

      {/* Marquee of Logos */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        className="mt-10"
      >
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
        <div className="overflow-hidden whitespace-nowrap py-6">
          <div className="flex animate-marquee  items-center justify-between space-x-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={logo}
                  className="w-16 md:w-20"
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col items-center space-y-10  py-10">
        {TCCardData.map((item, index) => (
          <TcCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalController;
