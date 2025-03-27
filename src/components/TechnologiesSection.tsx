
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Database, Briefcase, Cloud } from "lucide-react";

const TechnologiesSection = () => {
  const categories = [
    {
      id: "data-analysis",
      name: "Business Intelligence & Data Analytics",
      icon: <LineChart className="h-5 w-5" />,
      technologies: [
        "Power BI",
        "Tableau",
        "SAS",
        "Microsoft Fabric",
        "Python (Pandas, NumPy)",
        "R Programming"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
      accentColor: "bg-blue-600"
    },
    {
      id: "cloud",
      name: "Cloud Platforms",
      icon: <Cloud className="h-5 w-5" />,
      technologies: [
        "Microsoft Azure",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform",
        "IBM Cloud",
        "Azure DevOps",
        "AWS CloudFormation"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
      accentColor: "bg-green-600"
    },
    {
      id: "project-management",
      name: "Project & Product Management",
      icon: <Briefcase className="h-5 w-5" />,
      technologies: [
        "Jira",
        "Azure DevOps",
        "Figma",
        "Balsamiq",
        "Microsoft Visio",
        "Miro"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
      accentColor: "bg-purple-600"
    },
    {
      id: "crm-erp",
      name: "CRM & ERP Systems",
      icon: <Database className="h-5 w-5" />,
      technologies: [
        "Microsoft Dynamics 365",
        "SAP",
        "Salesforce",
        "Oracle Siebel CRM",
        "ServiceNow",
        "Workday"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverBgColor: "hover:bg-orange-100",
      accentColor: "bg-orange-600"
    }
  ];

  return (
    <section id="technologies" className="section-container section-animate bg-slate-50">
      <div className="mb-16">
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          I leverage a diverse set of tools and technologies to analyze data, create visualizations, and deliver insights that drive business decisions.
        </p>
      </div>

      <Tabs defaultValue="data-analysis" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className={`data-[state=active]:shadow-soft data-[state=active]:${category.bgColor} data-[state=active]:${category.color}`}
            >
              <div className="flex items-center gap-2">
                <span className={category.color}>{category.icon}</span>
                <span>{category.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <Card className={`glassmorphism p-6 ${category.bgColor}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-4 bg-white/50 rounded-lg shadow-sm card-hover ${category.hoverBgColor}`}
                  >
                    <div className={`h-2 w-2 rounded-full ${category.accentColor} mr-3`}></div>
                    <span className={category.color}>{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TechnologiesSection;
