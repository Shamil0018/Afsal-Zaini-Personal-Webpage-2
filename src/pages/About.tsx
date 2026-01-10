import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Award, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import image7 from "@/assets/image 7.png";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const staticStats = [
  { value: "5-7+", label: "Years Experience" },
  { value: "500+", label: "Entrepreneurs Guided" },
  { value: "100+", label: "Businesses Transformed" },
  { value: "50+", label: "Workshops Conducted" },
];

const staticValues = [
  {
    icon: Target,
    title: "Clarity in Vision",
    description: "Helping entrepreneurs see beyond obstacles to their true potential.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "Building systems that turn ideas into sustainable success.",
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Creating a network of successful, supportive entrepreneurs.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Adapting strategies to match the evolving business landscape.",
  },
];

const staticStory = [
  "I’m not a motivational speaker. I’m a Business Structure & System Coach.",
  "Over the years, I’ve worked with MSME, B2B, and Service Sector owners to move them from 'Everything depends on me' to a business that runs with clarity, systems, and accountable teams.",
  "As the CEO of Kauzar Academy, I designed Business FrameX — a practical framework focused on one goal: Owner Liberation."
];

const About = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await fetch("/api/about");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const displayStats = data?.content?.about_stats?.length > 0 ? data.content.about_stats : staticStats;
  const displayStory = data?.content?.about_story?.length > 0 ? data.content.about_story : staticStory;

  return (
    <>
      <Helmet>
        <title>About Afsal Zaini | Business Structure & System Coach</title>
        <meta
          name="description"
          content="Learn about Afsal Zaini, Business Structure & System Coach. Creator of Business FrameX and CEO of Kauzar Academy. Focused on owner liberation and system-driven growth."
        />
      </Helmet>

      <Layout>
        {/* WHO AM I Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">

              {/* LEFT SIDE */}
              <div className="lg:col-span-7">
                <AnimatedSection>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="h-[1px] w-8 bg-primary/60" />
                    <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                      The Architect of Systems
                    </span>
                  </motion.div>

                  <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                    The Story Behind the <br />
                    <span className="text-gradient">Vision</span>
                  </h1>

                  <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed font-body font-light">
                    {displayStory.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/Business Structure & System Coach/g, '<span class="text-white font-medium underline decoration-primary/30 underline-offset-8">Business Structure & System Coach</span>')
                          .replace(/"Everything depends on me"/g, '<span class="text-slate-200">"Everything depends on me"</span>')
                      }} />
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* RIGHT SIDE (IMAGE) */}
              <div className="lg:col-span-5">
                <AnimatedSection delay={0.2}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl -z-10" />

                    <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={image7}
                          alt="Afsal Zaini"
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-6 -right-6 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl z-20"
                    >
                      <p className="text-primary font-display font-bold text-xl mb-1 mt-1">
                        Strategy First
                      </p>
                      <p className="text-slate-400 text-xs font-body tracking-[0.2em] uppercase font-medium">
                        Structure &gt; Performance
                      </p>
                    </motion.div> */}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative bg-background/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {isLoading ? (
                <div className="col-span-4 flex justify-center py-10">
                  <Loader2 className="animate-spin text-primary" />
                </div>
              ) : (
                displayStats.map((stat, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <GlowCard>
                      <div className="text-center space-y-2">
                        <h3 className="font-display text-4xl font-black text-white">
                          {stat.value}
                        </h3>
                        <p className="text-slate-400 font-body text-sm uppercase tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    </GlowCard>
                  </AnimatedSection>
                ))

              )}
            </div>
          </div>
        </section>

        {/* WHAT I DO Section */}
        <section className="py-28 relative overflow-hidden bg-background">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px] -z-10 -translate-y-1/2" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <AnimatedSection>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="h-[1px] w-8 bg-primary/60" />
                    <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                      The Methodology
                    </span>
                  </motion.div>

                  <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                    Frameworks, <br />
                    <span className="text-gradient">Not Theory</span>
                  </h2>
                  <p className="text-slate-400 text-xl font-light leading-relaxed mb-10 font-body">
                    No fluff. No over-theory. Only execution-focused clarity to prepare your business for long-term scalability.
                  </p>
                </AnimatedSection>

                <div className="space-y-6">
                  {[
                    "Reduce Owner Dependency",
                    "Build Leadership Clarity",
                    "Install Working Systems (Sales, Ops, Finance)",
                    "Create Accountability-Driven Teams",
                    "Prepare for Long-term Scalability",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-slate-300 font-body font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS FRAMEX Section */}
        <section className="py-28 relative bg-background/50 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="h-[1px] w-8 bg-primary/60" />
                <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                  The Core Framework
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>

              <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
                Business <span className="text-gradient">FrameX</span>
              </h2>
              <p className="text-slate-400 text-xl font-body font-light max-w-2xl mx-auto">
                Moving businesses through 4 clear stages of dominance. The backbone of all BizZen Programs.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Structure", desc: "Direction, roles, and strategic priorities." },
                { step: "02", title: "System", desc: "Hard-coding SOPs, workflows, and reporting." },
                { step: "03", title: "Performance", desc: "Metrics, reviews, and execution rhythm." },
                { step: "04", title: "Accountability", desc: "Team ownership and owner liberation." },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="group relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 h-full backdrop-blur-sm transition-all duration-500 hover:border-primary/20 flex flex-col items-start text-left">
                    <span className="font-display text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors mb-4">{item.step}</span>

                    <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed font-body font-light group-hover:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Kauzar Academy Section */}
        <section className="py-32 relative overflow-hidden bg-background">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center">
                <div className="mb-12 flex justify-center">
                  <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Platform</span>
                  </div>
                </div>

                <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
                  Kauzar <span className="text-gradient">Academy</span>
                </h2>

                <p className="text-slate-400 text-xl font-light leading-relaxed font-body mb-12 max-w-2xl mx-auto">
                  A sanctuary for entrepreneurs who understand that systemic mastery is the only path to sustainable freedom.
                </p>

                <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl inline-block w-full">
                  <p className="text-slate-300 text-lg leading-relaxed font-body">
                    We provide high-impact learning in <span className="text-white font-medium">Digital Infrastructure</span>, <span className="text-white font-medium">Personal Mastery</span>, and <span className="text-white font-medium">Business Scale Mastery</span>.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout >
    </>
  );
};

export default About;
