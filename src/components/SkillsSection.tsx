
import React, { useState } from 'react';
import { 
  Search, FileText, Layers, Palette, Figma, 
  PenTool, LayoutGrid, Code, Smartphone, RefreshCw,
  GalleryHorizontalEnd, Brush, Paintbrush, Sketch
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; percentage: number }[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective w-full h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`skill-card w-full h-full relative preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="skill-card-front w-full h-full absolute backface-hidden glass p-6 rounded-xl border border-pink/20 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-pink to-purple rounded-full mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-center text-muted-foreground">Tap to flip</p>
        </div>
        
        <div className="skill-card-back w-full h-full absolute backface-hidden rotate-y-180 glass p-6 rounded-xl border border-pink/20 flex flex-col">
          <h3 className="text-xl font-semibold mb-4">{title} Skills</h3>
          <div className="space-y-4 flex-grow">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-dark/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink to-neon-blue rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCards = [
    {
      title: 'UX Research',
      icon: <Search className="w-8 h-8 text-white" />,
      description: 'Discovering user needs through various research methods and translating them into design solutions.',
      skills: [
        { name: 'User Interviews', percentage: 95 },
        { name: 'Usability Testing', percentage: 90 },
        { name: 'Persona Creation', percentage: 85 },
        { name: 'Journey Mapping', percentage: 90 },
        { name: 'Wireframing', percentage: 95 },
      ]
    },
    {
      title: 'UI Design',
      icon: <Palette className="w-8 h-8 text-white" />,
      description: 'Creating visually appealing interfaces that are both functional and aesthetically pleasing.',
      skills: [
        { name: 'Visual Design', percentage: 90 },
        { name: 'Interaction Design', percentage: 85 },
        { name: 'Accessibility', percentage: 80 },
        { name: 'Design Systems', percentage: 85 },
        { name: 'Prototyping', percentage: 90 },
      ]
    },
    {
      title: 'Design Tools',
      icon: <Figma className="w-8 h-8 text-white" />,
      description: 'Proficiency in industry-standard design and prototyping tools.',
      skills: [
        { name: 'Figma', percentage: 95 },
        { name: 'Adobe XD', percentage: 85 },
        { name: 'Sketch', percentage: 80 },
        { name: 'Photoshop', percentage: 75 },
        { name: 'Illustrator', percentage: 70 },
      ]
    },
    {
      title: 'Development',
      icon: <Code className="w-8 h-8 text-white" />,
      description: 'Frontend development skills to better collaborate with developers and understand technical constraints.',
      skills: [
        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 75 },
        { name: 'JavaScript', percentage: 65 },
        { name: 'React', percentage: 60 },
        { name: 'Responsive Design', percentage: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-dark to-dark/95 relative">
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title">MY EXPERTISE</h2>
          <p className="text-2xl font-light text-pink">Skills & Capabilities</p>
          <p className="mt-4 max-w-2xl mx-auto">
            With a blend of design thinking and technical skills, I create holistic user experiences 
            that are both visually stunning and highly functional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCards.map((card, index) => (
            <SkillCard 
              key={index}
              title={card.title}
              icon={card.icon}
              skills={card.skills}
            />
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
          <div className="tool-icon p-4 glass rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all">
            <Figma size={40} className="text-pink mb-2" />
            <span>Figma</span>
          </div>
          <div className="tool-icon p-4 glass rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all">
            <Paintbrush size={40} className="text-purple mb-2" />
            <span>Adobe XD</span>
          </div>
          <div className="tool-icon p-4 glass rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all">
            <Sketch size={40} className="text-neon-blue mb-2" />
            <span>Sketch</span>
          </div>
          <div className="tool-icon p-4 glass rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all">
            <GalleryHorizontalEnd size={40} className="text-neon-pink mb-2" />
            <span>Photoshop</span>
          </div>
          <div className="tool-icon p-4 glass rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-all">
            <Brush size={40} className="text-pink mb-2" />
            <span>Illustrator</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
