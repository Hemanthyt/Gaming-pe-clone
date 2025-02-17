import { motion } from "framer-motion";

const SubFeature = () => {
    const images = [
        "src\\assets\\paymentmethods2-CH6A_cmo.svg",
        "src\\assets\\download.svg",
        "src\\assets\\paymentmethods3-BG-ta1Ms.svg",
        "src\\assets\\paymentmethods4-DUdOYnni.svg",
        "src\\assets\\paymentmethods5-DHDmbJFk.svg",
    ];

    return (
        <section className="relative bg-gradient-to-b pb-4 from-[#051622] via-[#081c2d] to-[#0C2237] text-white">
            {/* Hero Banner */}
            <div className="relative h-[500px] overflow-hidden">
                <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="src\\assets\\aboutBanner-D1jHUpAf.png" 
                    className="w-full h-full object-cover opacity-40"
                    alt="Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#051622]/50 via-[#081c2d]/80 to-[#0C2237]" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative -mt-96">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#0C2237]/95 to-[#051622]/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-blue-500/10"
                >
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Content Column */}
                        <div className="space-y-8">
                            <motion.h2 
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold"
                            >
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                                    One API
                                </span>
                                <br />
                                <span className="text-white">Easy Integration</span>
                            </motion.h2>
                            <div className="space-y-6 text-lg">
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-gray-200 leading-relaxed"
                                >
                                    Connect your business to multiple payment providers with a single REST API. No more complex onboarding processes or dealing with various payment standards.
                                </motion.p>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-gray-300 leading-relaxed"
                                >
                                    Add new payment methods effortlessly with centralized updates and maintenance, ensuring a seamless global payment experience.
                                </motion.p>
                            </div>
                        </div>

                        {/* Payment Methods Display */}
                        <div className="space-y-10 overflow-hidden">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-[#0a1c2f] to-[#051622] p-8 rounded-2xl shadow-lg border border-blue-500/10"
                            >
                                {/* Payment Methods Slider */}
                                <div className="overflow-hidden rounded-xl bg-[#040d14]/50 p-6">
                                    <div className="flex w-max">
                                        {[0, 1].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="flex space-x-8"
                                                initial={{ x: "0%" }}
                                                animate={{ x: "-100%" }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 20,
                                                    ease: "linear",
                                                }}
                                            >
                                                {images.map((src, index) => (
                                                    <motion.img 
                                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                        key={index} 
                                                        src={src} 
                                                        alt={`Payment Method ${index + 1}`} 
                                                        className="w-24 h-24 rounded-xl shadow-lg"
                                                    />
                                                ))}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-8 flex items-center justify-between border-t border-blue-500/10 pt-8">
                                    <motion.h3 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.8, type: "spring" }}
                                        className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                                    >
                                        100+
                                    </motion.h3>
                                    <p className="text-2xl text-gray-200 font-medium">
                                        Global Payment Providers
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubFeature;