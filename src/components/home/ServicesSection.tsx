import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Lightbulb, Briefcase, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";

const services = [
  {
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description: "Scale your business with proven strategies for revenue growth and market expansion.",
  },
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "One-on-one guidance to solve complex business challenges and achieve your goals.",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams that drive results and foster innovation.",
  },
  {
    icon: Lightbulb,
    title: "Startup Mentoring",
    description: "Launch your venture with confidence using structured frameworks and expert guidance.",
  },
  {
    icon: Briefcase,
    title: "Business Systems",
    description: "Create efficient operational systems that scale with your growing business.",
  },
  {
    icon: Rocket,
    title: "Life Transformation",
    description: "Align personal growth with business success for holistic transformation.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            What I Do
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions to transform your business and personal growth journey
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlowCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
