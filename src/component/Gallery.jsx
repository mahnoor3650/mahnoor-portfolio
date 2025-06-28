import React, { useState, useEffect } from "react";
import { RiCloseLine } from "@remixicon/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

const Gallery = ({ images, isOpen, onClose, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => 
          prev === 0 ? images.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => 
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 sm:p-6">
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {/* Close button - Mobile optimized */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 rounded-full bg-gray-800 bg-opacity-80 p-2 sm:p-3 text-white hover:bg-opacity-100 transition-all duration-200 border border-gray-600 min-w-[40px] min-h-[40px] flex items-center justify-center"
        >
          <RiCloseLine size={18} />
        </button>

        {/* Title - Responsive positioning */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-white max-w-[60%] sm:max-w-none">
          <h3 className="text-sm sm:text-lg font-semibold truncate">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {currentImageIndex + 1} of {images.length}
          </p>
        </div>

        {/* Image container - Responsive sizing */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className="max-h-[70vh] sm:max-h-[80vh] max-w-full object-contain rounded-lg"
          />

          {/* Navigation buttons - Touch-friendly on mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 bg-opacity-80 p-2 sm:p-3 text-white hover:bg-opacity-100 transition-all duration-200 border border-gray-600 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <RiArrowLeftSLine size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 bg-opacity-80 p-2 sm:p-3 text-white hover:bg-opacity-100 transition-all duration-200 border border-gray-600 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <RiArrowRightSLine size={20} className="sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail navigation - Responsive spacing */}
        {images.length > 1 && (
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 sm:space-x-3 max-w-full overflow-x-auto px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110"
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe hint */}
        {images.length > 1 && (
          <div className="absolute bottom-16 sm:hidden left-1/2 transform -translate-x-1/2 text-white text-xs text-center bg-black bg-opacity-50 px-3 py-1 rounded-full">
            Swipe to navigate
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery; 