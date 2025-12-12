import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Rocket, User, Brain, Code } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: TrendingUp,
    title: "Business Growth Mastery",
    description: "Complete program to grow sales, revenue & build business systems.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Rocket,
    title: "Startup Launch Program",
    description: "From zero to launch with planning, validation & branding.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: User,
    title: "Personal Consulting (1:1)",
    description: "One-to-one business problem solving & personalized strategies.",
    color: "from-primary/20 to-primary/5",
  },
];

import { TrendingUp } from "lucide-react";

const CoursesPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Programs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-foreground text-lg max-w-xl">
              Transform your entrepreneurial journey with our comprehensive programs
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Button asChild variant="outline" className="group">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />
                
                {/* Card content */}
                <div className="relative p-8 border border-border/50 rounded-3xl h-full bg-card/50 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-white mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
