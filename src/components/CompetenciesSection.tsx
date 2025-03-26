
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, LineChart, UserCheck, Database, Briefcase } from "lucide-react";

const CompetenciesSection = () => {
  const skills = [
    { name: "Data Analysis", value: 95 },
    { name: "Business Process Modeling", value: 90 },
    { name: "Requirements Engineering", value: 92 },
    { name: "Statistical Analysis", value: 88 },
    { name: "SQL & Database Management", value: 85 },
    { name: "Data Visualization", value: 90 },
    { name: "Project Management", value: 87 },
    { name: "Stakeholder Management", value: 93 }
  ];

  const coreCompetencies = [
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Data Analysis & Interpretation",
      description: "Transforming complex data sets into clear, actionable insights to inform strategic decisions."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Process Optimization",
      description: "Identifying inefficiencies and implementing solutions to streamline operations and reduce costs."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: "Requirements Gathering",
      description: "Eliciting and documenting precise business requirements to ensure project alignment with objectives."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Data Management",
      description: "Organizing and maintaining complex data architectures to ensure data integrity and accessibility."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Strategic Planning",
      description: "Developing long-term business strategies backed by data-driven insights and market analysis."
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: "Reporting & Communication",
      description: "Presenting complex findings in clear, compelling formats tailored to diverse stakeholder needs."
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
