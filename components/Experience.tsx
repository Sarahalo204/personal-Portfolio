import React from 'react';
import { Section } from './Layout/Section';
import { experienceData } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" bgColor="light">
      <div className="relative container mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 mt-6 z-10"></div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`relative bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
                     {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-b border-l border-slate-100 transform rotate-45 ${isLeft ? '-right-2 border-r-0 border-t-0' : '-left-2 border-b-0 border-l-0 border-t border-r'}`}></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{item.role}</h3>
                        <div className="flex items-center gap-2 text-violet-600 font-medium mt-1">
                          <Briefcase size={16} />
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 mt-2 sm:mt-0 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-4 ${
                      item.type === 'Professional' ? 'bg-sky-100 text-sky-700' : 
                      item.type === 'Co-op' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.type}
                    </span>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};