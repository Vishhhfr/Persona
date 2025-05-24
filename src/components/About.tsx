
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <Card className="card-hover col-span-1 md:col-span-2 bg-card border border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Profile</h3>
              <p className="text-muted-foreground mb-6">
                Passionate data science enthusiast seeking to leverage strong analytical skills, 
                proficiency in machine learning, and expertise in data visualization to drive 
                data-informed decision-making and deliver impactful solutions in a dynamic, 
                innovative environment.
              </p>
              <p className="text-muted-foreground">
                Currently pursuing a Bachelor's degree in Computer Applications (BCA) at 
                Bhagwan Mahavir University, I'm focused on building a strong foundation in 
                data science, machine learning, and software development.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-card border border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/50 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">vishwastiwari1901@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/50 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">13/04/2005</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/50 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">7984527433</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
