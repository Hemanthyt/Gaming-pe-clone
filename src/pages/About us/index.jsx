import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const AboutUs = () => {
  const logos = [
    assets.PT1,
    assets.PT2,
    assets.PT3,
    assets.Ether,
    assets.Bitcoin,
  ];

  return (
    <div className="bg-[#031521] text-white">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-10 px-4 text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          ABOUT US
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 font-semibold">
          Make Gaming Transactions Easy
        </p>
      </motion.div>

      {/* Principles Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12">
        {/* Left Content */}
        <div className="w-1/2 mx-20">
          <motion.h1
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight"
          >
            Gamingpe's <br /> Principles
          </motion.h1>
          <div className="flex flex-col gap-2 my-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Innovation
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Leading the Future of Digital Payments Our relentless pursuit of
                groundbreaking technology and advanced solutions ensures we stay
                ahead in the rapidly evolving world of e-commerce payments.
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=""
            >
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Accessibility
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Empowering Merchants and Consumers Globally We provide seamless,
                flexible payment options that are accessible to everyone,
                enabling merchants to reach new markets and consumers to enjoy
                smooth, secure transactions.
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.2 }}
              className=""
            >
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Expertise
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Delivering Unmatched Payment Strategies With our deep industry
                knowledge and commitment to excellence, we offer bespoke
                solutions that enhance the payment experience and protect
                merchants' revenue.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
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
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          {/* Background Shape */}
          <div className="absolute bottom-0 w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-b from-[#1d677d] to-[#b3a332] rounded-[48px]"></div>

          {/* Image */}
          <img
            src="https://gamingpe.io/assets/servicesImg-YfgI6RZx.webp"
            alt="Person Holding Phone"
            className="relative z-10 w-80 sm:w-96 object-cover"
          />
        </motion.div>
      </div>

      {/* Marquee Logos */}
      <div className="mx-6 lg:mx-12 my-12">
        <div className="w-full border-t-2 border-green-500 opacity-70"></div>
        <div className="overflow-hidden whitespace-nowrap my-8">
          <div className="flex animate-marquee items-center justify-between">
            {logos.map((logo, index) => (
              <div key={index} className="mx-4">
                <img src={logo} className="h-10 sm:h-12" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-green-400 opacity-70"></div>
      </div>

      {/* AI Payments Section */}
      <div className="px-6 lg:px-40 my-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
          Empowering Seamless Payments and Growth Through AI Innovation
        </h1>

        {[
          {
            title: "Harnessing the Power of AI for Seamless Payment Solutions",
            description:
              "At Gamingpe, we leverage the cutting-edge capabilities of AI to connect consumers with a diverse range of e-commerce merchants, catering to individual passions and preferences.",
          },
          {
            title: "Flexible, Interest-Free Payments and Personalized Controls",
            description:
              "Our commitment to innovation ensures that users enjoy flexible, interest-free payment options and personalized controls, empowering them to manage their finances effortlessly while pursuing their passions.",
          },
          {
            title: "Empowering Merchants for Enhanced Access and Growth",
            description:
              "By partnering with Gamingpe, merchants can expand their reach and offer more choices to consumers. This collaboration leads to increased sales, driven by a new generation of empowered customers who appreciate the seamless and secure payment experience we provide",
          },
        ].map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: index * 0.8 }}
            key={index}
            className="my-6"
          >
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
              {item.title}
            </h1>
            <p className="text-gray-300 text-md sm:text-lg mt-2 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Global Presence Section */}
      <div className="px-6 lg:px-40 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
            WE ARE ROUND THE WORLD
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            GamingPe is a global platform, connecting gamers from every corner
            of the world. No matter where you're located, our seamless services
            ensure you enjoy a top-notch gaming experience. With regional
            servers and localized support, GamingPe bridges the gap, bringing a
            unified and vibrant community together across continents.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { value: "20+", label: "Certified Experts" },
              { value: "1K+", label: "Successful Implementations" },
              { value: "100%", label: "Satisfied Users" },
              { value: "10+", label: "Industry Recognitions" },
            ].map((stat, index) => (
              <motion.div
                initial={{ rotateY: -180 }} // Start from 0° rotation
                whileInView={{ rotateY: 0 }} // Flip to 180° when in view
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                key={index}
                className="p-6 border border-gray-700 rounded-lg text-center hover:bg-gray-800 transition"
              >
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <video
            height="500"
            width="500"
            autoPlay
            loop
            muted
            className="w-64 sm:w-80 md:w-full rounded-full"
          >
            <source src={assets.Globe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
