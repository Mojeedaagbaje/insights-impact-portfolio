
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-20 bg-cover bg-center opacity-10"
           style={{ backgroundImage: "url('/lovable-uploads/97188b60-d353-4d46-b078-4301ce0f9f20.png')" }}>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full animate-float blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-100/20 rounded-full animate-float blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
        <div className="text-center space-y-10">
          <div className="space-y-6 animate-slide-up">
            <p className="text-2xl sm:text-3xl font-medium text-blue-600">
              Hi, I am Mojeed Agbaje
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-primary">
              I Transform <span className="text-blue-600">Insights</span> into <span className="text-blue-600">Impact</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
              Empowering businesses with tailored strategies, innovative solutions, and sustainable growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              className="button-primary text-base px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Services
            </Button>
            <Button 
              variant="outline" 
              className="text-base px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={onScrollDown}
              className="rounded-full h-12 w-12"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
