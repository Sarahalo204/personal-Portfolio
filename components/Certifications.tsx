import React from 'react';
import { Section } from './Layout/Section';
import { certificationData } from '../data';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <Section id="courses" title="Courses & Certifications" >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationData.map((cert) => (
          <div key={cert.id} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-violet-50 text-violet-600 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-violet-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-violet-600 transition-colors leading-tight">{cert.name}</h4>
              <p className="text-slate-600 font-medium text-sm">{cert.issuer}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Issued</span>
                <span className="text-sm text-slate-600 font-medium">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};