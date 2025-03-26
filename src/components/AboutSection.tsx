
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Users, Download } from "lucide-react";

const AboutSection = () => {
  const qualities = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Experience",
      description: "Over 8 years of hands-on experience in business analysis and data-driven decision making."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Results",
      description: "Proven track record of delivering projects that exceed client expectations and business goals."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Client-Focused",
      description: "Dedicated to understanding your unique challenges and delivering tailored solutions."
    }
  ];

  return (
    <section id="about" className="section-container section-animate">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="section-title">Why Work With Me</h2>
          </div>
          
          <p className="text-lg text-muted-foreground">
            As a dedicated Business Analyst, I bridge the gap between complex data and strategic decision-making, transforming raw information into valuable insights that drive business growth and efficiency.
          </p>

          <p className="text-lg text-muted-foreground">
            My analytical approach combines technical expertise with business acumen, allowing me to identify patterns, solve complex problems, and develop strategies that align with your organization's goals and vision.
          </p>

          <div className="pt-4">
            <Button className="button-primary flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {qualities.map((quality, index) => (
            <Card key={index} className="subtle-card card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {quality.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground">{quality.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
