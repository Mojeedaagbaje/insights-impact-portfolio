
import React from "react";
import { Card } from "@/components/ui/card";

const clients = [
  {
    name: "Ekiti State Government",
    logo: "/lovable-uploads/eb3010ba-887d-48a6-8810-585c36741d61.png",
    industry: "Government",
    bgColor: "bg-green-50",
    hoverBgColor: "hover:bg-green-100",
    borderColor: "border-green-200",
    hoverBorderColor: "hover:border-green-300"
  },
  {
    name: "Afroshop",
    logo: "/lovable-uploads/a5645492-1495-448d-9d97-8bdb9bfd1faf.png",
    industry: "E-commerce",
    bgColor: "bg-orange-50",
    hoverBgColor: "hover:bg-orange-100",
    borderColor: "border-orange-200",
    hoverBorderColor: "hover:border-orange-300"
  },
  {
    name: "Prima Matrix Ltd",
    logo: "/lovable-uploads/416e3639-773c-434b-9fd0-60e3989f8431.png",
    industry: "Technology",
    bgColor: "bg-blue-50",
    hoverBgColor: "hover:bg-blue-100",
    borderColor: "border-blue-200",
    hoverBorderColor: "hover:border-blue-300"
  },
  {
    name: "Eden Life Hospital",
    logo: "/lovable-uploads/af0323e5-d835-4516-b8cf-15f9d87692d9.png",
    industry: "Healthcare",
    bgColor: "bg-pink-50",
    hoverBgColor: "hover:bg-pink-100",
    borderColor: "border-pink-200",
    hoverBorderColor: "hover:border-pink-300"
  },
  {
    name: "Government of Alberta",
    logo: "/lovable-uploads/28a6ec74-0f4a-4009-9fab-9174ce01d26d.png",
    industry: "Government",
    bgColor: "bg-teal-50",
    hoverBgColor: "hover:bg-teal-100",
    borderColor: "border-teal-200",
    hoverBorderColor: "hover:border-teal-300"
  },
  {
    name: "SpidLit Logistics",
    logo: "/lovable-uploads/58ce8b6a-1e34-4fa7-b65f-4828142a8113.png",
    industry: "Logistics",
    bgColor: "bg-emerald-50",
    hoverBgColor: "hover:bg-emerald-100",
    borderColor: "border-emerald-200",
    hoverBorderColor: "hover:border-emerald-300"
  },
  {
    name: "Provincial Health Services Authority (PHSA)",
    logo: "/lovable-uploads/7ca25041-2f8e-4690-a45b-27ce15510aa4.png",
    industry: "Healthcare",
    bgColor: "bg-purple-50",
    hoverBgColor: "hover:bg-purple-100",
    borderColor: "border-purple-200",
    hoverBorderColor: "hover:border-purple-300"
  }
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const imgElement = e.currentTarget;
  imgElement.onerror = null; // Prevent infinite loops
  imgElement.src = "https://via.placeholder.com/150x60?text=" + encodeURIComponent(imgElement.alt);
};

const ClientsSection = () => {
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
                  onError={handleImageError}
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
