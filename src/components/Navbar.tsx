
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink to-neon-blue bg-clip-text text-transparent">
          HJ
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-pink transition-colors relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink to-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-gradient-to-r from-pink to-purple hover:opacity-90 transition-opacity"
        >
          Hire Me
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-dark/95 pt-16 z-40">
          <div className="flex flex-col items-center space-y-6 p-4">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl text-white hover:text-pink transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 w-full bg-gradient-to-r from-pink to-purple hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
