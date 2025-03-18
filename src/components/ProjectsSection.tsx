
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, category, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group h-full">
      <div className="bg-black/40 glass rounded-xl overflow-hidden h-full border border-pink/20 group-hover:border-pink/50 transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <div className={`w-full h-full bg-gradient-to-br ${
            category === 'Mobile App' ? 'from-pink/30 to-purple/30' : 
            category === 'Web Design' ? 'from-purple/30 to-neon-blue/30' : 
            category === 'Web Application' ? 'from-neon-blue/30 to-neon-pink/30' : 
            'from-neon-pink/30 to-pink/30'
          } group-hover:scale-105 transition-transform duration-500`}>
            <div className="w-full h-full flex items-center justify-center text-3xl font-bold opacity-25">
              {category}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm bg-pink/20 px-3 py-1 rounded-full">{category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <Button variant="link" className="text-pink group-hover:translate-x-1 transition-transform px-0">
            View Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Financial App Redesign',
      category: 'Mobile App',
      description: 'Redesigned a financial app to improve user engagement and simplify complex transactions.'
    },
    {
      title: 'E-commerce Website',
      category: 'Web Design',
      description: 'Designed an e-commerce platform with a focus on product discovery and seamless checkout experience.'
    },
    {
      title: 'Healthcare Patient Portal',
      category: 'Web Application',
      description: 'Created a patient portal for a healthcare provider, focusing on accessibility and ease of use.'
    },
    {
      title: 'Smart Home Control App',
      category: 'IoT Application',
      description: 'Designed an intuitive interface for controlling smart home devices with emphasis on quick actions.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark relative">
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">FEATURED WORK</h2>
          <p className="text-2xl font-light text-pink">Recent Projects</p>
          <p className="mt-4 max-w-3xl mx-auto">
            A selection of my recent design work, showcasing my approach to solving complex problems 
            with intuitive and engaging user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
