
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
import { useIsMobile } from "@/hooks/use-mobile";

const EducationSection = () => {
  const isMobile = useIsMobile();

  const education = [
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "University of Ilorin",
      period: "2010",
      description: "Focus on business and technology applications."
    },
    {
      degree: "Master of Science (M.Sc.)",
      institution: "Obafemi Awolowo University",
      period: "2017",
      description: "Specialized in strategic business management and technology implementation."
    },
    {
      degree: "Postgraduate Diploma in Data Science and AI",
      institution: "University of Texas, Austin",
      period: "2025",
      description: "Advanced studies in artificial intelligence, machine learning, and data analytics."
    },
    {
      degree: "Project Management in Global Health",
      institution: "University of Washington",
      period: "2025",
      description: "Specialized training in managing healthcare projects with global impact."
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
    { name: "IIBA" },
    { name: "TBM Council" }, 
    { name: "FinOps Foundation" }, 
    { name: "PMI" }, 
    { name: "ISC2" },
    { name: "Scrum Alliance" }, 
    { name: "SAFe" }
  ];

  return (
    <section id="education" className="bg-indigo-50 section-animate">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/3">Education and Certifications</h2>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {education.map((item, index) => (
              <Card key={index} className="p-6 glassmorphism card-hover bg-white/80">
                <div className="space-y-3">
                  <div className="flex justify-center mb-4">
                    {/* No logo */}
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-indigo-600">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-indigo-600" />
            <h3 className="text-2xl font-semibold">Professional Certifications</h3>
          </div>

          <Tabs defaultValue="business-analysis" className="w-full">
            <TabsList className={`${isMobile ? 'grid-cols-2 flex-wrap' : 'grid-cols-4'} grid mb-6 bg-transparent`}>
              {certificationCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:shadow-soft data-[state=active]:bg-white"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className={isMobile ? "text-xs" : "hidden md:inline"}>{category.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {certificationCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="glassmorphism p-6">
                  <h4 className="font-medium text-indigo-600 mb-4 md:hidden">{category.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col p-4 bg-white/50 rounded-lg shadow-sm card-hover"
                      >
                        <div className="flex justify-center mb-3">
                          {/* No logo */}
                        </div>
                        <h5 className="font-medium text-primary text-center">{cert.name}</h5>
                        <span className="text-sm text-indigo-600 mt-2 text-center">{cert.issuer}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="py-10 px-8 bg-indigo-100 rounded-xl border border-indigo-200">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-indigo-600" />
            <h4 className="text-xl font-semibold">Professional Memberships</h4>
          </div>
          
          <div className="relative overflow-hidden py-4">
            {isMobile ? (
              <div className="grid grid-cols-2 gap-4">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 text-center card-hover">
                    {/* No logo */}
                    <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-1 px-2 text-xs text-center whitespace-nowrap">
                      {membership.name}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
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
                      <div className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 text-center card-hover">
                        {/* No logo */}
                        <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 px-4 text-center">
                          {membership.name}
                        </Badge>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

