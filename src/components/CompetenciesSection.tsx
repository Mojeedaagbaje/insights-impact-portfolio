
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Star, TrendingUp, LineChart, UserCheck, Database, 
  Briefcase, FileText, Code, Cloud, Users, ArrowRight
} from "lucide-react";

const CompetenciesSection = () => {
  // Showing fewer skills, with the top ones only
  const skills = [
    { name: "Business Analysis Documentation", value: 95 },
    { name: "Use Case & UML Diagrams", value: 98 },
    { name: "Wireframe & Data Modeling", value: 95 },
    { name: "Business Process Modeling", value: 90 },
    { name: "Data Analysis & Visualization", value: 93 },
    { name: "Stakeholder Management", value: 93 }
  ];

  const coreCompetencies = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Business Analysis",
      description: "Capturing requirements, analyzing processes, and aligning technology solutions with business objectives.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      hoverBgColor: "hover:bg-blue-100",
      hoverBorderColor: "hover:border-blue-300"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      title: "Strategy Planning",
      description: "Developing actionable roadmaps and strategic initiatives to achieve business goals.",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      hoverBgColor: "hover:bg-indigo-100",
      hoverBorderColor: "hover:border-indigo-300"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Project & Program Management",
      description: "Delivering complex initiatives on time and within budget through structured methodologies.",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      hoverBgColor: "hover:bg-purple-100",
      hoverBorderColor: "hover:border-purple-300"
    },
    {
      icon: <Cloud className="h-6 w-6 text-cyan-600" />,
      title: "Cloud & FinOps Strategy",
      description: "Optimizing cloud investments through strategic planning, governance and cost management.",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      hoverBgColor: "hover:bg-cyan-100",
      hoverBorderColor: "hover:border-cyan-300"
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "AI & Data Analytics",
      description: "Transforming data into actionable insights through advanced analytics and AI solutions.",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      hoverBgColor: "hover:bg-green-100",
      hoverBorderColor: "hover:border-green-300"
    },
    {
      icon: <Code className="h-6 w-6 text-amber-600" />,
      title: "Enterprise Architecture",
      description: "Designing scalable IT infrastructures that drive business innovation and efficiency.",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      hoverBgColor: "hover:bg-amber-100",
      hoverBorderColor: "hover:border-amber-300"
    }
  ];

  return (
    <section id="competencies" className="section-container section-animate">
      <div className="text-center mb-16">
        <h2 className="section-title mx-auto after:left-1/3">Core Competencies</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Leveraging analytical expertise and business acumen to deliver transformative insights and data-driven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Professional Skills</h3>
            <Button variant="ghost" className="group p-0 h-auto text-blue-600">
              <span className="flex items-center gap-1">
                See all skills
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2" indicatorClassName="bg-blue-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCompetencies.map((competency, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 border ${competency.borderColor} ${competency.bgColor} ${competency.hoverBgColor} ${competency.hoverBorderColor} hover:shadow-md hover:-translate-y-1`}
            >
              <div className="space-y-4 p-6">
                <div className={`p-3 ${competency.bgColor} inline-flex rounded-lg`}>
                  {competency.icon}
                </div>
                <h3 className={`text-lg font-semibold ${competency.textColor}`}>{competency.title}</h3>
                <p className="text-muted-foreground text-sm">{competency.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
