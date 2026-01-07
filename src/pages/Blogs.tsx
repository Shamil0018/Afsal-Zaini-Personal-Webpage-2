import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const newsArticles = [
  {
    title: "5 Essential Business Systems Every Entrepreneur Needs",
    excerpt: "Discover the foundational systems that will help you scale your business efficiently and sustainably...",
    date: "December 2024",
    readTime: "5 min read",
    category: "Business Strategy",
  },
  {
    title: "The Mindset Shift That Changed My Business",
    excerpt: "How changing my perspective on failure and growth transformed my entrepreneurial journey...",
    date: "November 2024",
    readTime: "4 min read",
    category: "Mindset",
  },
  {
    title: "Building Your First Business Plan: A Step-by-Step Guide",
    excerpt: "A practical guide to creating a business plan that actually works for startups and small businesses...",
    date: "November 2024",
    readTime: "8 min read",
    category: "Startup Guide",
  },
  {
    title: "Why Most Businesses Fail in Their First Year",
    excerpt: "Understanding the common pitfalls and how to avoid them in your entrepreneurial journey...",
    date: "October 2024",
    readTime: "6 min read",
    category: "Business Insights",
  },
  {
    title: "The Power of Personal Branding for Entrepreneurs",
    excerpt: "How building your personal brand can accelerate your business growth and open new opportunities...",
    date: "October 2024",
    readTime: "5 min read",
    category: "Personal Branding",
  },
  {
    title: "From Employee to Entrepreneur: Making the Leap",
    excerpt: "Practical advice for those considering leaving their jobs to start their own business ventures...",
    date: "September 2024",
    readTime: "7 min read",
    category: "Career Transition",
  },
];

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>News & Insights | Business Tips - Afsal Zaini</title>
        <meta
          name="description"
          content="Read the latest business insights, entrepreneurship tips, and growth strategies from Afsal Zaini. Stay updated with news from Kauzar Academy."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />

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
                  Impact & Insights
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Latest <span className="text-gradient">Updates</span>
              </h1>
              <p className="text-slate-400 text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
                Strategic insights, tactical tips, and frameworks designed to help you <span className="text-white font-medium">scale smarter</span> and lead better.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsArticles.map((article, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col cursor-pointer backdrop-blur-sm transition-all duration-500 hover:border-primary/20"
                  >
                    {/* Thumbnail placeholder */}
                    <div className="aspect-[16/10] bg-slate-900/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-5xl font-black text-primary/10 tracking-widest">KAUZAR</span>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-primary uppercase tracking-widest">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-6 text-xs text-slate-500 mb-6 font-body tracking-wider uppercase">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {article.title}
                      </h2>

                      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-body font-light">
                        {article.excerpt}
                      </p>

                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-white font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                          Read Article
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-32 relative overflow-hidden bg-background">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[150px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-16 md:p-24 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

                <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                  Stay <span className="text-gradient">Connected</span>
                </h2>
                <p className="text-slate-400 text-xl font-body font-light mb-12 max-w-xl mx-auto">
                  Receive exclusive business blueprints and growth strategies directly to your social feed.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/afsal_zaini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20"
                  >
                    Instagram Feed
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.youtube.com/@kauzaracademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold uppercase tracking-widest text-xs"
                  >
                    YouTube Library
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blogs;
