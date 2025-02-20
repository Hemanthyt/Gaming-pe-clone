import { assets } from "../../lib/assets";

const Marquee = () => {
  const logos = [
    assets.PT1,
    assets.PT2,
    assets.PT3,
    assets.Ether,
    assets.Bitcoin,
  ];

  return (
    <div>
      <div className="w-full overflow-hidden relative bg-gray-700">
        <div className="w-full h-[1px] bg-blue-400/50 mb-2"></div>
        <div className="flex gap-x-32 animate-marquee">
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="size-32 "
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-blue-400/50 mt-2"></div>
      </div>
    </div>
  );
};

export default Marquee;