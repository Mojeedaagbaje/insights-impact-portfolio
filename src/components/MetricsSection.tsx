
import React from "react";
import { Card } from "@/components/ui/card";

const MetricsSection = () => {
  const clientStats = [
    { value: "$155M+", label: "in Managed Projects", colorClass: "text-blue-600", bgClass: "bg-blue-50" },
    { value: "40+", label: "Clients Served", colorClass: "text-green-600", bgClass: "bg-green-50" },
    { value: "4.8", label: "CSAT Rating", colorClass: "text-yellow-600", bgClass: "bg-yellow-50" },
    { value: "80+", label: "Projects Completed", colorClass: "text-purple-600", bgClass: "bg-purple-50" },
    { value: "8+", label: "Industries", colorClass: "text-indigo-600", bgClass: "bg-indigo-50" }
  ];

  return (
    <section id="metrics" className="bg-gradient-to-b from-gray-50 to-white section-animate">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Key Metrics</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable results and consistent excellence across projects and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {clientStats.map((stat, index) => (
            <Card 
              key={index} 
              className={`p-6 text-center glassmorphism card-hover border-[1.5px] border-transparent hover:border-blue-300 ${stat.bgClass}`}
            >
              <p className={`text-3xl font-bold ${stat.colorClass} mb-2`}>{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
