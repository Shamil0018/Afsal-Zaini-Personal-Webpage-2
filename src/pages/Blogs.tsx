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
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                News & Insights
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                Latest <span className="text-gradient">Updates</span>
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Insights, tips, and strategies to help you grow your business 
                and develop as an entrepreneur.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-card/50 border border-border/50 rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
                  >
                    {/* Thumbnail placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-muted to-card relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-4xl text-primary/20">AZ</span>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm text-primary">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {article.excerpt}
                      </p>

                      <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center bg-card/50 border border-border/50 rounded-3xl p-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay <span className="text-gradient">Updated</span>
                </h2>
                <p className="text-foreground text-lg mb-8">
                  Follow us on social media for the latest business tips and updates.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.instagram.com/afsal_zaini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  >
                    Follow on Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@kauzaracademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors font-medium"
                  >
                    Subscribe on YouTube
                  </a>
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
