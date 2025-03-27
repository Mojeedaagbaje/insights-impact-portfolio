
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Database, ArrowRight, Code, Cloud, Layers } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Business Analysis & Digital Transformation",
      description: "I bridge the gap between business needs and technology, ensuring seamless process optimization and digital innovation.",
      features: [
        "Business Requirements & Analysis",
        "Process Optimization & Workflow Automation"
      ],
      bgColor: "bg-blue-50",
      hoverColor: "rgb(59, 130, 246, 0.15)", // blue
      borderColor: "hover:border-blue-300"
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "Cloud & FinOps Strategy",
      description: "Optimize cloud investments through cloud strategy, cost management, governance, and performance monitoring.",
      features: [
        "Cloud Adoption & Migration Strategy",
        "Cloud Cost Optimization (Azure, AWS, GCP)"
      ],
      bgColor: "bg-green-50",
      hoverColor: "rgb(22, 163, 74, 0.15)", // green
      borderColor: "hover:border-green-300"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Data & AI Solutions",
      description: "Transform data into actionable insights and align AI/ML solutions with business objectives.",
      features: [
        "Data & AI Strategy & Roadmap",
        "AI/ML Product Development & Integration"
      ],
      bgColor: "bg-purple-50",
      hoverColor: "rgb(147, 51, 234, 0.15)", // purple
      borderColor: "hover:border-purple-300"
    },
    {
      icon: <Layers className="h-8 w-8 text-orange-600" />,
      title: "Product Management & Agile Consulting",
      description: "Deliver scalable, user-centric digital solutions through agile methodologies and strategic product planning.",
      features: [
        "Agile Coaching & SAFe Implementation",
        "Product Roadmap & Sprint Planning"
      ],
      bgColor: "bg-orange-50",
      hoverColor: "rgb(234, 88, 12, 0.15)", // orange
      borderColor: "hover:border-orange-300"
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Enterprise Architecture & IT Solutions",
      description: "Design and implement scalable IT infrastructures to drive efficiency, innovation, and business growth.",
      features: [
        "Data Lakes & Warehousing",
        "CRM & ERP Implementations (SAP, Salesforce)"
      ],
      bgColor: "bg-indigo-50",
      hoverColor: "rgb(79, 70, 229, 0.15)", // indigo
      borderColor: "hover:border-indigo-300"
    }
  ];

  // Add cursor effect for services section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('#services .service-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (
          x > 0 && 
          x < rect.width && 
          y > 0 && 
          y < rect.height
        ) {
          const service = services[index];
          if (service) {
            (card as HTMLElement).style.boxShadow = `0 0 30px ${service.hoverColor}`;
            (card as HTMLElement).style.transform = 'translateY(-5px)';
          }
        } else {
          (card as HTMLElement).style.boxShadow = '';
          (card as HTMLElement).style.transform = '';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-50 section-animate">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">How I Can Support Your Business</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            I offer comprehensive services designed to transform business challenges into opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card glassmorphism overflow-hidden transition-all duration-300 border-[1.5px] border-transparent ${service.borderColor} ${service.bgColor}`}
            >
              <div className="p-6 space-y-4">
                <div className={`p-3 inline-flex rounded-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group p-0 h-auto text-blue-600 hover:text-blue-800 hover:bg-transparent">
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
          <div className="glassmorphism inline-block px-6 py-3 rounded-full bg-blue-50">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <p className="text-primary font-medium">
                Need a custom solution? <Button variant="link" className="text-blue-600 p-0 h-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get in Touch</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
