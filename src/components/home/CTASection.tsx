import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-12 md:p-16">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Ready to <span className="text-gradient">Transform</span> Your Business?
                </h2>
                
                <p className="text-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Take the first step towards building a successful, scalable business. 
                  Let's create your growth strategy together.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="group">
                    <Link to="/contact">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  {/* <Button asChild variant="outline" size="lg">
                    <a href="https://wa.me/919656669066" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Me
                    </a>
                  </Button> */}
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
