
import React from "react";
import { Card } from "@/components/ui/card";

const MetricsSection = () => {
  const clientStats = [
    { value: "12+", label: "Years of Experience" },
    { value: "$155M+", label: "in Managed Projects" },
    { value: "40+", label: "Clients Served" },
    { value: "4.8", label: "CSAT Rating" },
    { value: "80+", label: "Projects Completed" },
    { value: "8+", label: "Industries" }
  ];

  return (
    <section id="metrics" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto after:left-1/3">Key Metrics</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable results and consistent excellence across projects and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {clientStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center glassmorphism card-hover">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
