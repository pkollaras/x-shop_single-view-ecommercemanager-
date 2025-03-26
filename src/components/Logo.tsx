
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <img 
        src="/lovable-uploads/ef4fe8fa-5295-42dc-8b99-0d361f223cfa.png" 
        alt="Shop Logo" 
        className="h-12 md:h-16 object-contain animate-fade-in" 
        style={{ 
          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
        }}
      />
    </div>
  );
};

export default Logo;
