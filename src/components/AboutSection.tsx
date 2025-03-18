
import React from 'react';
import { CalendarDays, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark relative">
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="text-2xl font-light text-pink">UX Designer with a passion for creating intuitive experiences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass p-6 rounded-xl animate-glow border border-pink/20">
            <p className="text-lg leading-relaxed">
              I'm a UX/UI designer focused on creating human-centered digital experiences. With a background in design and technology, I blend analytical thinking with creative problem-solving to deliver intuitive and engaging products.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-pink" /> Education
              </h3>
              <div className="ml-8 border-l-2 border-pink/30 pl-6">
                <div className="mb-6 relative">
                  <div className="absolute w-3 h-3 bg-pink rounded-full -left-7 top-2"></div>
                  <h4 className="text-lg font-medium">Master of Design (M.Des)</h4>
                  <p className="text-muted-foreground">IIT Delhi</p>
                  <p className="text-pink">User Experience Design (2020 – 2022)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CalendarDays className="mr-2 text-pink" /> Experience Timeline
            </h3>
            
            <div className="ml-4 border-l-2 border-pink/30 pl-6 space-y-8">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-pink rounded-full -left-7 top-2"></div>
                <div className="glass p-4 rounded-lg border border-pink/20">
                  <h4 className="text-lg font-medium">Lead Experience Designer</h4>
                  <p className="text-muted-foreground">Wongdoody</p>
                  <p className="text-pink">2022 - Present</p>
                  <p className="mt-2">Leading UX design for digital products and experiences.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-pink rounded-full -left-7 top-2"></div>
                <div className="glass p-4 rounded-lg border border-pink/20">
                  <h4 className="text-lg font-medium">Product Design Intern</h4>
                  <p className="text-muted-foreground">FlytBase</p>
                  <p className="text-pink">Jan 2022 - Mar 2022</p>
                  <p className="mt-2">Designed interfaces for drone management systems.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-pink rounded-full -left-7 top-2"></div>
                <div className="glass p-4 rounded-lg border border-pink/20">
                  <h4 className="text-lg font-medium">UX Design Intern</h4>
                  <p className="text-muted-foreground">Softario</p>
                  <p className="text-pink">June 2021 - July 2021</p>
                  <p className="mt-2">Created user-centric designs for web and mobile applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
