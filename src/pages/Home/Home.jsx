import { useEffect, useState } from 'react';
import FraudProtection from '../../components/Fraud/FraudProtection';
import Marquee from '../../components/Marquee/Marquee';
import PaymentGateway from '../../components/PaymentGateway/PaymentGateway';
import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';
import { assets } from '../../lib/assets';


function Home() {
    const [rotatedCards, setRotatedCards] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.fraud-card').forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardId = card.getAttribute('data-id');

                if (rect.top < window.innerHeight * 0.75 && !rotatedCards.has(cardId)) {
                    setRotatedCards((prev) => new Set([...prev, cardId])); // Ensure state updates correctly
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotatedCards]);


    return (
        <div className="relative w-full overflow-hidden">
            {/* Updated Hero Section using ::before */}
            <div className="relative min-h-screen flex items-center bg-white before:content-[''] before:absolute before:-left-48 before:top-1/2 before:-translate-y-1/2 before:w-[600px] before:h-[600px] before:bg-[#e9345b] before:rounded-full before:filter before:blur-[100px] before:opacity-20">
                <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="max-w-3xl text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-800">
                            Global<br />Payment Gateway<br />for Developing Markets
                        </h1>
                        <p className="text-2xl font-semibold text-gray-600">
                            Unlocking New Horizons For International<br />Growth
                        </p>
                        <button className="mt-8 border-2 border-[#e9345b] bg-transparent text-[#e9345b] px-10 py-3 rounded-full text-lg hover:bg-[#e9345b] hover:text-white transition-all duration-300">
                            Get Started
                        </button>
                    </div>

                    <div className="mt-8 md:mt-0 md:ml-10">
                        {/* Right side content (e.g., image or illustration) */}
                        <img src={assets.hero} alt="Hero illustration" className="w-full max-w-2xl" />
                    </div>
                </div>
            </div>


            {/* Feature Sections */}
            <FraudProtection />
            <Marquee />
            <PaymentGateway />
            <InsighfulData />
            <SubFeature />
        </div>
    );
}

export default Home;
