import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
  bgColor = 'white' 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 ${bgColor === 'light' ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-3 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full opacity-60"></span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};