
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Search, FileText, Database, PieChart, ArrowRight, Code, Cloud, BarChart, Layers } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Business Analysis & Digital Transformation",
      description: "I bridge the gap between business needs and technology, ensuring seamless process optimization and digital innovation.",
      features: [
        "Business Requirements & Analysis",
        "Process Optimization & Workflow Automation",
        "Business Case Development & ROI Analysis"
      ],
      note: "Define clear business requirements, streamline workflows, and drive impactful transformation through data-driven insights."
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud & FinOps Strategy",
      description: "Optimize cloud investments through cloud strategy, cost management, governance, and performance monitoring.",
      features: [
        "Cloud Adoption & Migration Strategy",
        "Cloud Cost Optimization (Azure, AWS, GCP)",
        "FinOps Governance & Financial Transparency"
      ],
      note: "Analyze cloud adoption needs, conduct readiness assessments, enhance cloud cost visibility, implement FinOps best practices, and create training materials."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Data & AI Solutions",
      description: "Transform data into actionable insights and align AI/ML solutions with business objectives.",
      features: [
        "Data & AI Strategy & Roadmap",
        "AI/ML Product Development & Integration",
        "Data Governance & Analytics"
      ],
      note: "Define AI use cases, develop governance frameworks, and optimize data pipelines for advanced analytics."
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-600" />,
      title: "Product Management & Agile Consulting",
      description: "Deliver scalable, user-centric digital solutions through agile methodologies and strategic product planning.",
      features: [
        "Agile Coaching & SAFe Implementation",
        "Product Roadmap & Sprint Planning",
        "Change Management & User Adoption"
      ],
      note: "Define product vision, develop user stories, and accelerate delivery through stakeholder collaboration."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Architecture & IT Solutions",
      description: "Design and implement scalable IT infrastructures to drive efficiency, innovation, and business growth.",
      features: [
        "Data Lakes & Warehousing",
        "CRM & ERP Implementations (SAP, Salesforce, ServiceNow)"
      ],
      note: "Define data governance, map data flow, and support UAT testing."
    }
  ];

  return (
    <section id="services" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">How I Can Support Your Business</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            I offer comprehensive services designed to transform business challenges into opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                  <p className="text-sm text-blue-600">📌 {service.note}</p>
                </div>
                
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
