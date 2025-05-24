
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Computer Applications (BCA)",
      institution: "Bhagwan Mahavir University",
      period: "2023-26",
      grade: "4th Semester",
      details: "Currently pursuing a bachelor's degree in Computer Applications with focus on programming, data structures, and software development."
    },
    {
      degree: "H.S.C",
      institution: "St Xavier's High School",
      period: "2021-23",
      grade: "10+2(PCM)",
      details: "Completed higher secondary education with Physics, Chemistry, and Mathematics as major subjects."
    },
    {
      degree: "S.S.C",
      institution: "Sungrace School, Udhna",
      period: "2009-21",
      grade: "10th",
      details: "Completed secondary school education with basic subjects."
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-gradient overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          My academic journey and educational milestones that shaped my knowledge foundation
        </p>
        
        <div className="mt-10">
          <div className="relative border-l-2 border-gradient-to-b from-primary via-blue-400 to-cyan-400 pl-8 ml-4">
            {educationData.map((item, index) => (
              <div key={index} className={`mb-12 relative group ${index === 0 ? 'animate-fade-in' : ''}`}>
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <Card className="card-hover glass-effect">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gradient mb-2">{item.degree}</h3>
                      <span className="text-sm bg-gradient-to-r from-primary/20 to-blue-400/20 px-4 py-2 rounded-full border border-primary/30 font-medium">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-center mb-4">
                      <p className="text-lg font-medium text-foreground">{item.institution}</p>
                      <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {item.grade}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
