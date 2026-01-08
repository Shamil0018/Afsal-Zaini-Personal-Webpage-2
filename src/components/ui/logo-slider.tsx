import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '@/assets/logo 1.png';
import logo2 from '@/assets/logo 2.png';
import logo3 from '@/assets/logo 3.png';
import logo4 from '@/assets/logo 4.png';
import logo5 from '@/assets/logo 5.png';
import logo6 from '@/assets/logo 6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const LogoSlider = () => {
    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-8 relative">
            {/* Top and Bottom Fades */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <style>{`
                @keyframes logo-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                .logo-infinite-scroll {
                    animation: logo-scroll 40s linear infinite;
                    display: flex;
                    width: max-content;
                }

                .logo-scroll-container {
                    mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    );
                    -webkit-mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    );
                }
            `}</style>

            <div className="logo-scroll-container">
                <div className="logo-infinite-scroll flex items-center gap-16 md:gap-24 lg:gap-32 px-12">
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-32 md:w-40 lg:w-48 h-20 flex items-center justify-center opacity-100 transition-all duration-700 cursor-pointer group"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${(index % logos.length) + 1}`}
                                className="max-w-full max-h-full object-contain filter group-hover:drop-shadow-[0_0_20px_rgba(194,142,78,0.3)] transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
    );
};
