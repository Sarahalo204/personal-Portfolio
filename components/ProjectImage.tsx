import React, { useState } from 'react';
import { Brain, Laptop } from 'lucide-react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  category: string;
  className?: string;
  title: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, category, className = "", title }) => {
  const [hasError, setHasError] = useState(false);

  // Check if we should show the placeholder
  // Logic: If src is undefined, empty, equal to "#", or if the image failed to load
  const shouldShowPlaceholder = !src || src === '' || src === '#' || hasError;

  if (shouldShowPlaceholder) {
    const isAI = category === 'AI';
    
    // Styling based on category
    // AI: Lavender background (violet-400 gives a nice vibrant lavender feel)
    // Software Development: Sky Blue background (sky-400)
    const bgClass = isAI ? 'bg-violet-400' : 'bg-sky-400';
    
    // Icons: Brain for AI, Laptop for Software Dev
    const Icon = isAI ? Brain : Laptop;
    
    // Get just the first letter of the project title
    const letter = title.charAt(0).toUpperCase();

    return (
      <div className={`flex items-center justify-center w-full h-full ${bgClass} ${className}`}>
        <div className="flex flex-col items-center gap-3 text-white animate-fadeIn">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-md border border-white/30 shadow-inner">
                <Icon size={40} strokeWidth={1.5} />
            </div>
             <span className="text-4xl font-bold tracking-widest drop-shadow-sm">{letter}</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full object-cover ${className}`}
      onError={() => {
        // Silently handle error to fallback to placeholder without polluting console
        setHasError(true);
      }} 
    />
  );
};