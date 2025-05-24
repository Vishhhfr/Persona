
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient z-0"></div>
      <div className="section-container relative z-10 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Vishwas Tiwari</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Data Science Enthusiast
          </p>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Passionate data science enthusiast seeking to leverage strong analytical skills, 
            proficiency in machine learning, and expertise in data visualization to drive 
            data-informed decision-making.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
             variant='outline'
             className="px-8 py-3 text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-navy-700 text-white glow-button hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300" 
                 onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
            <Button 
            className="px-8 py-3 text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white glow-button hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            variant="outline" onClick={() => scrollToSection('projects')}>
              View My Projects
            </Button>
          </div>
        </div>
      </div>
      <a 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
