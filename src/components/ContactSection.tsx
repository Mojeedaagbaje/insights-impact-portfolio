
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: "hello@mojeedagbaje.com",
      link: "mailto:hello@mojeedagbaje.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Location",
      details: "Calgary, Alberta, Canada",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-container section-animate">
      <div className="mb-16">
        <h2 className="section-title">Get in Touch</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Let's Build Something Great – Together 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="glassmorphism p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <a href={item.link} className="text-muted-foreground hover:text-blue-600 transition-colors">
                      {item.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-3">
                <Button variant="outline" className="flex items-center gap-2 w-full">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" className="flex items-center gap-2 w-full">
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="p-2 bg-blue-50 rounded-md text-blue-600 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 bg-blue-50 rounded-md text-blue-600 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" className="p-2 bg-blue-50 rounded-md text-blue-600 hover:bg-blue-100 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="glassmorphism p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/70"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/70"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="bg-white/70"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="bg-white/70"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="I'd like to discuss a potential project..." 
                  rows={5}
                  className="bg-white/70"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Are you interested in receiving portfolio samples?
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="portfolio" className="h-4 w-4 text-blue-600" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="portfolio" className="h-4 w-4 text-blue-600" />
                    <span>No</span>
                  </label>
                </div>
              </div>
              
              <Button type="submit" className="button-primary flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
