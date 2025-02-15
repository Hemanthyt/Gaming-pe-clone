import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const ApiIntegration = () => {
  return (
    <div className="bg-[#031521] px-6 md:px-12 lg:px-20 py-10">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          Secure Payment <br /> Solutions
        </h1>

        <p className="text-sm sm:text-lg text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl my-6 md:my-10 font-semibold">
          Empowering partners with seamless Debit, e-wallets, and crypto
          transactions for gaming worldwide.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left Section - Image with Decorations */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Planet */}
          <div className="absolute md:block hidden w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-gradient-to-b from-blue-500 to-transparent rounded-full top-1/3 left-1/2 transform -translate-x-1/2" />

          {/* Main Image */}
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
            className=""
          >
            <img
              src={assets.HandMobile} // Replace with actual image path
              alt="Person Holding Phone"
              className="relative z-20 md:h-[500px] h-[300px] object-cover"
            />
          </motion.div>

          {/* Curved Paths */}
          {/* <svg
            className="absolute w-3/4 h-3/4"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,250 Q250,50 250,150 T400,300"
              stroke="#FACC15"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M10,100 Q250,250 100,300"
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg> */}

          {/* Spark Elements */}
          <div className="absolute top-1/4 left-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow-lg animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full shadow-lg animate-pulse" />
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className=""
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
              Just One API Integration
            </h1>
            <p className="text-gray-200 text-sm sm:text-md md:text-lg font-semibold mt-4 sm:mt-6 leading-relaxed">
              Streamline Your Payment Integration with an API
            </p>
          </motion.div>
          <div className="flex flex-col gap-3 sm:gap-4 my-4">
            <p className="text-gray-200 text-md sm:text-lg font-semibold leading-relaxed">
              In today's interconnected economy, businesses must often cater to
              various local payment to meet diverse customer needs. However,
              integrating multiple payment gateways for different regions can be
              complicated and-consuming. This is where a single API integration
              proves beneficial.
            </p>
            <p className="text-gray-200 text-md sm:text-lg font-semibold leading-relaxed">
              With Just One API Integration, businesses can effortlessly connect
              with multiple local payment providers across emerging markets.
              This cohesive approach eliminates the hassle of managing several
              integrations, reducing both technical overhead and operational
              complexities related to different payment systems.
            </p>
            <p className="text-gray-200 text-md sm:text-lg font-semibold leading-relaxed">
              By utilizing an easy-integrate REST API, companies can access a
              variety of popular local payment options, ensuring they align with
              regional preferences and boost customer satisfaction. This not
              only speeds up the integration process but also simplifies ongoing
              maintenance, as all updates are handled through the central API.
            </p>
            <p className="text-gray-200 text-md sm:text-lg font-semibold leading-relaxed">
              Additionally, Just One API Integration offers a scalable solution
              that can evolve with the business, allowing for the addition of
              new payment methods without extensive reengineering. This
              streamlined integration ultimately helps businesses broaden their
              reach, enhance payment processes, and create a seamless payment
              experience for customers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
