
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import TextCarousel from "../components/TextCarousel";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  // Animation effect when page loads
  useEffect(() => {
    setLoaded(true);
  }, []);
  const carouselTexts = ["Ask us anything about your products or orders.", "Want changes? Just say the prompt in the chat!", "Manage your inventory with simple commands.", "Track orders and analyze sales effortlessly.", "Customize your storefront with a single message."];
  return <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className={`w-full max-w-3xl flex flex-col items-center transition-all duration-1000 ease-out transform
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
      transitionDelay: "300ms"
    }}>
        {/* Logo and Title Container */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Logo />
            <div className="text-3xl md:text-4xl font-semibold px-2" style={{
            transitionDelay: "400ms",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease-out"
          }}>
              
            </div>
          </div>
          
          <div className="flex items-center" style={{
          transitionDelay: "500ms",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-out"
        }}>
            <div className="hidden md:block h-10 w-px bg-gray-200 mx-4"></div>
            <span className="text-xl md:text-2xl font-light text-gray-600">Ecommerce Manager</span>
          </div>
        </div>
        
        {/* Chat Button */}
        <Button 
          className="mt-4 mb-8 animate-fade-in" 
          style={{ transitionDelay: "600ms" }}
          asChild
        >
          <Link to="/chat">Start Chatting</Link>
        </Button>
        
        {/* Footer */}
        <div className="mt-8 text-sm text-gray-400 text-center" style={{
        transitionDelay: "900ms",
        opacity: loaded ? 0.8 : 0,
        transition: "opacity 1s ease-out"
      }}>Ask us anything about your products or orders. Want changes? Just say the prompt, it to the chat!</div>
      </div>
    </div>;
};
export default Index;
