
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MessageSquare, Send, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Harshavardhan, I saw your portfolio and would like to discuss a project.");
    window.open(`https://wa.me/918888151722?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark to-purple/20 z-0"></div>
      
      {/* Animated flowing particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 w-full h-full">
          <div className="absolute w-2 h-2 rounded-full bg-pink animate-float" style={{ left: '10%', top: '20%', animationDuration: '8s' }}></div>
          <div className="absolute w-3 h-3 rounded-full bg-purple animate-float" style={{ left: '20%', top: '40%', animationDuration: '12s' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-neon-blue animate-float" style={{ left: '30%', top: '70%', animationDuration: '10s' }}></div>
          <div className="absolute w-4 h-4 rounded-full bg-pink animate-float" style={{ left: '40%', top: '30%', animationDuration: '15s' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-purple animate-float" style={{ left: '50%', top: '60%', animationDuration: '9s' }}></div>
          <div className="absolute w-3 h-3 rounded-full bg-neon-blue animate-float" style={{ left: '60%', top: '40%', animationDuration: '14s' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-pink animate-float" style={{ left: '70%', top: '20%', animationDuration: '11s' }}></div>
          <div className="absolute w-4 h-4 rounded-full bg-purple animate-float" style={{ left: '80%', top: '50%', animationDuration: '13s' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-neon-blue animate-float" style={{ left: '90%', top: '30%', animationDuration: '16s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="text-2xl font-light bg-gradient-to-r from-pink via-purple to-neon-blue bg-clip-text text-transparent">Let's Work Together</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-xl border-2 border-gradient-to-r from-pink via-purple to-neon-blue animate-glow bg-gradient-to-br from-dark/80 via-dark/90 to-dark/95">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-pink to-neon-blue bg-clip-text text-transparent">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-purple flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-pink transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-neon-blue flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 88881 51722</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-10 mb-6">Connect with Me</h3>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-pink/30 hover:bg-gradient-to-br hover:from-pink/20 hover:to-purple/20 hover:border-pink transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5 text-gradient-to-r from-pink to-purple" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-purple/30 hover:bg-gradient-to-br hover:from-purple/20 hover:to-neon-blue/20 hover:border-purple transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-gradient-to-r from-purple to-neon-blue" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-neon-blue/30 hover:bg-gradient-to-br hover:from-neon-blue/20 hover:to-pink/20 hover:border-neon-blue transition-all duration-300"
              >
                <Instagram className="h-5 w-5 text-gradient-to-r from-neon-blue to-pink" />
              </Button>
            </div>
          </div>
          
          <div className="neon-border rounded-xl p-[1px] bg-gradient-to-r from-pink via-purple to-neon-blue">
            <div className="glass p-8 rounded-xl bg-dark/80 backdrop-blur-lg">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-pink to-neon-blue bg-clip-text text-transparent">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glowing-input bg-dark/50 border-pink/30 focus:border-pink focus:ring-2 focus:ring-pink/50 outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glowing-input bg-dark/50 border-purple/30 focus:border-purple focus:ring-2 focus:ring-purple/50 outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glowing-input bg-dark/50 border-neon-blue/30 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 outline-none transition-all duration-300 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink via-purple to-neon-blue hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">◌</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
