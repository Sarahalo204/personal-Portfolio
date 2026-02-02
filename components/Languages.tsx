import React from 'react';
import { Section } from './Layout/Section';
import { languagesData } from '../data';
import { Languages as LangIcon } from 'lucide-react';

export const Languages: React.FC = () => {
  return (
    <Section id="languages" bgColor="white" className="py-12">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="p-4 bg-sky-50 rounded-full text-sky-600 mb-4">
            <LangIcon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Languages</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {languagesData.map((lang) => (
            <div key={lang.language} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all">
                <h4 className="font-bold text-xl text-slate-800 mb-1">{lang.language}</h4>
                <p className="text-sm text-slate-500 mb-4 font-medium">{lang.proficiency}</p>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-sky-400 to-violet-500 h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${lang.level}%` }}
                    ></div>
                </div>
            </div>
        ))}
      </div>
    </Section>
  );
};