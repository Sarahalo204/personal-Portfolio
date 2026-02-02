import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { ArrowLeft, Github, ExternalLink, Tag } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Lock body scroll when component is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto animate-fadeIn">
      <div className="min-h-screen">
        {/* Navigation Bar for Modal */}
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-slate-600 hover:text-violet-600 font-medium transition-colors"
            >
              <div className="p-2 bg-slate-50 rounded-full group-hover:bg-violet-50 transition-colors">
                <ArrowLeft size={20} />
              </div>
              Back to Portfolio
            </button>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold tracking-wide ${
                  project.category === 'AI' 
                  ? 'bg-violet-100 text-violet-700' 
                  : project.category === 'Software Development' 
                    ? 'bg-sky-100 text-sky-700'
                    : 'bg-slate-200 text-slate-700'
              }`}>
                <Tag size={14} />
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Visuals Placeholder */}
          <div className="w-full aspect-video bg-slate-200 rounded-2xl overflow-hidden mb-12 shadow-inner border border-slate-300">
             <ProjectImage 
                src={project.image} 
                alt={project.title} 
                category={project.category} 
                title={project.title}
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h3>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.detailedDescription || project.description}
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {/* Mock features if not provided in data */}
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                    <span>Designed for scalability and performance.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                    <span>User-centric interface with intuitive navigation.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0"></span>
                    <span>Integration with modern APIs and data services.</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
               {/* Action Buttons */}
               <div className="flex flex-col gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-medium shadow-lg shadow-slate-200"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors font-medium shadow-lg shadow-violet-200"
                  >
                    <ExternalLink size={20} />
                    View Live Demo
                  </a>
                )}
                {!project.github && !project.link && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-slate-500 text-sm">
                        Links currently unavailable.
                    </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};