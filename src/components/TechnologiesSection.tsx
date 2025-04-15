
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
          logo: "/lovable-uploads/5ea414e7-5c03-470d-84e2-db47ed76f404.png", // Changed to Incorta logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "Tableau",
          logo: "/lovable-uploads/5f4e3777-800d-4d04-a601-bde421c8d485.png", // Changed to AWS logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "SAS",
          logo: "/lovable-uploads/a8e62966-cc95-4ace-80d5-e538052c7ade.png", // Changed to Google Cloud Platform logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Microsoft Fabric",
          logo: "/lovable-uploads/48721c56-3b15-4d9f-a398-ecfe1a9ffb2e.png", // Changed to Microsoft Azure logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Python (Pandas, NumPy)",
          logo: "/lovable-uploads/298015d9-8bf9-4b79-bfea-0b1a7ff4b6bc.png", // Keep as Python logo (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Incorta",
          logo: "/lovable-uploads/15180302-963b-4b9f-b24a-7febd6f013a5.png", // Changed to Power BI logo
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
          logo: "/lovable-uploads/668e4b14-92c5-4041-9d87-acba248b7be7.png", // Changed to Microsoft Fabric logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Amazon Web Services (AWS)",
          logo: "/lovable-uploads/72f637aa-9388-4ede-ae01-02f1c6805510.png", // Changed to Tableau logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        {
          name: "Google Cloud Platform",
          logo: "/lovable-uploads/3c657fda-efaf-4e9c-acd7-f47381ad5082.png", // Changed to SAS logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
          name: "IBM Cloud",
          logo: "/lovable-uploads/378300a9-1d44-48cb-b8b2-47bcb42f6e75.png", // Changed to Alibaba Cloud logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
        },
        {
          name: "Digital Ocean",
          logo: "/lovable-uploads/2ef1888e-dd5b-4503-a762-76efa6af89c7.png", // Keep Digital Ocean logo (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Alibaba Cloud",
          logo: "/lovable-uploads/6312e432-2364-45f0-ad03-1cca86d6a599.png", // Changed to Oracle Siebel CRM logo
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
          logo: "/lovable-uploads/c07b7e56-6ede-4c32-bd8a-df38a19463aa.png", // Changed to Microsoft Dynamics logo (M365)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
        },
        {
          name: "Azure DevOps",
          logo: "/lovable-uploads/a439430e-3425-4fc0-84fe-7e7f6dc3fe60.png", // Changed to Cerner Millennium logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Figma",
          logo: "/lovable-uploads/7a3321d1-8809-4877-82db-cb67316553b7.png", // Reverted Figma logo to previous (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
          name: "Balsamiq",
          logo: "/lovable-uploads/2ef1888e-dd5b-4503-a762-76efa6af89c7.png", // Changed to Digital Ocean logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
        },
        {
          name: "Microsoft Visio",
          logo: "/lovable-uploads/7a3321d1-8809-4877-82db-cb67316553b7.png", // Using the current Figma logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Miro",
          logo: "/lovable-uploads/2225dbac-461e-4638-9641-7bef49358aee.png", // Keep Miro logo (same)
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
          logo: "/lovable-uploads/5f3e899e-ca81-4a32-9a45-01299018aeaa.png", // Changed to SAP logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "SAP",
          logo: "/lovable-uploads/15180302-963b-4b9f-b24a-7febd6f013a5.png", // Changed to Power BI logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "Salesforce",
          logo: "/lovable-uploads/e8119862-32dc-481a-a649-43d96b160646.png", // Keep Salesforce logo (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
        },
        {
          name: "Oracle Siebel CRM",
          logo: "/lovable-uploads/378300a9-1d44-48cb-b8b2-47bcb42f6e75.png", // Changed to Alibaba Cloud logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
        },
        {
          name: "ServiceNow",
          logo: "/lovable-uploads/010cc9cc-08fa-4be3-a3a4-30c31e1a7bea.png", // Keep ServiceNow logo (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"
        },
        {
          name: "Workday",
          logo: "/lovable-uploads/487f3be2-1b40-4dd7-be5a-02bf217cc22c.png", // Keep Workday logo (same)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg"
        },
        {
          name: "Cerner Millennium",
          logo: "/lovable-uploads/5d1b1597-d4c1-4576-af41-bf4727bf332b.png", // Changed to Azure DevOps logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Meditech",
          logo: "/lovable-uploads/ef09cc59-a9d2-4bfa-a994-a28b5016add6.png", // Keep Meditech logo (same)
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
