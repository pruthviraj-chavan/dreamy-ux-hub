
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {x: number; y: number; radius: number; color: string; speedX: number; speedY: number}[] = [];
    const particleCount = 40;
    const maxRadius = 8;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * maxRadius + 1;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const speedX = (Math.random() - 0.5) * 1;
      const speedY = (Math.random() - 0.5) * 1;
      
      // Random color from a palette of UI/UX colors
      const colors = ['#FF61D2', '#6F2DFF', '#0FF0FC', '#FE9090', '#CF8DFD'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x,
        y,
        radius,
        color,
        speedX,
        speedY
      });
    }
    
    // Draw UI/UX related symbols
    const symbols = ['Aa', '🎨', '📱', '💻', 'UI', 'UX', '✏️', '🖌️', '📐'];
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x - p.radius <= 0 || p.x + p.radius >= canvas.width) {
          p.speedX = -p.speedX;
        }
        
        if (p.y - p.radius <= 0 || p.y + p.radius >= canvas.height) {
          p.speedY = -p.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        
        // Add UI/UX symbols
        if (i < symbols.length && p.radius > 5) {
          ctx.font = '12px Arial';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.globalAlpha = 0.7;
          ctx.fillText(symbols[i % symbols.length], p.x, p.y);
        }
        
        ctx.globalAlpha = 1;
      }
      
      // Connect particles with lines if they are close
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = 0.1;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ opacity: 0.5 }}
      ></canvas>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/80 to-purple/30 z-1"></div>
      <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-gradient-radial from-pink/30 to-transparent opacity-30 blur-3xl z-1"></div>
      <div className="absolute bottom-0 left-0 w-3/4 md:w-1/2 h-full bg-gradient-radial from-purple/30 to-transparent opacity-30 blur-3xl z-1"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-neon-blue opacity-30 animate-float z-2"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-pink opacity-20 animate-float z-2" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-purple opacity-20 animate-float z-2" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-pink animate-pulse"></span>
              <span className="text-pink font-medium">UX/UI Designer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-pink via-purple to-neon-blue bg-clip-text text-transparent">Harshavardhan Jadhav</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-8">
              Crafting delightful digital experiences with a human-centered approach
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink to-purple text-white hover:opacity-90 transition-opacity"
              >
                Hire Me
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-pink text-white hover:bg-pink/10"
              >
                View Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="px-3 py-1 border border-pink/30 rounded-full text-sm flex items-center space-x-1 animate-pulse">
                <span className="w-2 h-2 bg-pink rounded-full"></span>
                <span>UI</span>
              </div>
              <div className="px-3 py-1 border border-purple/30 rounded-full text-sm flex items-center space-x-1 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <span className="w-2 h-2 bg-purple rounded-full"></span>
                <span>UX</span>
              </div>
              <div className="px-3 py-1 border border-neon-blue/30 rounded-full text-sm flex items-center space-x-1 animate-pulse" style={{ animationDelay: '1s' }}>
                <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                <span>Figma</span>
              </div>
              <div className="px-3 py-1 border border-neon-pink/30 rounded-full text-sm flex items-center space-x-1 animate-pulse" style={{ animationDelay: '1.5s' }}>
                <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                <span>Design</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 md:mt-0 md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink via-purple to-neon-blue rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-pink/30 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple/50 to-pink/50 flex items-center justify-center text-4xl font-bold animate-glow">
                  HJ
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
