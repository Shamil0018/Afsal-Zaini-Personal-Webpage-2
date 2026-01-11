import { motion } from "framer-motion";
import { Rocket, CheckCircle2, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import img15 from "@/assets/image 13.png";

const targetAudience = [
  "Business Owners & Founders",
  "MSMEs & Growing Enterprises",
  "Service Sector Leaders",
  "B2B & B2C Entrepreneurs",
  "Professionals transitioning into leadership roles"
];

const visionGoals = [
  "Owner-independent systems",
  "Accountable leadership teams",
  "Profitable, scalable businesses"
];

const ConsultingSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-20">

          {/* Left: Strategic Image */}
          <AnimatedSection className="lg:sticky lg:top-32">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000" />
              <div className="relative aspect-[4/3] md:aspect-[4/4.2] rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                <img
                  src={img15}
                  alt="Business Strategy Mastery"
                  className="w-full h-full object-cover object-[center_102%] grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Focused Content */}
          <div className="space-y-16">
            <AnimatedSection>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-primary/60" />
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-primary/80">
                      The Collaboration
                    </span>
                  </div>

                  <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                    WHO I <span className="text-gradient">WORK WITH</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-slate-400 font-body text-lg font-medium">I primarily work with:</p>

                  <div className="grid gap-3">
                    {targetAudience.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-300 font-body font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 backdrop-blur-sm mt-8">
                    <p className="text-white text-lg font-display italic leading-relaxed">
                      “If you feel: <span className="text-primary font-bold">‘My business cannot run without me’</span> — we need to talk.”
                    </p>
                  </div> */}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Vision 2026: Move Below */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="relative p-12 md:p-16 rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Rocket className="w-56 h-56" />
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-12 xl:col-span-7">
                  <h3 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="text-primary italic">VISION</span> – 2026
                  </h3>

                  <p className="text-slate-300 text-lg font-body font-medium mb-10 leading-relaxed max-w-xl">
                    My vision is to help <span className="text-white font-bold">1,000+ business owners</span> build:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {visionGoals.map((text, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-12 xl:col-span-5 border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-12">
                  <p className="text-white text-2xl font-display font-medium tracking-tight italic leading-snug">
                    By 2026, I want businesses to say: <br />
                    <span className="text-primary not-italic font-black text-3xl md:text-4xl mt-4 block">
                      “Our system runs the business — not the owner.”
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
