
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Coffee, 
  Database,
  BarChart,
  LineChart,
  BrainCircuit,
  BookOpen,
  FileSpreadsheet,
  FileText,
  FileImage,
  FileCode
} from 'lucide-react';

interface SkillProps {
  name: string;
  level: number | string;
  icon: React.ReactNode;
}

const SkillItem = ({ name, level, icon }: SkillProps) => {
  const displayLevel = typeof level === 'number' ? `${level}%` : level;
  const progressWidth = typeof level === 'number' ? level : 0;
  
  return (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="mr-3 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground font-semibold">{displayLevel}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000 ease-out" 
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: <Code className="w-5 h-5 text-primary" /> },
    { name: "Java", level: 80, icon: <Coffee className="w-5 h-5 text-primary" /> },
    { name: "Pandas (Python Library)", level: 85, icon: <Database className="w-5 h-5 text-primary" /> },
    { name: "Numpy (Python Library)", level: 85, icon: <BarChart className="w-5 h-5 text-primary" /> },
    { name: "Data Analysis", level: 60, icon: <LineChart className="w-5 h-5 text-primary" /> },
    { name: "Machine Learning", level: 40, icon: <BrainCircuit className="w-5 h-5 text-primary" /> },
    { name: "Deep Learning Concepts", level: 40, icon: <BookOpen className="w-5 h-5 text-primary" /> },
  ];

  const officeSkills = [
    { name: "MS Excel", level: 85, icon: <FileSpreadsheet className="w-5 h-5 text-primary" /> },
    { name: "MS Word", level: 90, icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "MS PowerPoint", level: 85, icon: <FileImage className="w-5 h-5 text-primary" /> },
  ];

  const otherSkills = [
    { name: "HTML", level: 75, icon: <FileCode className="w-5 h-5 text-primary" /> },
    { name: "CSS", level: 75, icon: <FileCode className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient relative overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Card className="card-hover glass-effect floating-animation">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-blue-400 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-gradient">Data Science & Programming</h3>
              </div>
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </CardContent>
          </Card>

          <Card className="card-hover glass-effect floating-animation" style={{ animationDelay: '1s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-gradient">Office Skills</h3>
              </div>
              {officeSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </CardContent>
          </Card>

          <Card className="card-hover glass-effect floating-animation md:col-span-2 lg:col-span-1" style={{ animationDelay: '2s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-gradient">Other Skills</h3>
              </div>
              {otherSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} icon={skill.icon} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
