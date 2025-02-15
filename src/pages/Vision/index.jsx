import React from "react";
import { assets } from "../../assets/assets";
import Testimonials from "./components/Testinomial";
import { motion } from "motion/react";

const Vision = () => {
  return (
    <div className="bg-[#031521]">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-10 px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          OUR VISION
        </h1>

        <p className="text-md md:text-lg text-gray-300 lg:max-w-2xl my-6 font-semibold">
          Bridging technology, intelligence, and payments for a seamless client
          journey.
        </p>
      </motion.div>

      {/* Vision Content */}
      <div className="flex h-screen flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 my-10 space-y-10 lg:space-y-0">
        {/* Left Section - Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
            A Team of Innovators
          </h1>

          <div className="flex flex-col gap-4 my-6">
            <p className="text-gray-200 text-md md:text-lg font-semibold leading-relaxed">
              The founders realized that in order to be successful in existing
              as well as emerging e-commerce markets an excellent client journey
              was paramount. Gamingpe was designed from the ground up to offer
              market changing innovative features and technology. Gamingpe
              created a team of innovators, technologists and payments
              enthusiasts who were focused on their mission to bridge the gaps
              between technology, intelligence and payments.
            </p>
            <p className="text-gray-200 text-md md:text-lg font-semibold leading-relaxed">
              Gamingpe's mission is ensuring our merchants along with their
              customers receive the best seamless customer experience that
              maximizes sales, profits & client retention. Our vision is to
              become a global payment connector Brand known for its diversity of
              localized payment options within emerging markets countries.
            </p>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* <div className="md:block hidden absolute w-92 h-92 bg-gradient-to-b from-yellow-500 to-blue-400 rounded-full top-12 left-1/2 transform -translate-x-1/2" /> */}
          {/* <motion.div
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
          > */}
          <img
            src={assets.vision}
            alt="Person Holding Phone"
            className="relative z-10 w-full max-w-xs md:max-w-md lg:max-w-lg object-cover"
          />
          {/* </motion.div> */}
        </div>
      </div>

      {/* Overview Section */}
      <div className="min-h-screen bg-[#0A2631] relative overflow-hidden text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <img
            src={assets.map}
            alt="World Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, y: 150 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto py-16"
        >
          <h1 className="text-4xl md:text-6xl mb-10 uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
            OUR OVERVIEW
          </h1>

          <div className="space-y-4 text-md md:text-lg text-center md:text-left font-semibold text-gray-200">
            <p>
              GamingPE was founded in 2015 by industry veterans with deep
              expertise in payments technology and cybersecurity. Born from a
              vision to revolutionize global payments, GamingPE is not just
              about transactions—it's about transforming experiences.
            </p>
            <p>
              We are pioneering the future of payments with our cutting-edge
              alternative global payment connector, setting new benchmarks in
              market-leading payment technology. Harnessing the power of AI and
              leveraging the latest innovations, we ensure seamless and secure
              transactions across the globe.
            </p>
            <p>
              At GamingPE, we are committed to pushing the boundaries of what's
              possible. Our solutions are designed to adapt and evolve, meeting
              the dynamic needs of the gaming industry and beyond. We empower
              businesses to thrive in an ever-changing digital landscape,
              providing them with the tools and technologies to stay ahead. Join
              us on our journey as we continue to innovate and redefine the
              world of payments, one transaction at a time
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experienced Leadership Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="mt-10 px-6 text-center"
      >
        <h2 className="text-[#C5D3BC] text-3xl md:text-5xl font-bold mb-6">
          Experienced Leadership
        </h2>
        <p className="text-gray-200 text-md md:text-lg max-w-4xl mx-auto">
          Connect with Gamingpe for payment solutions, career opportunities, or
          inquiries, leveraging AI-driven innovation in fintech.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="py-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default Vision;
