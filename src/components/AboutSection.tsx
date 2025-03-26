
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Users, Download, CheckCircle, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "$300K+ in Cost Savings",
      description: "For clients through process optimization and strategic implementations"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "50% Revenue Growth",
      description: "Achieved for clients through data-driven strategies and digital transformation"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "20%+ Cloud Cost Savings",
      description: "Through FinOps best practices and optimization strategies"
    }
  ];

  const qualities = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Proven Expertise",
      description: "Certified Business Analyst, Agile Coach, and Project Manager with 12+ years of experience in Data, AI, Healthcare, E-commerce, Education, and Finance."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Commitment to Excellence",
      description: "I specialize in cutting-edge strategies, data-driven insights, and business process optimization to keep organizations ahead of the curve."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Flexible and Adaptive",
      description: "Every business is unique—so are my solutions. I take an agile approach to tailor strategies that adapt to evolving market conditions."
    }
  ];

  const practices = [
    "Secure & Compliant",
    "Optimized for Scalability",
    "Market-Leading & Future-Proof"
  ];

  return (
    <section id="about" className="section-container section-animate">
      <div className="mb-12">
        <h2 className="section-title">Why Work With Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            I've led digital transformation initiatives of all sizes, driving measurable business growth through strategic implementations and process optimization. I focus on delivering real, impactful outcomes—reducing costs, increasing efficiency, and driving scalable, sustainable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-5 subtle-card card-hover">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {achievement.icon}
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Best-in-Class Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {practices.map((practice, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>

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
