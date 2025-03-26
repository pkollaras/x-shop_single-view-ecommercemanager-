
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import TextCarousel from "../components/TextCarousel";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  // Animation effect when page loads
  useEffect(() => {
    setLoaded(true);
  }, []);

  const carouselTexts = [
    "Ask us anything about your products or orders.",
    "Want changes? Just say the prompt in the chat!",
    "Manage your inventory with simple commands.",
    "Track orders and analyze sales effortlessly.",
    "Customize your storefront with a single message."
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div 
        className={`w-full max-w-3xl flex flex-col items-center transition-all duration-1000 ease-out transform
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "300ms" }}
      >
        {/* Logo and Title Container */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Logo />
            <div 
              className="text-3xl md:text-4xl font-semibold px-2"
              style={{ 
                transitionDelay: "400ms",
                opacity: loaded ? 1 : 0,
                transition: "opacity 1s ease-out"
              }}
            >
              <span className="text-shop-dark">shop</span>
            </div>
          </div>
          
          <div 
            className="flex items-center"
            style={{ 
              transitionDelay: "500ms",
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s ease-out"
            }}
          >
            <div className="hidden md:block h-10 w-px bg-gray-200 mx-4"></div>
            <span className="text-xl md:text-2xl font-light text-gray-600">Ecommerce Manager</span>
          </div>
        </div>
        
        {/* Card with Carousel */}
        <div 
          className="w-full glass bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-gray-100"
          style={{ 
            transitionDelay: "600ms",
            opacity: loaded ? 1 : 0,
            transform: `scale(${loaded ? 1 : 0.95})`,
            transition: "opacity 1s ease-out, transform 1s ease-out"
          }}
        >
          <TextCarousel texts={carouselTexts} />
          
          {/* Chat Button */}
          <div 
            className="mt-12 flex justify-center"
            style={{ 
              transitionDelay: "800ms",
              opacity: loaded ? 1 : 0,
              transform: `translateY(${loaded ? 0 : '20px'})`,
              transition: "opacity 1s ease-out, transform 1s ease-out"
            }}
          >
            <button className="px-8 py-3 bg-shop-dark text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 active:shadow-md">
              Start Chatting
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div 
          className="mt-8 text-sm text-gray-400 text-center"
          style={{ 
            transitionDelay: "900ms",
            opacity: loaded ? 0.8 : 0,
            transition: "opacity 1s ease-out"
          }}
        >
          Revolutionizing ecommerce management with conversational AI
        </div>
      </div>
    </div>
  );
};

export default Index;
