import React from 'react';
import { Section } from './Layout/Section';
import { volunteerData } from '../data';
import { HeartHandshake } from 'lucide-react';

export const Volunteering: React.FC = () => {
  return (
    <Section id="volunteering" title="Volunteering"  bgColor="white">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {volunteerData.map((item) => (
          <div key={item.id} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-violet-50 text-violet-600 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <HeartHandshake size={24} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-violet-600 transition-colors leading-tight">{item.role}</h4>
              <p className="text-slate-600 font-medium text-sm mb-3">{item.organization}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Period</span>
                <span className="text-sm text-slate-600 font-medium">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};