import React from 'react';
import { Section } from './Layout/Section';
import { profileData } from '../data';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6"> Contact Information </h2>
        <p className="text-slate-600 mb-10 max-w-lg mx-auto">
       
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-colors group w-full sm:w-auto border border-slate-100">
                <Mail className="text-slate-400 group-hover:text-violet-500" />
                <span className="font-medium">{profileData.email}</span>
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl text-slate-600 w-full sm:w-auto border border-slate-100 cursor-default">
                <MapPin className="text-slate-400" />
                <span className="font-medium">{profileData.location}</span>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
            <a href={profileData.github} className="text-slate-400 hover:text-slate-900 transition-colors hover:scale-110 transform duration-200">
                <Github size={28} />
            </a>
            <a href={profileData.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={28} />
            </a>
        </div>

        <div className="text-sm text-slate-400 border-t border-slate-100 pt-8">
            <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
