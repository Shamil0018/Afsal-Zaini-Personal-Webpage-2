import { motion } from "framer-motion";
import { UserCheck, Compass, Layout, Users, BarChart3, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";

const impactAreas = [
  {
    icon: UserCheck,
    title: "Reduce owner dependency",
    description: "Move from being the operator to the visionary by building systems that function without your constant presence.",
  },
  {
    icon: Compass,
    title: "Build leadership clarity",
    description: "Define clear paths and decision-making frameworks that empower your team to lead with confidence.",
  },
  {
    icon: Layout,
    title: "Install working systems",
    description: "Operationalize Sales, Ops, Finance, and Team management with custom-built, practical implementation systems.",
  },
  {
    icon: Users,
    title: "Create accountability-driven teams",
    description: "Build a culture where ownership is natural and teams are responsible for results, not just tasks.",
  },
  {
    icon: BarChart3,
    title: "Prepare for long-term scalability",
    description: "Set the structural foundation required to scale your business sustainably and predictably.",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary/60" />
            <span className="text-xs font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
              Impact & Value
            </span>
            <div className="h-[1px] w-8 bg-primary/60" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            What I <span className="text-gradient">Do</span>
          </h2>

          <p className="font-display text-xl md:text-2xl text-slate-100 italic font-light max-w-3xl mx-auto leading-relaxed">
            "Business Transformation Through <span className="text-primary font-normal">FRAMEWORKS</span>, not THEORY"
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlowCard className="h-full border-white/5 bg-white/[0.02] backdrop-blur-sm group hover:border-primary/20 transition-all duration-500">
                <div className="flex flex-col h-full p-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}

          {/* Special CTA Card */}
          <AnimatedSection delay={0.5} className="lg:col-span-1">
            <div className="h-full rounded-3xl p-8 bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex flex-col justify-center text-center shadow-2xl">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-white text-lg font-display font-medium mb-2 italic">
                "No fluff. No over-theory."
              </p>
              <p className="text-slate-200 text-base font-light leading-relaxed">
                Only execution-focused clarity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
