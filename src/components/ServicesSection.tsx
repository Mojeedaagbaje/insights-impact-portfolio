
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Search, FileText, PieChart, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Business Requirements Analysis",
      description: "Comprehensive gathering and documentation of business requirements to ensure alignment with organizational objectives.",
      features: ["Stakeholder Interviews", "Requirements Documentation", "Gap Analysis", "Acceptance Criteria Definition"]
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "Data Analysis & Reporting",
      description: "In-depth analysis of business data to uncover insights and trends that inform strategic decision-making.",
      features: ["Statistical Analysis", "Predictive Modeling", "Interactive Dashboards", "Trend Identification"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Process Optimization",
      description: "Identification and implementation of improvements to business processes for enhanced efficiency and reduced costs.",
      features: ["Process Mapping", "Bottleneck Analysis", "Automation Opportunities", "Continuous Improvement"]
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Strategic Planning",
      description: "Development of data-backed strategies to achieve business goals and gain competitive advantage.",
      features: ["Market Analysis", "SWOT Assessment", "Risk Management", "Implementation Roadmaps"]
    }
  ];

  return (
    <section id="services" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">How I Can Support Your Business</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            I offer a comprehensive suite of business analysis services designed to help your organization make data-driven decisions, optimize processes, and achieve strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glassmorphism overflow-hidden card-hover">
              <div className="p-8 space-y-6">
                <div className="p-3 bg-blue-50 inline-flex rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group p-0 h-auto text-blue-600">
                  <span className="flex items-center gap-1">
                    Learn more 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glassmorphism inline-block px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <p className="text-primary font-medium">
                Need a custom solution? <Button variant="link" className="text-blue-600 p-0 h-auto">Let's discuss your requirements</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
