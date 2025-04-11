
import React from "react";
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    {
      name: "Provincial Health Services Authority (PHSA)",
      logo: "/lovable-uploads/7ca25041-2f8e-4690-a45b-27ce15510aa4.png",
      industry: "Healthcare",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-300"
    },
    {
      name: "Frontier Vista Global Inc.",
      logo: "/lovable-uploads/795e624a-3039-4c07-8de3-4367a714d99c.png",
      industry: "Technology",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300"
    },
    {
      name: "Prima Matrix Ltd.",
      logo: "/lovable-uploads/eba00fd7-6095-497f-ae71-8941dcb07429.png",
      industry: "Consulting",
      bgColor: "bg-indigo-50",
      hoverBgColor: "hover:bg-indigo-100",
      borderColor: "border-indigo-200",
      hoverBorderColor: "hover:border-indigo-300"
    },
    {
      name: "Nova Peer Inc.",
      logo: "/lovable-uploads/9db82d66-2529-43ca-a00c-a9f837c25796.png",
      industry: "Finance",
      bgColor: "bg-yellow-50",
      hoverBgColor: "hover:bg-yellow-100",
      borderColor: "border-yellow-200",
      hoverBorderColor: "hover:border-yellow-300"
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
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-center text-sm font-medium mt-2">{client.name}</p>
              <p className="text-xs text-muted-foreground">{client.industry}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
