import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { LogoSlider } from "@/components/ui/logo-slider";

const testimonials = [
  {
    quote: "Afsal's guidance transformed my small business into a thriving enterprise. His strategic insights are invaluable.",
    name: "Muhammed Rashid",
    role: "Entrepreneur",
    location: "Malappuram",
  },
  {
    quote: "The Business Growth Mastery program gave me clarity and confidence to scale my operations systematically.",
    name: "Fathima Noor",
    role: "Startup Founder",
    location: "Kottakkal",
  },
  {
    quote: "One-on-one consulting with Afsal helped me identify blind spots and create actionable strategies for growth.",
    name: "Abdul Samad",
    role: "Business Owner",
    location: "Calicut",
  },
  {
    quote: "Kauzar Academy's approach to business education is practical, modern, and truly transformational.",
    name: "Safiya Rahman",
    role: "MSME Owner",
    location: "Malappuram",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[180px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary/60" />
            <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
              The Transformational Impact
            </span>
            <div className="h-[1px] w-8 bg-primary/60" />
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            Voices of <span className="text-gradient">Victory</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-20 shadow-2xl">
            {/* Absolute Decorative Quote */}
            <Quote className="absolute top-10 right-10 w-24 h-24 text-primary/10 -z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="mb-10 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <p className="font-display text-2xl md:text-4xl text-white leading-relaxed mb-12 italic font-light tracking-tight px-4 flex flex-col items-center">
                  <span className="max-w-3xl">"{testimonials[currentIndex].quote}"</span>
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="font-display text-2xl font-bold text-white mb-2">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary text-sm font-medium tracking-widest uppercase opacity-80">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].location}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls Refined */}
            <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-white/5">
              <motion.button
                whileHover={{ x: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                      ? "bg-primary w-12"
                      : "bg-white/10 w-3 hover:bg-white/30"
                      }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Logo Slider Section */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div className="text-center mb-10">
            <p className="text-slate-500 font-body text-[11px] uppercase tracking-[0.4em] font-medium opacity-60">
              Trusted by Leading Brands & Organizations
            </p>
          </div>
          <LogoSlider />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
