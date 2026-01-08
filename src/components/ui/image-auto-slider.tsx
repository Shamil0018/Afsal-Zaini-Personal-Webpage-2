import React from 'react';
import img3 from '@/assets/image 3.png';
import img4 from '@/assets/image 4.png';
import img6 from '@/assets/image 6.png';
import img7 from '@/assets/image 7.png';
import img9 from '@/assets/image 9.png';
import img13 from '@/assets/image 13.png';
import img15 from '@/assets/image 15.png';
import img18 from '@/assets/image 18.png';
import img19 from '@/assets/image 19.png';
import img20 from '@/assets/image 20.png';
import img21 from '@/assets/image 21.png';

export const ImageAutoSlider = () => {
  // Images for the infinite scroll - using local assets
  const images = [
    img3, img4, img6, img7, img9, img13, img15, img18, img19, img20, img21
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 60s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
          z-index: 20;
          box-shadow: 0 25px 50px -12px rgba(194, 142, 78, 0.25);
        }
      `}</style>

      <div className="w-full relative overflow-hidden flex items-center justify-center py-12">
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-8 w-max px-4">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
