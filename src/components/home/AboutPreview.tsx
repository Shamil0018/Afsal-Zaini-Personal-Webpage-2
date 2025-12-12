import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "1K+", label: "Learners Completed" },
  { value: "500+", label: "Entrepreneurs Worked With" },
  { value: "100+", label: "Workshops & Seminars" },
];

const AboutPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-[60px] scale-90" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-muted to-card">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-9xl text-primary/20">AZ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Get Ahead of the Competition with{" "}
              <span className="text-gradient">Afsal Zaini</span>
            </h2>
            
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Kerala's business scene is booming! Owners are ambitiously scaling their ventures 
              beyond local borders, setting their sights on the vast Indian market and the global stage. 
              This exciting growth spurt, however, can expose knowledge gaps for some entrepreneurs. 
              Here's where Afsal Zaini, Kerala's acclaimed Business trainer and Management consultant, steps in.
            </p>
            
            <Button asChild size="lg" className="group mb-12">
              <Link to="/contact">
                Connect Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold">
                    <span className="text-white">{stat.value.replace(/[^0-9]/g, '')}</span>
                    <span className="text-primary">{stat.value.replace(/[0-9]/g, '')}</span>
                  </div>
                  <p className="text-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
