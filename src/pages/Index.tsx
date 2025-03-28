
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
import PortfolioSection from "@/components/PortfolioSection";
import MetricsSection from "@/components/MetricsSection";

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

  // Add cursor effect for services section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('#services .card-hover');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (
          x > 0 && 
          x < rect.width && 
          y > 0 && 
          y < rect.height
        ) {
          (card as HTMLElement).style.boxShadow = `0 0 30px rgba(59, 130, 246, 0.15)`;
          (card as HTMLElement).style.transform = 'translateY(-5px)';
        } else {
          (card as HTMLElement).style.boxShadow = '';
          (card as HTMLElement).style.transform = '';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
          <MetricsSection />
          <ProjectsSection />
          <PortfolioSection />
          <ClientsSection />
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
