
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, GraduationCap, Star, MessageSquare, 
  Code, Users, FileText, CheckCircle, ChevronDown 
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-animate");
    sections.forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSections = () => {
    if (sectionsRef.current) {
      sectionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main>
        <HeroSection onScrollDown={scrollToSections} />
        
        <div ref={sectionsRef}>
          <ServicesSection />
          <AboutSection />
          <CompetenciesSection />
          <ClientsSection />
          <ProjectsSection />
          <TechnologiesSection />
          <EducationSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
