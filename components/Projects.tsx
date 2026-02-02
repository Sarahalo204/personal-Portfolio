import React, { useState } from 'react';
import { Section } from './Layout/Section';
import { projectsData } from '../data';
import { ProjectDetail } from './ProjectDetail';
import { ProjectItem } from '../types';
import { ProjectImage } from './ProjectImage';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const categories = ['All', 'AI', 'Software Development'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <Section id="projects" title="Featured Projects" subtitle="A collection of my work in AI, Software Development." bgColor="light">
      
      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === cat 
                ? 'bg-violet-600 text-white shadow-md shadow-violet-200' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full group"
          >
            <div className="h-48 bg-slate-100 relative overflow-hidden">
                <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    category={project.category} 
                    title={project.title}
                    className="group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm z-10">
                   <span className="px-6 py-2 bg-white/90 rounded-full text-slate-900 font-bold text-sm shadow-lg">
                      View Details
                   </span>
                </div>
                
                <div className="absolute bottom-4 left-4 pointer-events-none z-10">
                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-800 rounded-md shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-100 font-medium">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                   <span className="text-xs px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100 font-medium">
                     +{project.techStack.length - 3}
                   </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};