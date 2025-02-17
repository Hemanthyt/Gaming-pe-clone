import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Lock, UserCheck, Smartphone } from 'lucide-react';

const PaymentGateway = () => {
    const cards = [
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
        "/assets/in-visa-platinum-card-498x280.webp",
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 1000); // Change every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#051622] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8">
                {/* Left Section with Phone and Card */}
                <div className="relative flex justify-center items-center overflow-hidden w-full lg:w-1/2">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-xl"></div>
                    </div>

                    <motion.div
                        className="relative flex flex-col items-center"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <img
                            src="/assets/processImg-CNmjTZZY.webp"
                            alt="Phone"
                            className="relative z-10 w-[280px] sm:w-[350px] lg:w-[450px] h-auto drop-shadow-2xl"
                        />
                        <motion.img
                            key={currentCardIndex}
                            src={cards[currentCardIndex]}
                            alt="Card"
                            className="absolute bottom-[15%] left-[60%] translate-x-[-50%] w-48 sm:w-56 lg:w-64 shadow-2xl z-20 rounded-xl"
                            animate={{ 
                                rotateY: [0, 180, 360],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 3, 
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>

                {/* Right Section with Content */}
                <div className="text-white lg:w-1/2 space-y-8 px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl   uppercase font-bold bg-gradient-to-r from-[#4f94c4] via-[#7eb9e9] to-[#4f94c4] bg-clip-text text-transparent animate-pulse">
                            SIMPLE PAYMENT <br /> GATEWAY PROCESS
                        </h2>
                        <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
                            GamingPe offers a seamless payment gateway with straightforward steps. Users can easily select their preferred payment method, enter details securely, and confirm their purchase. The process is quick, with minimal clicks, ensuring an effortless transaction experience while maintaining top-notch security throughout.
                        </p>
                    </motion.div>

                    <div className="space-y-6 sm:space-y-8">
                        {[
                            { title: "Create Account", desc: "Effortlessly set up your GamingPe account with a simple sign-up process, ready to embark on your gaming journey in minutes.", icon: Lock },
                            { title: "User Configuration", desc: "Customize your profile and preferences to enhance your gaming experience, ensuring everything is tailored to your needs.", icon: Smartphone },
                            { title: "Enjoy Full Access", desc: "Unlock all features and benefits of GamingPe, diving into a seamless and immersive gaming world without interruptions.", icon: UserCheck }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl shadow-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-500 group-hover:from-blue-500 group-hover:to-sky-500 transition-all duration-500">
                                    <motion.div
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ repeat: Infinity, duration: 3 + index, ease: "easeInOut" }}
                                    >
                                        <item.icon className="w-8 h-8 text-white/90"></item.icon>
                                    </motion.div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white/90 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;
