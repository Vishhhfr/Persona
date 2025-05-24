
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">
              Vishwas Tiwari<span className="text-primary"></span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Data Science Enthusiast and Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Vishwas Tiwari. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed and Developed by Vishwas Tiwari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
