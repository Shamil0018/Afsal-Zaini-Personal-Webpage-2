import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

import img31 from "@/assets/image 31.jpeg";
import img32 from "@/assets/image 32.jpeg";
import img33 from "@/assets/image 33.jpeg";

const programs = [
  {
    title: "Boss Backbone",
    subtitle: "2026 Leadership & System Mastery",
    image: img31,
    features: [
      "Clear leadership identity",
      "Strong system foundation",
      "Accountable teams",
      "Growth without burnout"
    ],
    formats: "One-to-One Prime • One-Day Intensive",
    accent: "from-primary/20 to-primary/5",
    icon: ShieldCheck
  },
  {
    title: "BFP – Boss FrameX Plan",
    subtitle: "2-Month Business Structure Program",
    image: img32,
    features: [
      "Direction setting",
      "Core system building",
      "Role clarity",
      "Daily execution discipline"
    ],
    formats: "Foundation Program",
    accent: "from-accent/20 to-accent/5",
    icon: Zap
  },
  {
    title: "Backbone FrameX Plan",
    subtitle: "3–12 Months Transformation",
    image: img33,
    features: [
      "Owner-run → System-run",
      "SOP creation & Execution rhythm",
      "Accountability tracking",
      "Owner liberation (20% model)"
    ],
    formats: "Scale & Transition Program",
    accent: "from-slate-500/20 to-slate-500/5",
    icon: Layers
  }
];

const CoursesPreview = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary/60" />
              <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                Expert Guidance
              </span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              SIGNATURE <span className="text-gradient">PROGRAMS</span>
            </h2>
            <p className="text-slate-400 text-xl font-light max-w-2xl leading-relaxed">
              Premium execution-driven coaching designed for owners who prioritize <span className="text-white font-medium">clarity over theory.</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 group">
              <Link to="/courses">
                Explore All Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-primary/90 text-sm font-medium tracking-wide uppercase">
                      {program.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary/40 mt-0.5" />
                        <span className="text-slate-400 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-4">
                      {program.formats}
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-white text-sm font-medium hover:text-primary transition-colors group/link"
                    >
                      Check Availability
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
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
