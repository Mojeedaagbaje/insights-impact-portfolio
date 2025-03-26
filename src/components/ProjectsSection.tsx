
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const projects = [
    {
      title: "Financial Analytics Dashboard",
      category: "Data Visualization",
      description: "Developed a comprehensive financial analytics dashboard that transformed raw data into actionable insights, resulting in a 15% improvement in decision-making efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "June 2023",
      tags: ["Tableau", "Financial Analysis", "Dashboard Design"]
    },
    {
      title: "Supply Chain Optimization",
      category: "Process Improvement",
      description: "Analyzed and optimized the client's global supply chain processes, identifying bottlenecks and implementing solutions that reduced operational costs by 12%.",
      image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 2023",
      tags: ["Supply Chain", "Process Optimization", "Cost Reduction"]
    },
    {
      title: "Customer Journey Mapping",
      category: "Customer Experience",
      description: "Conducted in-depth customer journey analysis for a retail client, leading to targeted improvements that increased customer satisfaction scores by 18%.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "November 2022",
      tags: ["UX Research", "Customer Mapping", "Retail"]
    },
    {
      title: "Market Entry Strategy",
      category: "Strategic Planning",
      description: "Developed a comprehensive market entry strategy for a technology company expanding into European markets, resulting in successful market penetration.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "August 2022",
      tags: ["Market Analysis", "Strategy", "International Business"]
    },
    {
      title: "Enterprise Software Implementation",
      category: "System Implementation",
      description: "Led the requirements gathering and analysis phase for a major ERP implementation, ensuring alignment between business needs and system capabilities.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 2022",
      tags: ["ERP", "Requirements Analysis", "Enterprise Systems"]
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
