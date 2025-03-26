
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

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

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5 text-blue-600" />, label: "Location", value: "Canada" },
    { icon: <Phone className="h-5 w-5 text-blue-600" />, label: "Phone", value: "(825) 343-8445" },
    { icon: <Mail className="h-5 w-5 text-blue-600" />, label: "Email", value: "hello@mojeedagbaje.com" }
  ];

  return (
    <section id="clients" className="section-animate">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Trusted Clients</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            I've had the privilege of working with diverse organizations across various industries, helping them solve complex problems and achieve their business objectives.
          </p>
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
        
        {/* Contact Information Footer Banner */}
        <div className="mt-16 p-8 glassmorphism rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Mojeed Agbaje</h3>
              <p className="text-muted-foreground">Business Analysis & Digital Transformation Expert</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-full">{item.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
