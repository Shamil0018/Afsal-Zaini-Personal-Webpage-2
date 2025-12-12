import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Play, Clock, Award, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Business Fundamentals Masterclass",
    description: "Core principles every entrepreneur must know for building a sustainable business.",
    duration: "8+ Hours",
    modules: "12 Modules",
    students: "200+",
    price: "₹2,999",
  },
  {
    title: "Sales & Marketing Essentials",
    description: "Learn proven strategies to attract customers and close more sales effectively.",
    duration: "6+ Hours",
    modules: "10 Modules",
    students: "150+",
    price: "₹1,999",
  },
  {
    title: "Mindset Mastery Series",
    description: "Transform your thinking patterns and develop an entrepreneurial mindset.",
    duration: "5+ Hours",
    modules: "8 Modules",
    students: "180+",
    price: "₹1,499",
  },
  {
    title: "Business Systems Blueprint",
    description: "Create efficient systems that run your business even when you're not there.",
    duration: "7+ Hours",
    modules: "9 Modules",
    students: "120+",
    price: "₹2,499",
  },
  {
    title: "Leadership & Team Building",
    description: "Build and lead high-performing teams that drive results and innovation.",
    duration: "4+ Hours",
    modules: "6 Modules",
    students: "90+",
    price: "₹1,299",
  },
  {
    title: "Financial Management for Entrepreneurs",
    description: "Master business finances, budgeting, and profit optimization strategies.",
    duration: "5+ Hours",
    modules: "7 Modules",
    students: "100+",
    price: "₹1,799",
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | Recorded Business Courses - Afsal Zaini</title>
        <meta
          name="description"
          content="Access recorded business courses and self-paced learning modules. Transform your entrepreneurial skills with video-based training from Afsal Zaini."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                Recorded Courses
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                Self-Paced <span className="text-gradient">Learning</span>
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Access premium recorded courses anytime, anywhere. Learn at your own pace 
                with comprehensive video modules and actionable frameworks.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlowCard className="h-full" glowColor="accent">
                    <div className="flex flex-col h-full">
                      {/* Video preview placeholder */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-6 group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-colors">
                            <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                          </div>
                        </motion.div>
                      </div>

                      <h3 className="font-display text-xl font-semibold text-white mb-3">
                        {product.title}
                      </h3>
                      
                      <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {product.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          {product.modules}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {product.students}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-border/30">
                        <span className="font-display text-2xl font-bold text-gradient">
                          {product.price}
                        </span>
                        <Button size="sm" className="group">
                          Get Access
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="text-gradient">Recorded Courses?</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Learn Anytime", desc: "Access courses 24/7 from any device" },
                { title: "Lifetime Access", desc: "Once purchased, yours forever" },
                { title: "Practical Content", desc: "Real-world applicable strategies" },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-foreground">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-card/50 border border-border/50 rounded-3xl p-12 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-foreground text-lg mb-8 max-w-xl mx-auto">
                  Contact us to find the perfect course for your learning goals.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
