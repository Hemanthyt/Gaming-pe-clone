import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Features', path: '/features' },
        { label: 'Technical Connector', path: '/technical-connector' },
        { label: 'About us', path: '/about' },
    ];

    const othersSubItems = [
        { label: 'API Integration', path: '/api-integration' },
        { label: 'Crypto Currency', path: '/cryptocurrency' },
        { label: 'Our vision', path: '/our-vision' },
    ];

    return (
        <nav className="bg-gradient-to-r from-[#0f151c] to-[#051622] w-full fixed top-0 z-50 font-poppins shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                src="/assets/logo-CI6Py0Md.svg"
                                alt="GamingPE Logo"
                                className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain transition-all duration-200"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex md:items-center md:space-x-4 lg:space-x-6">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-white hover:text-sky-400 text-sm transition-colors duration-200 md:text-base lg:text-lg"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                            {/* Others Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-white hover:text-sky-400 transition-colors duration-200 text-base lg:text-lg">
                                    Others
                                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-xl bg-[#051622] ring-1 ring-black ring-opacity-5 
                                    transform opacity-0 invisible scale-95 
                                    group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                                    transition-all duration-200 ease-out origin-top-left z-50 p-2">
                                    <div className="py-2">
                                        {othersSubItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm rounded-md lg:text-base text-white hover:bg-[#00A6FB] hover:text-white transition-colors duration-150"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <Link to="/newsletter">
                                <button className="border-2 border-[#00A6FB] bg-[#051622] text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-[#00A6FB] transition-all duration-200 transform hover:scale-105">
                                    Get in touch
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button and CTA */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <button
                            onClick={() => navigate("/newsletter")}
                            className="border-2 border-[#00A6FB] bg-[#051622] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#00A6FB] transition-all duration-200"
                        >
                            Get in touch
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu}>
                <div 
                    className={`fixed right-0 top-0 h-full w-64 bg-[#051622] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col space-y-1 px-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-gray-300 hover:text-white px-4 py-2 text-base font-medium transition-colors duration-200"
                                    onClick={toggleMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                            {/* Mobile Others Items */}
                            <div className="px-4 py-2">
                                <p className="text-gray-300 font-medium mb-2">Others</p>
                                {othersSubItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="block text-gray-400 hover:text-white py-2 pl-4 text-sm transition-colors duration-200"
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;