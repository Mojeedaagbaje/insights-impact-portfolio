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
      logo: "/lovable-uploads/a7c15a4b-9760-4325-9c56-a275bcc72c56.png", // University of Ilorin logo
      period: "2010",
      description: "Focus on business and technology applications."
    },
    {
      degree: "Master of Science (M.Sc.)",
      institution: "Obafemi Awolowo University",
      logo: "/lovable-uploads/64eda1f4-966f-4cdd-9b9a-3fd354d6d5b2.png", // Obafemi Awolowo University logo
      period: "2017",
      description: "Specialized in strategic business management and technology implementation."
    },
    {
      degree: "Postgraduate Diploma in Data Science and AI",
      institution: "University of Texas, Austin",
      logo: "/lovable-uploads/6f25ae04-55d9-443e-91b9-74a90011951c.png", // University of Texas, Austin logo
      period: "2025",
      description: "Advanced studies in artificial intelligence, machine learning, and data analytics."
    },
    {
      degree: "Project Management in Global Health",
      institution: "University of Washington",
      logo: "/lovable-uploads/6e8b1f2d-3a50-48b1-85dd-82523bebeafa.png", // University of Washington logo
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
        { name: "Certified Business Analysis Professional (CBAP)", issuer: "IIBA", logo: "/lovable-uploads/dac36a35-0068-4f97-b05d-8b1cecdc1b15.png" },
        { name: "Project Management Professional (PMP)", issuer: "PMI", logo: "/lovable-uploads/4926ae77-9fd4-4013-b124-e7e1ab528dc4.png" },
        { name: "Certified SAFe 6 Agilist", issuer: "Scaled Agile", logo: "/lovable-uploads/9253c9e0-584a-43fc-aecf-c6b96f01a207.png" },
        { name: "Advanced Certified Scrum Master (A-CSM)", issuer: "Scrum Alliance", logo: "/lovable-uploads/8dff2459-1cff-48c1-a437-bcee85db6e7c.png" },
        { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", logo: "/lovable-uploads/8dff2459-1cff-48c1-a437-bcee85db6e7c.png" }
      ]
    },
    {
      id: "product-ai",
      title: "Product & AI Certifications",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "AI-First Product Leader", issuer: "PMI", logo: "/lovable-uploads/4926ae77-9fd4-4013-b124-e7e1ab528dc4.png" },
        { name: "Implementing Responsible AI", issuer: "LinkedIn", logo: "/lovable-uploads/38bb4361-84dd-4d2c-8f40-f29717979574.png" },
        { name: "Generative AI Fundamentals", issuer: "NVIDIA", logo: "/lovable-uploads/b4c369e2-3302-4b69-bdcc-debb42d72986.png" }
      ]
    },
    {
      id: "cloud-finops",
      title: "Cloud & FinOps",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "AWS Technical Essentials", issuer: "AWS", logo: "/lovable-uploads/5f4e3777-800d-4d04-a601-bde421c8d485.png" },
        { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", logo: "/lovable-uploads/48721c56-3b15-4d9f-a398-ecfe1a9ffb2e.png" },
        { name: "FinOps Masterclass (Cost Optimization)", issuer: "Udemy", logo: "/lovable-uploads/77deb6bc-9c40-4d78-876d-343e484b6be9.png" }
      ]
    },
    {
      id: "it-service",
      title: "IT Service & Automation",
      icon: <BookOpen className="h-5 w-5" />,
      certifications: [
        { name: "ITIL V4 Foundation Certification", issuer: "Axelos", logo: "/lovable-uploads/5ab44297-d953-44ee-b8a0-921f4843edef.png" },
        { name: "Lean Six Sigma Yellow Belt", issuer: "6sigmastudy", logo: "/lovable-uploads/b4c369e2-3302-4b69-bdcc-debb42d72986.png" },
        { name: "Certified Cybersecurity", issuer: "ISC2", logo: "/lovable-uploads/1d94d0d8-b717-4200-a636-d155aa27c44c.png" }
      ]
    }
  ];

  const memberships = [
    { name: "IIBA", logo: "/lovable-uploads/dac36a35-0068-4f97-b05d-8b1cecdc1b15.png" },
    { name: "TBM Council", logo: "/lovable-uploads/71f72bed-56b0-48a5-8166-ea9fdc7cbae5.png" }, 
    { name: "FinOps Foundation", logo: "/lovable-uploads/b4c369e2-3302-4b69-bdcc-debb42d72986.png" }, 
    { name: "PMI", logo: "/lovable-uploads/4926ae77-9fd4-4013-b124-e7e1ab528dc4.png" }, 
    { name: "ISC2", logo: "/lovable-uploads/1d94d0d8-b717-4200-a636-d155aa27c44c.png" },
    { name: "Scrum Alliance", logo: "/lovable-uploads/8dff2459-1cff-48c1-a437-bcee85db6e7c.png" }, 
    { name: "SAFe", logo: "/lovable-uploads/9253c9e0-584a-43fc-aecf-c6b96f01a207.png" }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null; // Prevent infinite loops
    imgElement.src = "https://via.placeholder.com/80x80?text=" + encodeURIComponent(imgElement.alt);
  };

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
                    <img 
                      src={item.logo} 
                      alt={`${item.institution} logo`} 
                      className="h-12 object-contain" 
                      onError={handleImageError}
                    />
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
                          <img 
                            src={cert.logo} 
                            alt={`${cert.issuer} logo`} 
                            className="h-10 object-contain" 
                            onError={handleImageError}
                          />
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
                    <img 
                      src={membership.logo} 
                      alt={membership.name} 
                      className="w-16 h-16 object-contain mb-2" 
                      onError={handleImageError}
                    />
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
                        <img 
                          src={membership.logo} 
                          alt={membership.name} 
                          className="w-20 h-20 object-contain mb-2" 
                          onError={handleImageError}
                        />
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
