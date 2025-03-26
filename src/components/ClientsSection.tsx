
import React from "react";
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    {
      name: "Frontier Vista Global Inc.",
      logo: "https://via.placeholder.com/150x60?text=Frontier+Vista",
      industry: "Technology"
    },
    {
      name: "Government of Alberta – Ministry of Technology & Innovation",
      logo: "https://via.placeholder.com/150x60?text=Gov+Alberta",
      industry: "Government"
    },
    {
      name: "Provincial Health Services Authority (PHSA)",
      logo: "https://via.placeholder.com/150x60?text=PHSA",
      industry: "Healthcare"
    },
    {
      name: "Nova Peer Inc.",
      logo: "https://via.placeholder.com/150x60?text=Nova+Peer",
      industry: "Finance"
    },
    {
      name: "Prima Matrix Ltd.",
      logo: "https://via.placeholder.com/150x60?text=Prima+Matrix",
      industry: "Consulting"
    },
    {
      name: "Afroshop",
      logo: "https://via.placeholder.com/150x60?text=Afroshop",
      industry: "E-commerce"
    },
    {
      name: "PAGE Financials",
      logo: "https://via.placeholder.com/150x60?text=PAGE+Financials",
      industry: "Financial Services"
    },
    {
      name: "Eden Life Hospital",
      logo: "https://via.placeholder.com/150x60?text=Eden+Life",
      industry: "Healthcare"
    }
  ];

  const clientStats = [
    { value: "12+", label: "Years of Experience" },
    { value: "$155M+", label: "in Managed Projects" },
    { value: "40+", label: "Clients Served" },
    { value: "4.8", label: "CSAT Rating" },
    { value: "80+", label: "Projects Completed" },
    { value: "8+", label: "Industries" }
  ];

  return (
    <section id="clients" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Trusted Clients & Key Metrics</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            I've had the privilege of working with diverse organizations across various industries, helping them solve complex problems and achieve their business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center glassmorphism card-hover">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {clients.map((client, index) => (
            <Card key={index} className="p-6 flex flex-col items-center justify-center glassmorphism card-hover">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity mb-3"
              />
              <p className="text-center text-sm font-medium">{client.name}</p>
              <p className="text-xs text-muted-foreground">{client.industry}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
