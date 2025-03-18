
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
    <section id="contact" className="py-20 bg-gradient-to-b from-dark/95 to-dark relative">
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="text-2xl font-light text-pink">Let's Work Together</p>
          <p className="mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-xl border border-pink/20 animate-glow">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-pink" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-pink transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-pink" />
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
                className="rounded-full border-pink/30 hover:bg-pink/20 hover:border-pink"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-pink/30 hover:bg-pink/20 hover:border-pink"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-pink/30 hover:bg-pink/20 hover:border-pink"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="neon-border rounded-xl p-[1px]">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
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
                    className="glowing-input"
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
                    className="glowing-input"
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
                    className="glowing-input min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink to-purple hover:opacity-90 transition-opacity"
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
