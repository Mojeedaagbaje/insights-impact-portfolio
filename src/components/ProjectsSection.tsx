
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const projects = [
    {
      title: "NovaPeer X Application & Website",
      category: "FinTech",
      description: "Developed a cross-border payment platform, leading the end-to-end design and deployment, creating a seamless user experience for international transactions.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2023",
      tags: ["Digital Payments", "UX/UI Design", "Cross-border Platform"]
    },
    {
      title: "Frontier Vista Global Inc. Digital Presence",
      category: "Web Development",
      description: "Developed a world-class digital presence to align with the company's business objectives, enhancing brand visibility and customer engagement through strategic design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2022",
      tags: ["Digital Branding", "Web Development", "UX Design"]
    },
    {
      title: "Government of Alberta - Federated Data Ecosystem",
      category: "Data & AI",
      description: "Led the development of a Federated Data Ecosystem & Data Marketplace, creating data management strategies and guidelines for government-wide implementation.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2022",
      tags: ["Government", "Data Management", "Policy Development"]
    },
    {
      title: "Government of Alberta - Predictive AI Models",
      category: "Artificial Intelligence",
      description: "Developed Predictive AI Models for Fraud Detection & Risk Analysis, enhancing government operational efficiency and risk management capabilities.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2021",
      tags: ["AI/ML", "Predictive Analytics", "Fraud Detection"]
    },
    {
      title: "Afroshop E-commerce Platform",
      category: "E-commerce",
      description: "Led the largest Afro-Caribbean grocery marketplace in Canada through a full digital transformation, enhancing user experience and operational efficiency.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2020",
      tags: ["E-commerce", "Digital Transformation", "UX Research"]
    }
  ];

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <section id="projects" className="section-container section-animate">
      <div className="mb-16">
        <h2 className="section-title">Recent Projects</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Explore a selection of my recent projects that showcase my analytical approach and the tangible business impact delivered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <Card key={index} className="overflow-hidden card-hover group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                  {project.category}
                </Badge>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <Calendar className="h-3 w-3" />
                {project.date}
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="bg-blue-50">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button variant="ghost" className="group p-0 h-auto text-blue-600">
                <span className="flex items-center gap-1">
                  View case study
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="mt-12 text-center">
          <Button 
            onClick={showMoreProjects}
            className="button-primary flex items-center gap-2"
          >
            View More Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
