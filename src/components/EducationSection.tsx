
import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Clock } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Business Analytics",
      institution: "Stanford University",
      period: "2014 - 2016",
      description: "Specialized in predictive modeling and data visualization with a focus on business intelligence systems."
    },
    {
      degree: "Bachelor of Science in Economics",
      institution: "University of California, Berkeley",
      period: "2010 - 2014",
      description: "Graduated with honors, with a minor in Computer Science. Focus on statistical analysis and economic modeling."
    }
  ];

  const certifications = [
    {
      name: "Certified Business Analysis Professional (CBAP)",
      issuer: "International Institute of Business Analysis",
      date: "2018"
    },
    {
      name: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "2017"
    },
    {
      name: "Data Science Specialization",
      issuer: "Coursera & Johns Hopkins University",
      date: "2019"
    },
    {
      name: "Tableau Desktop Certified Associate",
      issuer: "Tableau",
      date: "2020"
    }
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
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-5 glassmorphism card-hover">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary line-clamp-2">{cert.name}</h4>
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
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
