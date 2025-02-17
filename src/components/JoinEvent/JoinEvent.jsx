import { useState } from 'react';

function JoinEvent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gradient-to-b from-[#0C2237] via-[#081c2d] to-[#051622] flex flex-col items-center px-4 py-12">
            {/* Logo Section */}
            <div className="mb-8">
                <img
                    src="src\\assets\\logo2-BByECSNC.svg"
                    alt="GamingPE Logo"
                    className="h-24 w-auto"
                />
            </div>

            {/* Main Content Container */}
            <div className="w-full max-w-4xl bg-gradient-to-br from-[#0C2237]/95 to-[#051622]/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-500/10">
                <h2 className="text-6xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                    Join Our Event
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-blue-400 text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-blue-400 text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-blue-400 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-blue-400 text-sm font-medium">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-blue-400 text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-blue-400 text-sm font-medium">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Brief description"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1c2f]/50 border border-blue-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white font-bold rounded-lg 
                                     transform hover:scale-105 hover:shadow-lg hover:shadow-[#4CAF50]/20 
                                     active:scale-95 transition-all duration-300 uppercase tracking-wider"
                        >
                            Join Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default JoinEvent;
