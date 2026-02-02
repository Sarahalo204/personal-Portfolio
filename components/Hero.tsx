import React from 'react';
import { profileData } from '../data';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="summary" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-sky-50 via-white to-violet-50 overflow-hidden scroll-mt-24">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-violet-100 blur-3xl opacity-50 mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-20 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-sky-100 blur-3xl opacity-50 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold tracking-wide">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-500">{profileData.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-slate-600">
                {profileData.title}
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {profileData.about}
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
                <Github size={24} />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${profileData.email}`} className="text-slate-400 hover:text-violet-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-sky-400 rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col justify-center items-center text-center">
                 {/* Placeholder for a profile image or illustration */}
                 <div className="w-32 h-32 bg-violet-100 rounded-full flex items-center justify-center mb-6 text-violet-500">
                    <Terminal size={64} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-2">Tech Stack Focus</h3>
                 <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Machine Learning', 'Cybersecurity', 'Python', 'React', 'Cloud'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-md border border-slate-100">
                            {tag}
                        </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};