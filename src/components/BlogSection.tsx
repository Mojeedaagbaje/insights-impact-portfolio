
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Mastering Cloud FinOps – Reducing Costs & Maximizing Value",
      excerpt: "Explore strategies for optimizing cloud spending while maximizing business value through effective FinOps practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "July 15, 2023",
      readTime: "8 min read",
      category: "Cloud Computing",
      author: "Mojeed Agbaje"
    },
    {
      title: "AI-Driven Customer Experience – The Future of Digital Innovation",
      excerpt: "Discover how artificial intelligence is transforming customer experience and creating new opportunities for business growth.",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "June 22, 2023",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      author: "Mojeed Agbaje"
    },
    {
      title: "Future-Proofing IT – Scalable Cloud & Data Ecosystems",
      excerpt: "Learn how to build resilient, scalable IT ecosystems that can adapt to changing business needs and technological advances.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2023",
      readTime: "10 min read",
      category: "Digital Transformation",
      author: "Mojeed Agbaje"
    },
    {
      title: "AI-Powered Insights – Transforming Data into Actionable Business Strategies",
      excerpt: "Explore how AI is revolutionizing data analytics and providing deeper insights for strategic decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 18, 2023",
      readTime: "7 min read",
      category: "Data Analytics",
      author: "Mojeed Agbaje"
    },
    {
      title: "Maximizing Project ROI – Strategies for On-Time, Within-Budget Delivery",
      excerpt: "Learn proven techniques for delivering projects that maximize return on investment while meeting time and budget constraints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2023",
      readTime: "9 min read",
      category: "Project Management",
      author: "Mojeed Agbaje"
    }
  ];

  return (
    <section id="blog" className="bg-secondary section-animate">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Blog and Insights</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Explore my latest thoughts, insights, and industry perspectives on business analysis, data visualization, and strategic planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article, index) => (
            <Card key={index} className="overflow-hidden card-hover group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{article.author}</span>
                </div>
                
                <Button variant="ghost" className="group p-0 h-auto text-blue-600">
                  <span className="flex items-center gap-1">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="button-primary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
