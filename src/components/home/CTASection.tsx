import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background gradients and glows */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[200px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl -z-10" />

              <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-8"
                >
                  <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-6 block">Ready to Evolve?</span>
                  <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight italic">
                    "Your business doesn't need more effort. <br className="hidden md:block" />
                    It needs <span className="text-gradient">better systems.</span>"
                  </h2>
                </motion.div>

                {/* <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                  {[
                    "Eliminate Daily Chaos",
                    "Build Accountability",
                    "Engineer Future Growth"
                  ].map((text, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium text-slate-300 uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div> */}

                <div className="space-y-12">
                  <p className="font-display text-3xl text-white font-bold tracking-tight">
                    Let’s work together.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl group shadow-xl shadow-primary/20">
                      <Link to="/contact">
                        Book a Strategy Session
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg font-bold border-white/10 hover:bg-white/5 rounded-2xl group">
                      <Link to="/courses">
                        Join BizZen Programs
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
