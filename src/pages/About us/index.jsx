import { assets } from "../../assets/assets";
import Marquee from "../../components/Marquee/Marquee";

const AboutUs = () => {


  return (
    <div className="text-white">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl uppercase font-bold bg-gradient-to-r from-[#efeecd] to-[#cfe9f0] bg-clip-text text-transparent">
          ABOUT US
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 font-semibold">
          Make Gaming Transactions Easy
        </p>
      </div>

      {/* Principles Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12">
        {/* Left Content */}
        <div className="w-1/2 mx-20">
          <h1 className="text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight animate-slide-in-right">
            Gamingpe&apos;s <br /> Principles
          </h1>
          <div className="flex flex-col gap-2 my-4">
            <div className="animate-slide-in-right">
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Innovation
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Leading the Future of Digital Payments Our relentless pursuit of
                groundbreaking technology and advanced solutions ensures we stay
                ahead in the rapidly evolving world of e-commerce payments.
              </p>
            </div>
            <div className="animate-slide-in-right delay-200">
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Accessibility
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Empowering Merchants and Consumers Globally We provide seamless,
                flexible payment options that are accessible to everyone,
                enabling merchants to reach new markets and consumers to enjoy
                smooth, secure transactions.
              </p>
            </div>
            <div className="animate-slide-in-right delay-300">
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text leading-tight">
                Expertise
              </h1>
              <p className="text-gray-300 text-md mt-6 lg:max-w-lg leading-relaxed">
                Delivering Unmatched Payment Strategies With our deep industry
                knowledge and commitment to excellence, we offer bespoke
                solutions that enhance the payment experience and protect
                merchants&apos; revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center animate-float">
          {/* Background Shape */}
          <div className="absolute bottom-0 w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-b from-[#1d677d] to-[#b3a332] rounded-[48px]"></div>

          {/* Image */}
          <img
            src="https://gamingpe.io/assets/servicesImg-YfgI6RZx.webp"
            alt="Person Holding Phone"
            className="relative z-10 w-80 sm:w-96 object-cover"
          />
        </div>
      </div>

      {/* Marquee Logos */}
      <Marquee />

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
          <div
            key={index}
            className={`my-6 animate-slide-in-left delay-${index * 200}`}
          >
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
              {item.title}
            </h1>
            <p className="text-gray-300 text-md sm:text-lg mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Global Presence Section */}
      <div className="px-6 lg:px-40 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-bold uppercase bg-gradient-to-r from-[#e6f1ae] to-[#cedfe4] text-transparent bg-clip-text">
            WE ARE ROUND THE WORLD
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            GamingPe is a global platform, connecting gamers from every corner
            of the world. No matter where you&apos;re located, our seamless services
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
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-lg text-center hover:bg-gray-800 transition animate-flip delay-{index * 100}"
              >
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

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
