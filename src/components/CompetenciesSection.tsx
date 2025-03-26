
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, LineChart, UserCheck, Database, Briefcase, FileText, Code, Cloud, Users } from "lucide-react";

const CompetenciesSection = () => {
  const skills = [
    { name: "Business Analysis Documentation", value: 95 },
    { name: "Use Case Diagram", value: 98 },
    { name: "UML diagrams", value: 96 },
    { name: "Wireframe", value: 97 },
    { name: "Data Mapping, and Modelling", value: 90 },
    { name: "Data Analysis", value: 95 },
    { name: "Business Process Modeling", value: 90 },
    { name: "Requirements Engineering", value: 92 },
    { name: "SQL & Database Management", value: 85 },
    { name: "Data Visualization", value: 90 },
    { name: "Project Management", value: 87 },
    { name: "Stakeholder Management", value: 93 }
  ];

  const coreCompetencies = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Business Analysis",
      description: "Capturing requirements, analyzing processes, and aligning technology solutions with business objectives."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Strategy Planning",
      description: "Developing actionable roadmaps and strategic initiatives to achieve business goals."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Project & Program Management",
      description: "Delivering complex initiatives on time and within budget through structured methodologies."
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      title: "Cloud & FinOps Strategy",
      description: "Optimizing cloud investments through strategic planning, governance and cost management."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "AI & Data Analytics",
      description: "Transforming data into actionable insights through advanced analytics and AI solutions."
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Data Management",
      description: "Implementing data governance, quality frameworks and management best practices."
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Architecture & IT Solutions",
      description: "Designing scalable IT infrastructures that drive business innovation and efficiency."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Change Management & Agile Coaching",
      description: "Guiding organizations through transformation with agile methodologies and change strategies."
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: "Reporting & Communication",
      description: "Translating complex concepts into clear communications for diverse stakeholders."
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
          <h3 className="text-2xl font-semibold">Professional Skills</h3>
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
            <Card key={index} className="subtle-card card-hover">
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 inline-flex rounded-lg">
                  {competency.icon}
                </div>
                <h3 className="text-lg font-semibold">{competency.title}</h3>
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
