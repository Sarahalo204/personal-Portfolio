import React from 'react';
import { Section } from './Layout/Section';
import { educationData } from '../data';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" bgColor='white'>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-6 md:items-start hover:shadow-md transition-shadow">
              
              <div className="hidden md:flex flex-col items-center justify-center p-4 bg-sky-50 rounded-xl text-sky-600 min-w-[100px]">
                <GraduationCap size={32} />
                <span className="text-xs font-bold mt-2">{edu.year}</span>
              </div>

              <div className="flex-1 relative z-10">
                  <div className="md:hidden flex items-center gap-3 mb-4">
                     <div className="p-2 bg-sky-50 rounded-lg text-sky-600">
                        <GraduationCap size={20} />
                     </div>
                     <span className="text-sm font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                      {edu.year}
                     </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{edu.degree}</h4>
                  <p className="text-lg text-slate-600 font-medium mb-6">{edu.institution}</p>
                  
                  {edu.achievements && (
                  <div>
                    <h5 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Achievements</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {edu.achievements.map((ach, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{ach}</span>
                        </li>
                        ))}
                    </ul>
                  </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};