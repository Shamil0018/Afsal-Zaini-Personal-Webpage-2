import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import afsalImg from "@/assets/afsal-zaini.jpg"; // <-- ADD THIS

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,121,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,121,90,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                Business Growth Coach
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                Afsal <span className="text-gradient">Zaini</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-display text-xl md:text-2xl text-foreground italic mb-8"
              >
                "Business is not small. <span className="text-white">Businessman is small.</span>"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-foreground text-lg leading-relaxed mb-10 max-w-xl"
              >
                Empowering entrepreneurs to transform their businesses and lives.
                With 5–7 years of experience as a Business Development Specialist,
                Growth Strategist, and CEO of Kauzar Academy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Connect Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/about">
                    <Play className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-[80px] scale-110" />

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-primary/10 rounded-full"
              />

              {/* Image Container */}
              <div className="relative w-106 h-106 md:w-[550px] md:h-[550px] rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={afsalImg}
                  alt="Afsal Zaini"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-xl"
              >
                <span className="font-display font-semibold">CEO</span>
                <span className="text-sm ml-2 opacity-90">Kauzar Academy</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
