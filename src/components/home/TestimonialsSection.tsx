import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
                
                <p className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-10 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <p className="font-display text-xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:text-white hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground hover:text-white hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
