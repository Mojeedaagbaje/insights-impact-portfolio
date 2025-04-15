
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
          logo: "/lovable-uploads/bd6b16f3-5421-4974-8ba5-83e7aacf2e5a.png", // Meditech logo used for Power BI
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "Tableau",
          logo: "/lovable-uploads/72f637aa-9388-4ede-ae01-02f1c6805510.png", // AWS logo used for Tableau
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "SAS",
          logo: "/lovable-uploads/e9b9d818-60a7-474d-b0cc-68e2853d45b8.png", // IBM Cloud logo used for SAS
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Microsoft Fabric",
          logo: "/lovable-uploads/4f0d044e-6ee0-4836-9063-099257f09125.png", // Microsoft Azure logo for Microsoft Fabric
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Python (Pandas, NumPy)",
          logo: "/lovable-uploads/af0323e5-d835-4516-b8cf-15f9d87692d9.png", // Python logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          name: "Incorta",
          logo: "/lovable-uploads/d86480ee-3727-451e-b568-011cfc0ac77e.png", // Incorta logo
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
          logo: "/lovable-uploads/6f985009-a204-44a4-8711-aa5fb81608df.png", // Azure DevOps logo used for Microsoft Azure
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          name: "Amazon Web Services (AWS)",
          logo: "/lovable-uploads/05f36fa4-ff3e-4bc8-84d6-b5b0639f5b86.png", // Microsoft Fabric logo used for AWS
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        {
          name: "Google Cloud Platform",
          logo: "/lovable-uploads/353a6deb-ddd5-4ede-8090-a914b804f394.png", // SAS logo used for GCP
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
          name: "IBM Cloud",
          logo: "/lovable-uploads/04eda1f4-966f-4cdd-9b9a-3fd354d6d5b2.png", // Alibaba Cloud logo used for IBM Cloud
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
        },
        {
          name: "Digital Ocean",
          logo: "/lovable-uploads/28a6ec74-0f4a-4009-9fab-9174ce01d26d.png", // Digital Ocean logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Alibaba Cloud",
          logo: "/lovable-uploads/323ee68b-6f68-4217-a1c2-7fac60628f7f.png", // Oracle Siebel CRM logo used for Alibaba Cloud
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
          logo: "/lovable-uploads/25b1e4d9-9153-4366-a197-f10587b083d5.png", // Microsoft Dynamics logo (M365)
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
        },
        {
          name: "Azure DevOps",
          logo: "/lovable-uploads/304af76f-65c7-4295-9fbf-b040ed0d5a58.png", // Cerner Millennium logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
          name: "Figma",
          logo: "/lovable-uploads/7a3321d1-8809-4877-82db-cb67316553b7.png", // Previous Figma logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
          name: "Balsamiq",
          logo: "/lovable-uploads/11da-434d-83d9-45103adb7039.png", // Digital Ocean logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
        },
        {
          name: "Microsoft Visio",
          logo: "/lovable-uploads/7a3321d1-8809-4877-82db-cb67316553b7.png", // Using the current Figma logo for Visio
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
          logo: "/lovable-uploads/34786a71-30be-465f-b2eb-161c8eaa9ff1.png", // Microsoft Dynamics 365
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
        },
        {
          name: "SAP",
          logo: "/lovable-uploads/efda72c7-36b0-49d8-b0e3-1518dc33109b.png", // SAP logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          name: "Salesforce",
          logo: "/lovable-uploads/416e3639-773c-434b-9fd0-60e3989f8431.png", // Salesforce logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
        },
        {
          name: "Oracle Siebel CRM",
          logo: "/lovable-uploads/5a98e472-b100-4f0c-b414-2d70df7a6084.png", // Oracle Siebel logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
        },
        {
          name: "ServiceNow",
          logo: "/lovable-uploads/6712ec7a-11da-434d-83d9-45103adb7039.png", // ServiceNow logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"
        },
        {
          name: "Workday",
          logo: "/lovable-uploads/bf7a3a26-0db6-463b-9271-f9617fb49ac6.png", // Workday logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg"
        },
        {
          name: "Cerner Millennium",
          logo: "/lovable-uploads/304af76f-65c7-4295-9fbf-b040ed0d5a58.png", // Cerner Millennium logo
          fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          name: "Meditech",
          logo: "/lovable-uploads/bd6b16f3-5421-4974-8ba5-83e7aacf2e5a.png", // Meditech logo
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
