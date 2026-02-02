import React from 'react';
import { Section } from './Layout/Section';
import { skillsData } from '../data';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal"  bgColor="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-violet-100 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-1.5 bg-gradient-to-r from-violet-500 to-sky-400 rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700 hover:border-violet-100 transition-colors">
                  <CheckCircle2 size={16} className="text-violet-500" />
                  <span className="font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};