import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBgImg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-background">
        <img
          src={heroBgImg}
          alt="Hero Background"
          className="w-full h-full object-cover object-top opacity-60 transform scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mr-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary/60" />
              <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                Business Eco-System Founder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
            >
              Afsal <span className="text-gradient">Zaini</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative pl-6 mb-10 border-l-2 border-primary/40"
            >
              <p className="font-display text-2xl md:text-3xl text-slate-100 italic font-light leading-relaxed">
                "I help business owners build <span className="text-white font-normal underline decoration-primary/30 underline-offset-8">systems</span>,<br /> not stress"
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-slate-300 text-lg md:text-xl leading-loose mb-12 max-w-2xl font-light tracking-wide lg:mx-0"
            >
              I’m Afsal Zaini, Founder of BizZen Business Ecosystem and CEO of Kauzar Academy.
              I help business owners and entrepreneurs move beyond daily operations, build accountable teams,
              and create system-driven, scalable businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group h-14 px-8 text-lg">
                <Link to="/contact">
                  Connect Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Link to="/about">
                  <Play className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge (Moved to a separate container for better positioning with full-page BG) */}
      {/* <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-12 right-12 z-20 items-center gap-4 bg-accent/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-2xl"
      >
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">AZ</div>
        <div>
          <p className="text-white font-display font-semibold">CEO</p>
          <p className="text-sm text-foreground">Kauzar Academy</p>
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;