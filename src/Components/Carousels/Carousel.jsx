import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((previousIndex) => 
      previousIndex === images.length - 1 ? 0 : previousIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((previousIndex) => 
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  };

  return (
    <div className="flex flex-col relative font-inter w-full">
      <div className="relative w-full group overflow-hidden rounded-3xl shadow-2xl border border-gray-300">
        <div className="flex transition-transform ease-in-out duration-500" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
          
        {images.map((image, index) => (
          <img
          key={index || image.id}
          src={image.img}
          alt={image.title}

          className="w-full h-auto object-cover shrink-0"
          />
        ))}
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full flex top-0 justify-between items-center px-4 md:px-8 pointer-events-none">
        <button onClick={prevSlide}>
          <FiChevronLeft className=" h-12 w-12 md:h-16 md:w-16 pointer-events-auto hover:scale-110 hover:bg-highlightedHover transition-all duration-300 bg-highlightedText text-white rounded-full shadow-2xl"/>
        </button>
        <button onClick={nextSlide}>
          <FiChevronRight className="h-12 w-12 md:h-16 md:w-16 pointer-events-auto hover:scale-110 hover:bg-highlightedHover transition-all duration-300 bg-highlightedText text-white rounded-full shadow-2xl"/>
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <p className="text-3xl font-medium text-secondaryText">{images[currentIndex].title}</p>
      </div>
    </div>
  );
}
