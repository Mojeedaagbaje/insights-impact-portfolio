
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Working with this business analyst transformed our approach to data. Their insights helped us identify untapped opportunities and streamline our operations in ways we hadn't considered.",
      author: "Jennifer Chen",
      position: "COO, TechSolutions Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The depth of analysis provided was impressive. They didn't just analyze our data but took the time to understand our business objectives, resulting in recommendations that were both practical and strategic.",
      author: "Michael Rodriguez",
      position: "CFO, Global Retail Partners",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Their ability to translate complex data into actionable insights is remarkable. The visualizations and reports they created have become essential tools for our executive decision-making process.",
      author: "Sarah Thompson",
      position: "CEO, Healthcare Innovations",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-container section-animate">
      <div className="mb-16 text-center">
        <h2 className="section-title mx-auto after:left-1/3">Testimonials</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover what clients say about working with me and the impact of my analytical services on their businesses.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card className="glassmorphism p-8 md:p-12">
          <div className="absolute top-8 left-8 text-blue-600/20">
            <Quote className="h-20 w-20" />
          </div>
          
          <div className="relative z-10">
            <div key={activeIndex} className="animate-fade-in">
              <blockquote className="text-xl md:text-2xl italic text-primary mb-8 relative z-10">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonials[activeIndex].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-1 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-6 bg-blue-600" : "w-2 bg-blue-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
