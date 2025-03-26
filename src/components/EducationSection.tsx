
import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Clock, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science (M.Sc.)",
      institution: "Obafemi Awolowo University",
      period: "2010 - 2012",
      description: "Specialized in strategic business management and technology implementation."
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "University of Ilorin",
      period: "2005 - 2009",
      description: "Focus on business and technology applications."
    },
    {
      degree: "Postgraduate Diploma in Data Science and AI",
      institution: "University of Texas, Austin",
      period: "2019 - 2020",
      description: "Advanced studies in artificial intelligence, machine learning, and data analytics."
    }
  ];

  const certificationCategories = [
    {
      id: "business-analysis",
      title: "Business Analysis & Agile",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "Certified Business Analysis Professional (CBAP)", issuer: "IIBA" },
        { name: "Project Management Professional (PMP)", issuer: "PMI" },
        { name: "Certified SAFe 6 Agilist", issuer: "Scaled Agile" },
        { name: "Advanced Certified Scrum Master (A-CSM)", issuer: "Scrum Alliance" },
        { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" }
      ]
    },
    {
      id: "product-ai",
      title: "Product & AI Certifications",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "AI-First Product Leader", issuer: "PMI" },
        { name: "Implementing Responsible AI", issuer: "LinkedIn" },
        { name: "Generative AI Fundamentals", issuer: "NVIDIA" }
      ]
    },
    {
      id: "cloud-finops",
      title: "Cloud & FinOps",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "AWS Technical Essentials", issuer: "AWS" },
        { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
        { name: "FinOps Masterclass (Cost Optimization)", issuer: "Udemy" }
      ]
    },
    {
      id: "it-service",
      title: "IT Service & Automation",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "ITIL V4 Foundation Certification", issuer: "Axelos" },
        { name: "Lean Six Sigma Yellow Belt", issuer: "6sigmastudy" },
        { name: "Certified Cybersecurity", issuer: "ISC2" }
      ]
    }
  ];

  const memberships = [
    "IIBA", "TBM Council", "FinOps Foundation", "PMI", "ISC2", "Scrum Alliance", "SAFe"
  ];

  return (
    <section id="education" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/3">Education and Certifications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="p-6 glassmorphism card-hover">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-semibold">{item.degree}</h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-lg text-blue-600">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
            </div>

            <Tabs defaultValue="business-analysis" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 bg-transparent">
                {certificationCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:shadow-soft data-[state=active]:bg-white"
                  >
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <span className="hidden md:inline">{category.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {certificationCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <Card className="glassmorphism p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.certifications.map((cert, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col p-4 bg-white/50 rounded-lg shadow-sm card-hover"
                        >
                          <h5 className="font-medium text-primary">{cert.name}</h5>
                          <span className="text-sm text-blue-600 mt-2">{cert.issuer}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        
        {/* Professional Memberships Banner */}
        <div className="mt-16 py-8 px-8 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h4 className="text-lg font-medium">Professional Memberships</h4>
          </div>
          
          <div className="relative overflow-hidden py-4">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {memberships.map((membership, index) => (
                  <CarouselItem key={index} className="basis-1/3 md:basis-1/5 lg:basis-1/7">
                    <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 px-4 text-center w-full">
                      {membership}
                    </Badge>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
