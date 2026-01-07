import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-background">
      {/* Background gradients and glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
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
              {/* Specialized Glow for the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl -z-10" />

              <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                    Scale Smarter. <br />
                    <span className="text-gradient">Lead Better.</span>
                  </h2>
                </motion.div>

                <p className="font-display text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed italic">
                  "The bridge between where you are and where you want to be is built with <span className="text-white font-normal underline decoration-primary/30 underline-offset-8">systems</span>."
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <Button asChild size="lg" className="h-14 px-10 text-lg rounded-2xl group shadow-lg shadow-primary/20">
                    <Link to="/contact">
                      Schedule Your Strategy Audit
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-white/10 hover:bg-white/5 rounded-2xl">
                    <Link to="/courses">
                      Explore Programs
                    </Link>
                  </Button>
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
