
import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Clock, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      title: "Business Analysis & Agile",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      certifications: [
        { name: "Certified Business Analysis Professional (CBAP)", issuer: "IIBA", date: "2018" },
        { name: "Project Management Professional (PMP)", issuer: "PMI", date: "2017" },
        { name: "Certified SAFe 6 Agilist", issuer: "Scaled Agile", date: "2022" },
        { name: "Advanced Certified Scrum Master (A-CSM)", issuer: "Scrum Alliance", date: "2021" },
        { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", date: "2020" }
      ]
    },
    {
      title: "Product & AI Certifications",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      certifications: [
        { name: "AI-First Product Leader", issuer: "PMI", date: "2023" },
        { name: "Implementing Responsible AI", issuer: "LinkedIn", date: "2022" },
        { name: "Generative AI Fundamentals", issuer: "NVIDIA", date: "2023" }
      ]
    },
    {
      title: "Cloud & FinOps",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      certifications: [
        { name: "AWS Technical Essentials", issuer: "AWS", date: "2021" },
        { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "2020" },
        { name: "FinOps Masterclass (Cost Optimization)", issuer: "Udemy", date: "2022" }
      ]
    },
    {
      title: "IT Service & Automation",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      certifications: [
        { name: "ITIL V4 Foundation Certification", issuer: "Axelos", date: "2019" },
        { name: "Lean Six Sigma Yellow Belt", issuer: "6sigmastudy", date: "2018" },
        { name: "Certified Cybersecurity", issuer: "ISC2", date: "2022" }
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

            <div className="space-y-8">
              {certificationCategories.map((category, catIndex) => (
                <div key={catIndex} className="space-y-4">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h4 className="text-lg font-medium">{category.title}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.certifications.map((cert, index) => (
                      <Card key={index} className="p-4 glassmorphism card-hover">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <h5 className="font-semibold text-primary line-clamp-2">{cert.name}</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <div className="flex items-center gap-1 text-xs text-blue-600">
                            <Clock className="h-3 w-3" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <h4 className="text-lg font-medium">Professional Memberships</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {memberships.map((membership, index) => (
                  <Badge key={index} className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                    {membership}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
