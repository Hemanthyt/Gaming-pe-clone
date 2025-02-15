import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const CryptoCurrency = () => {
  return (
    <div className="bg-[#031521] w-full">
      {/* Heading */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-10 px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          Cryptocurrency <br /> Payment Solutions
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-lg md:max-w-2xl my-6 md:my-10 font-semibold text-center">
          Empowering partners with seamless Debit, e-wallets, and crypto
          transactions for gaming worldwide.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 md:px-10 lg:px-20 my-10 space-y-10 lg:space-y-0">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          <motion.div
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className=""
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight text-center lg:text-left">
              Integrating Cryptocurrency Payments
            </h1>
            <p className="text-gray-200 text-md md:text-lg font-semibold mt-4 leading-relaxed text-center lg:text-left">
              Enable secure, global crypto payments with Gamingpe.
            </p>
          </motion.div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-200 text-md md:text-lg font-semibold leading-relaxed">
              Cryptocurrency payment integration with Gamingpe is becoming
              increasingly popular as businesses seek to offer diverse payment
              options and cater to tech-savvy customers. By integrating
              cryptocurrency payments, companies can facilitate transactions
              using digital currencies like Bitcoin, Ethereum, USDT, and others,
              without the need for traditional intermediaries such as banks.
            </p>
            <p className="text-gray-200 text-md md:text-lg font-semibold leading-relaxed">
              This integration offers several benefits, including faster
              transaction processing, lower fees, and enhanced security through
              blockchain technology. Additionally, it opens up global markets,
              allowing businesses to accept payments from customers worldwide
              without worrying about currency conversion or international
              transaction fees.
            </p>
            <p className="text-gray-200 text-md md:text-lg font-semibold leading-relaxed">
              To implement cryptocurrency payments, businesses typically use
              specialized payment gateways that support digital currencies.
              These gateways provide the necessary infrastructure to authorize
              and process transactions, ensuring compliance with regulatory
              requirements and offering features like fraud prevention and
              dispute resolution. Overall, integrating cryptocurrency payments
              can provide businesses with a competitive edge, attract a broader
              customer base, and streamline the payment process, making it more
              efficient and cost-effective.
            </p>
          </div>
        </div>

        {/* Right Section - Image with Decorations */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
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
              src={assets.CryptoCoin}
              alt="Person Holding Phone"
              className="w-64 md:w-80 lg:w-full max-w-md relative z-10 object-cover"
            />
          </motion.div>
          {/* Curved Paths */}
          {/* <svg
            className="absolute w-3/4 h-3/4 hidden md:block"
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
          <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrency;
