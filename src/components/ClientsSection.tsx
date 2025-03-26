
import React from "react";
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    {
      name: "Acme Corporation",
      logo: "https://via.placeholder.com/150x60?text=Acme+Corp",
      industry: "Technology"
    },
    {
      name: "Global Finances",
      logo: "https://via.placeholder.com/150x60?text=Global+Finances",
      industry: "Financial Services"
    },
    {
      name: "Retail Partners",
      logo: "https://via.placeholder.com/150x60?text=Retail+Partners",
      industry: "Retail"
    },
    {
      name: "Health Innovations",
      logo: "https://via.placeholder.com/150x60?text=Health+Innovations",
      industry: "Healthcare"
    },
    {
      name: "Tech Solutions",
      logo: "https://via.placeholder.com/150x60?text=Tech+Solutions",
      industry: "Software"
    },
    {
      name: "Manufacturing Excellence",
      logo: "https://via.placeholder.com/150x60?text=Manufacturing+Excellence",
      industry: "Manufacturing"
    }
  ];

  const clientStats = [
    { value: "40+", label: "Clients Served" },
    { value: "95%", label: "Client Retention" },
    { value: "120+", label: "Projects Completed" },
    { value: "15+", label: "Industries" }
  ];

  return (
    <section id="clients" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Trusted Clients</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            I've had the privilege of working with diverse organizations across various industries, helping them solve complex problems and achieve their business objectives.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
          {clients.map((client, index) => (
            <Card key={index} className="p-6 flex items-center justify-center glassmorphism card-hover">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center glassmorphism card-hover">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
