
import React from "react";

interface LogoProps {
  size?: 'small' | 'normal';
}

const Logo: React.FC<LogoProps> = ({ size = 'normal' }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <img 
        src="/lovable-uploads/ef4fe8fa-5295-42dc-8b99-0d361f223cfa.png" 
        alt="Shop Logo" 
        style={{
          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
        }} 
        className={`${size === 'small' ? 'h-6 md:h-10' : 'h-8 md:h-16'} object-contain animate-fade-in`} 
      />
    </div>
  );
};

export default Logo;
