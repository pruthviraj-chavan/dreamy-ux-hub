
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-dark border-t border-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-pink to-neon-blue bg-clip-text text-transparent">
              Harshavardhan Jadhav
            </div>
            <p className="text-muted-foreground text-sm">
              UX/UI Designer creating intuitive and accessible digital experiences
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Made with ❤️ © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
