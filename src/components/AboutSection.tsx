
import React from 'react';
import { CalendarDays, GraduationCap, Star, Award, Coffee } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-dark via-dark/90 to-dark/80 relative">
      <div className="absolute inset-0 matrix-bg opacity-10"></div>
      
      {/* Colorful geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-500/20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-500/20 blur-2xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-blue-500/20 blur-2xl"></div>
      <div className="absolute bottom-40 left-20 w-36 h-36 rounded-full bg-red-500/20 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="text-2xl font-light bg-gradient-to-r from-pink via-purple to-neon-blue bg-clip-text text-transparent">UX Designer with a passion for creating intuitive experiences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-xl animate-glow border border-pink/20 bg-gradient-to-br from-dark/90 via-dark/95 to-dark/98">
            <p className="text-lg leading-relaxed">
              I'm a UX/UI designer focused on creating human-centered digital experiences. With a background in design and technology, I blend analytical thinking with creative problem-solving to deliver intuitive and engaging products.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm flex items-center">
                <Star className="w-4 h-4 mr-1" /> User Research
              </div>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm flex items-center">
                <Star className="w-4 h-4 mr-1" /> Wireframing
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm flex items-center">
                <Star className="w-4 h-4 mr-1" /> Prototyping
              </div>
              <div className="px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm flex items-center">
                <Star className="w-4 h-4 mr-1" /> UI Design
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-pink" /> Education
              </h3>
              <div className="ml-8 border-l-2 border-pink/30 pl-6">
                <div className="mb-6 relative">
                  <div className="absolute w-3 h-3 bg-gradient-to-r from-pink to-purple rounded-full -left-7 top-2"></div>
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
            
            <div className="ml-4 border-l-2 border-gradient-to-b from-pink via-purple to-neon-blue pl-6 space-y-6">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-gradient-to-r from-pink to-purple rounded-full -left-7 top-2 animate-pulse"></div>
                <div className="glass p-4 rounded-lg border border-orange-500/30 bg-orange-500/10">
                  <h4 className="text-lg font-medium">Lead Experience Designer</h4>
                  <p className="text-muted-foreground">Wongdoody</p>
                  <p className="text-orange-400">2022 - Present</p>
                  <p className="mt-2">Leading UX design for digital products and experiences.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-gradient-to-r from-pink to-purple rounded-full -left-7 top-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="glass p-4 rounded-lg border border-green-500/30 bg-green-500/10">
                  <h4 className="text-lg font-medium">Product Design Intern</h4>
                  <p className="text-muted-foreground">FlytBase</p>
                  <p className="text-green-400">Jan 2022 - Mar 2022</p>
                  <p className="mt-2">Designed interfaces for drone management systems.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-gradient-to-r from-pink to-purple rounded-full -left-7 top-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="glass p-4 rounded-lg border border-blue-500/30 bg-blue-500/10">
                  <h4 className="text-lg font-medium">UX Design Intern</h4>
                  <p className="text-muted-foreground">Softario</p>
                  <p className="text-blue-400">June 2021 - July 2021</p>
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
