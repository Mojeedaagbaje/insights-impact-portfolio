
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Cloud, Database, Layers } from "lucide-react";

const PortfolioSection = () => {
  const categories = [
    {
      id: "business-analysis",
      name: "Business Analysis & Digital Transformation",
      icon: <FileText className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:text-blue-700",
      hoverBgColor: "hover:bg-blue-50",
      accentColor: "bg-blue-600",
      items: [
        "Business Requirements Document (BRD)",
        "Process Flow Diagrams",
        "Use Case Diagrams & UML Models",
        "Service Blueprint",
        "Business Case & ROI Analysis",
        "Traceability Matrix",
        "Stakeholder Analysis & RACI Matrix",
        "Gap Analysis Report",
        "Vendor Evaluation & RFP/RFI Documentation",
        "Change Management Plan"
      ]
    },
    {
      id: "cloud-finops",
      name: "Cloud & FinOps Strategy",
      icon: <Cloud className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:text-green-700",
      hoverBgColor: "hover:bg-green-50",
      accentColor: "bg-green-600",
      items: [
        "Cloud Adoption & Migration Strategy",
        "FinOps Governance Framework",
        "Cloud Cost Optimization Report",
        "Chargeback & Showback Model",
        "Cloud Architecture & Integration Blueprint",
        "Cloud Literacy & Training Guide"
      ]
    },
    {
      id: "data-ai",
      name: "Data & AI Solutions",
      icon: <Database className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:text-purple-700",
      hoverBgColor: "hover:bg-purple-50",
      accentColor: "bg-purple-600",
      items: [
        "AI Use Case Feasibility Report",
        "Data Strategy & AI Roadmap",
        "Data Governance & Compliance Report",
        "AI Governance Framework",
        "Data Model & Entity-Relationship Diagram (ERD)",
        "Machine Learning Use Case Documentation",
        "Data Pipeline & ETL Workflow Documentation",
        "Automated Data Pipeline Workflow",
        "Data Quality & MDM Framework",
        "AI Chatbot & NLP Implementation Guide"
      ]
    },
    {
      id: "product-agile",
      name: "Product Management & Agile Consulting",
      icon: <Layers className="h-5 w-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:text-orange-700",
      hoverBgColor: "hover:bg-orange-50",
      accentColor: "bg-orange-600",
      items: [
        "Product Roadmap",
        "User Story Mapping & Acceptance Criteria",
        "Backlog Grooming & Refinement Guidelines",
        "Sprint Planning & Agile Implementation Plan",
        "MVP Definition Document",
        "Agile Retrospective Reports",
        "OKR & KPI Tracking for Agile Teams",
        "Go-To-Market (GTM) Strategy",
        "Change Management & Adoption Playbook"
      ]
    }
  ];

  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section id="portfolio" className="bg-amber-50 section-animate">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Browse through samples of my work deliverables across different domains. These documents showcase my approach to solving complex business challenges.
          </p>
        </div>

        <Tabs defaultValue="business-analysis" className="w-full">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className={`data-[state=active]:shadow-soft data-[state=active]:${category.bgColor} data-[state=active]:${category.color}`}
              >
                <div className="flex items-center gap-2">
                  <span className={category.color}>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split('&')[0]}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className={`glassmorphism p-6 ${category.bgColor}`}>
                <h3 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${category.color}`}>
                  {category.icon}
                  <span>{category.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.items.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`justify-start h-auto py-4 px-4 text-left ${category.hoverBgColor} ${category.hoverColor}`}
                      onClick={() => setShowContactForm(true)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`h-2 w-2 rounded-full ${category.accentColor} mt-2`}></div>
                        <span>{item}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see detailed examples of my work? Fill out the contact form to request portfolio samples.
          </p>
          <Button 
            className="button-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Request Portfolio Samples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
