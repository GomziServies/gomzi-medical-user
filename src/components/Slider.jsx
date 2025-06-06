import React, { useState, useEffect, useRef } from 'react';


const images = [
  '/assets/images/Slider-Images/demo.jpg',
  '/assets/images/Slider-Images/demo2.jpg',
  '/assets/images/Slider-Images/demo3.jpg'
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);
  const extendedImages = [...images, images[0]]; 

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex(prev => prev + 1);
      setIsTransitioning(true);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTransitionEnd = () => {
    if (index === images.length) {
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  return (
    <div
      className="slider-wrapper"
    >
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * (100 / extendedImages.length)}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          width: `${extendedImages.length * 100}%`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="slide-img"
            style={{ width: `${100 / extendedImages.length}%` }}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;