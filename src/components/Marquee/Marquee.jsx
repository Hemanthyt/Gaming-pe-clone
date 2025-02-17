import { assets } from "../../assets/assets";

const Marquee = () => {
    const logos = [
        assets.PT1,
        assets.PT2,
        assets.PT3,
        assets.Ether,
        assets.Bitcoin,
      ];

    return (
        <div >
            <div className="w-full   overflow-hidden relative">
                <div className="w-full h-[1px] bg-green-400/50 mb-2"></div>
                <div
                    className="flex gap-x-32 max-w-md animate-marquee"

                >
                    {[...logos, ...logos].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="size-32 rounded-lg shadow-md"
                        />
                    ))}
                </div>
                <div className="w-full h-[1px] bg-green-400/50 mb-2"></div>
            </div>
        </div>
    )
}

export default Marquee