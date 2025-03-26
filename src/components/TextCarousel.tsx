
import React, { useState, useEffect } from "react";

interface TextCarouselProps {
  texts: string[];
  interval?: number;
}

const TextCarousel: React.FC<TextCarouselProps> = ({ 
  texts, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for exit animation to complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Match the animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="relative w-full text-center carousel-container py-2 min-h-[60px]">
      {texts.map((text, index) => (
        <div 
          key={index}
          className={`carousel-text text-xl md:text-2xl font-light tracking-wide
            ${currentIndex === index ? "active" : ""}`}
        >
          <div className="text-reveal-container">
            <p 
              className={`text-reveal ${isAnimating && currentIndex === index ? "animate-text-hide" : ""}`}
              style={{ 
                animationDelay: "0.1s",
                opacity: currentIndex === index ? 1 : 0,
              }}
            >
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextCarousel;
