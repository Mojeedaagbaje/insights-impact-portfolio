
import React from "react";
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    {
      name: "Frontier Vista Global Inc.",
      logo: "https://via.placeholder.com/150x60?text=Frontier+Vista",
      industry: "Technology",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300"
    },
    {
      name: "Government of Alberta – Ministry of Technology & Innovation",
      logo: "https://via.placeholder.com/150x60?text=Gov+Alberta",
      industry: "Government",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-300"
    },
    {
      name: "Provincial Health Services Authority (PHSA)",
      logo: "https://via.placeholder.com/150x60?text=PHSA",
      industry: "Healthcare",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-300"
    },
    {
      name: "Nova Peer Inc.",
      logo: "https://via.placeholder.com/150x60?text=Nova+Peer",
      industry: "Finance",
      bgColor: "bg-yellow-50",
      hoverBgColor: "hover:bg-yellow-100",
      borderColor: "border-yellow-200",
      hoverBorderColor: "hover:border-yellow-300"
    },
    {
      name: "Prima Matrix Ltd.",
      logo: "https://via.placeholder.com/150x60?text=Prima+Matrix",
      industry: "Consulting",
      bgColor: "bg-indigo-50",
      hoverBgColor: "hover:bg-indigo-100",
      borderColor: "border-indigo-200",
      hoverBorderColor: "hover:border-indigo-300"
    },
    {
      name: "Afroshop",
      logo: "https://via.placeholder.com/150x60?text=Afroshop",
      industry: "E-commerce",
      bgColor: "bg-orange-50",
      hoverBgColor: "hover:bg-orange-100",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-300"
    },
    {
      name: "PAGE Financials",
      logo: "https://via.placeholder.com/150x60?text=PAGE+Financials",
      industry: "Financial Services",
      bgColor: "bg-red-50",
      hoverBgColor: "hover:bg-red-100",
      borderColor: "border-red-200",
      hoverBorderColor: "hover:border-red-300"
    },
    {
      name: "Eden Life Hospital",
      logo: "https://via.placeholder.com/150x60?text=Eden+Life",
      industry: "Healthcare",
      bgColor: "bg-teal-50",
      hoverBgColor: "hover:bg-teal-100",
      borderColor: "border-teal-200",
      hoverBorderColor: "hover:border-teal-300"
    }
  ];

  return (
    <section id="clients" className="section-animate bg-teal-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Trusted Clients</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            I've had the privilege of working with diverse organizations across various industries, helping them solve complex problems and achieve their business objectives.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className={`p-6 flex flex-col items-center justify-center glassmorphism card-hover ${client.bgColor} ${client.hoverBgColor} border ${client.borderColor} ${client.hoverBorderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-md`}
            >
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
