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
        { label: 'Technical Connector', path: '/technicalconnector' },
        { label: 'About us', path: '/about' },
    ];

    const othersSubItems = [
        { label: 'API Integration', path: '/apiintegration' },
        { label: 'Crypto Currency', path: '/cryptocurrency' },
        { label: 'Our vision', path: '/oruvision' },
    ];

    return (
        <nav className="bg-gradient-to-r from-[#193549] to-[#051622] w-full z-50 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
                <div className="flex items-center justify-between h-28">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-3 text-white text-2xl">
                            <img
                                src="src\\assets\\logo-CI6Py0Md.svg"
                                alt="GamingPE Logo"
                                className="h-35 w-60"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8 ">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-white hover:text-sky-400 transition-colors duration-200 text-[17px]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {/* Others Dropdown */}
                            <div className="relative group">
                                <button
                                    className="flex items-center text-white hover:text-sky-400 transition-colors duration-200 text-[17px]"
                                >
                                    Others
                                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-700 group-hover:rotate-180" />
                                </button>
                                {/* Dropdown Content */}
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#051622] ring-1 ring-black ring-opacity-5 
  transform opacity-0 invisible scale-95 -translate-y-full 
  group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 
  transition-all duration-700 ease-out origin-top 
  z-50"> {/* Add z-50 */}
                                    <div className="py-5 overflow-hidden">
                                        {othersSubItems.map((item, index) => (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                className="block px-4 py-2 text-base text-white hover:bg-[#00A6FB] hover:text-white
                                 transform -translate-y-full opacity-0
                                 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-700"
                                                style={{
                                                    transitionDelay: `${index * 150}ms`,
                                                    transitionProperty: 'all'
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Link to={"/newsletter"}>
                                <button className="border-2 border-[#00A6FB] bg-[#051622] text-white px-10 py-3 rounded-full text-lg cursor-pointer hover:bg-[#00A6FB] transition-colors duration-200">
                                    Get in touch
                                </button></Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                ""
                            ) : (
                                <Menu className="h-8 w-8" />
                            )}
                        </button>
                        <button
                            onClick={() => navigate("/gamingpe/newsletter")}
                            className="border-2 border-[#00A6FB] bg-[#051622] text-white px-5 py-2 rounded-full text-lg cursor-pointer hover:bg-[#00A6FB] transition-colors duration-200"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`z-50 md:hidden transition-all duration-700 ease-in-out 
              ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
              fixed left-0 top-0 h-full w-64 bg-[#051622]`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen && <X className="h-8 w-8" />}
                    </button>
                </div>

                <div className="px-4 pt-4 pb-5 space-y-2 bg-[#051622] shadow-lg">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-gray-300 hover:text-white block px-4 py-3 text-lg font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>

                    ))}
                    {/* Mobile Others Dropdown */}
                    <div className="px-4">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center w-full text-gray-300 hover:text-white py-3 text-lg font-medium"
                        >
                            Others
                            <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-700 ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-700 ease-in-out transform
                          ${isMenuOpen ? 'max-h-48 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-full'}`}>
                            {othersSubItems.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-gray-300 hover:text-white block py-2 text-lg transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>




                </div>
            </div>
        </nav>
    );
};

export default NavBar;