
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Database, Briefcase, Cloud } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TechnologiesSection = () => {
  const isMobile = useIsMobile();
  
  const categories = [
    {
      id: "data-analysis",
      name: "Business Intelligence & Data Analytics",
      shortName: "Data Analytics",
      icon: <LineChart className="h-5 w-5" />,
      technologies: [
        {
          name: "Power BI",
          logo: "/lovable-uploads/powerbi-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "Tableau",
          logo: "/lovable-uploads/tableau-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "SAS",
          logo: "/lovable-uploads/sas-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Microsoft Fabric",
          logo: "/lovable-uploads/fabric-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Python (Pandas, NumPy)",
          logo: "/lovable-uploads/python-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "R Programming",
          logo: "/lovable-uploads/r-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
        }
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
      accentColor: "bg-blue-600"
    },
    {
      id: "cloud",
      name: "Cloud Platforms",
      shortName: "Cloud",
      icon: <Cloud className="h-5 w-5" />,
      technologies: [
        {
          name: "Microsoft Azure",
          logo: "/lovable-uploads/azure-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Amazon Web Services (AWS)",
          logo: "/lovable-uploads/aws-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        {
          name: "Google Cloud Platform",
          logo: "/lovable-uploads/gcp-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
          name: "IBM Cloud",
          logo: "/lovable-uploads/ibm-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
        },
        {
          name: "Azure DevOps",
          logo: "/lovable-uploads/azure-devops-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "AWS CloudFormation",
          logo: "/lovable-uploads/cloudformation-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        }
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
      accentColor: "bg-green-600"
    },
    {
      id: "project-management",
      name: "Project & Product Management",
      shortName: "Project Mgmt",
      icon: <Briefcase className="h-5 w-5" />,
      technologies: [
        {
          name: "Jira",
          logo: "/lovable-uploads/jira-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
        },
        {
          name: "Azure DevOps",
          logo: "/lovable-uploads/azure-devops-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Figma",
          logo: "/lovable-uploads/figma-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
          name: "Balsamiq",
          logo: "/lovable-uploads/balsamiq-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
        },
        {
          name: "Microsoft Visio",
          logo: "/lovable-uploads/visio-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Miro",
          logo: "/lovable-uploads/miro-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
        }
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
      accentColor: "bg-purple-600"
    },
    {
      id: "crm-erp",
      name: "CRM & ERP Systems",
      shortName: "CRM & ERP",
      icon: <Database className="h-5 w-5" />,
      technologies: [
        {
          name: "Microsoft Dynamics 365",
          logo: "/lovable-uploads/dynamics-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "SAP",
          logo: "/lovable-uploads/sap-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "Salesforce",
          logo: "/lovable-uploads/salesforce-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
        },
        {
          name: "Oracle Siebel CRM",
          logo: "/lovable-uploads/oracle-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
        },
        {
          name: "ServiceNow",
          logo: "/lovable-uploads/servicenow-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"
        },
        {
          name: "Workday",
          logo: "/lovable-uploads/workday-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg"
        },
        {
          name: "Cerner Millennium",
          logo: "/lovable-uploads/cerner-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Meditech",
          logo: "/lovable-uploads/meditech-logo.png",
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        }
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverBgColor: "hover:bg-orange-100",
      accentColor: "bg-orange-600"
    }
  ];

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null; // Prevent infinite loops
    imgElement.src = fallbackSrc;
  };

  return (
    <section id="technologies" className="section-container section-animate bg-slate-50">
      <div className="mb-12">
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          I leverage a diverse set of tools and technologies to analyze data, create visualizations, and deliver insights that drive business decisions.
        </p>
      </div>

      <Tabs defaultValue="data-analysis" className="w-full">
        <TabsList className={`flex flex-wrap ${isMobile ? 'gap-2 bg-transparent justify-center mb-10' : 'grid grid-cols-4 mb-8 bg-transparent'}`}>
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className={`data-[state=active]:shadow-soft data-[state=active]:${category.bgColor} data-[state=active]:${category.color} ${isMobile ? 'flex-1 min-w-[45%] text-xs py-1 px-1' : ''}`}
            >
              <div className="flex items-center gap-1">
                <span className={category.color}>{category.icon}</span>
                <span className={`${isMobile ? 'text-xs' : ''}`}>{isMobile ? category.shortName : category.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <Card className={`glassmorphism p-6 ${category.bgColor}`}>
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-4 bg-white/50 rounded-lg shadow-sm card-hover transition-all duration-300 ${category.hoverBgColor}`}
                  >
                    <div className="mr-3 flex items-center justify-center w-8 h-8">
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo`} 
                        className="max-h-6 max-w-6 object-contain" 
                        onError={(e) => handleImageError(e, tech.fallbackLogo)}
                      />
                    </div>
                    <span className={`${category.color} text-sm`}>{tech.name}</span>
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
