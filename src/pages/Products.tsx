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
        <section className="pt-40 pb-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="h-[1px] w-8 bg-primary/60" />
                <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                  Digital Assets
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Self-Paced <span className="text-gradient">Learning</span>
              </h1>

              <p className="text-slate-400 text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
                Access premium strategic intelligence on demand. Master high-level frameworks at your own pace with <span className="text-white font-medium">unlimited lifetime access</span>.
              </p>

            </AnimatedSection>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-1 h-full backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.04] flex flex-col overflow-hidden">

                    <div className="p-8 flex flex-col h-full">
                      {/* Video Preview Placeholder */}
                      <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 mb-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:16px_16px]" />

                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                            <Play className="w-5 h-5 text-white ml-1 fill-white" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-body font-light group-hover:text-slate-300">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 mb-8 text-xs font-medium text-slate-500 font-body">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary/60" />
                          {product.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary/60" />
                          {product.modules}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary/60" />
                          {product.students}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Tuition</span>
                          <span className="font-display text-2xl font-black text-white">
                            {product.price}
                          </span>
                        </div>

                        <Button size="lg" className="h-14 rounded-2xl px-6 font-bold group">
                          Access
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 relative overflow-hidden bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_primary_2px,_transparent_2px)] bg-[size:48px_48px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="h-[1px] w-8 bg-primary/60" />
                <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                  The Experience
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white tracking-tighter shadow-sm">
                Strategic <span className="text-gradient">Advantages</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                { title: "Universal Access", desc: "Deploy your learning anytime, across any device globally." },
                { title: "Infinite Retention", desc: "Permanent ownership of the program and all future updates." },
                { title: "Engineered Frameworks", desc: "Directly applicable blueprints for immediate execution." },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                      <span className="font-display text-3xl font-black text-primary/40 group-hover:text-primary transition-colors">{index + 1}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 font-body font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-16 md:p-24 text-center backdrop-blur-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                  Need Help Choosing Your <span className="text-gradient">Path?</span>
                </h2>

                <p className="text-slate-400 text-xl font-body font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our curriculum consultants are available to help you align our digital assets with your specific growth trajectory.
                </p>

                <Button asChild size="lg" className="h-18 rounded-2xl px-12 text-lg font-bold group">
                  <Link to="/contact">
                    Request Guidance
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
