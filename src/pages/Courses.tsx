import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import img31 from "@/assets/image 31.jpeg";
import img32 from "@/assets/image 32.jpeg";
import img33 from "@/assets/image 33.jpeg";

const staticCourses = [
  {
    image: img31,
    title: "Boss Backbone — 2026 Leadership & System Mastery Program",
    description:
      "Architected for high-level business owners seeking elite leadership identity and absolute operational control. A synthesis of strategic vision and tactical execution.",
    features: [
      "Clear leadership identity",
      "Strong system foundation",
      "Accountable teams",
      "Sustainable growth without burnout",
      "One-to-One Prime Sessions",
      "One-Day Intensive Sessions",
    ],
  },
  {
    image: img32,
    title: "BFP – Boss FrameX Plan (2-Month Business Structure Program)",
    description:
      "The definitive starting point for entrepreneurs ready to hard-code direction, roles, and discipline into their business. A 60-day sprint to structural clarity.",
    features: [
      "Strategic direction setting",
      "Core system building",
      "Absolute role clarity",
      "Daily execution discipline",
    ],
  },
  {
    image: img33,
    title: "Backbone FrameX Plan (3–12 Months) Complete Business Transformation",
    description:
      "The ultimate transition from owner-run chaos to a system-driven legacy. Engineering owner liberation through a specialized 20% dependency model.",
    features: [
      "Custom SOP creation",
      "Execution rhythm installation",
      "Accountability tracking systems",
      "Owner liberation (20% dependency)",
    ],
  },
];

const Courses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("/api/courses");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const displayCourses = data?.courses?.length > 0 ? data.courses : staticCourses;

  return (
    <>
      <Helmet>
        <title>Signature Programs | Afsal Zaini - Kauzar Academy</title>
        <meta
          name="description"
          content="Transform your business with Boss Backbone, Boss FrameX Plan, and Backbone FrameX. Elite programs designed for systemic mastery and owner liberation."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />

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
                  Signature Programs
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Engineer Your <span className="text-gradient">Legacy</span>
              </h1>

              <p className="text-slate-400 text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
                Elite frameworks designed to move you from{" "}
                <span className="text-white font-medium">operational chaos</span> to{" "}
                <span className="text-white font-medium">systematic dominance</span>. Choose your blueprint for scale.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
              ) : (
                displayCourses.map((course, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="group relative rounded-[3.5rem] overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-sm hover:border-primary/20 transition-all duration-500 shadow-2xl"
                    >
                      <div className="relative p-8 md:p-14">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                          {/* Left side: Image & Title */}
                          <div className="lg:col-span-12 xl:col-span-5">
                            <div className="relative rounded-[2.5rem] overflow-hidden mb-10 aspect-video xl:aspect-square group">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-2">
                                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                                    Elite Program
                                  </span>
                                </div>
                              </div>
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">
                              {course.title}
                            </h2>

                            {/* <p className="text-slate-400 text-lg leading-relaxed font-body font-light">
                              {course.description}
                            </p> */}
                          </div>

                          {/* Right side: Features */}
                          <div className="lg:col-span-12 xl:col-span-7">
                            <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-14 backdrop-blur-xl">
                              <h3 className="font-display text-xs font-bold text-slate-500 uppercase tracking-[0.4em] mb-10">
                                Strategic Objectives
                              </h3>

                              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                                {course.features.map((feature, fIndex) => (
                                  <div key={fIndex} className="flex items-start gap-5 group/item">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary transition-all duration-300">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover/item:text-white transition-colors" />
                                    </div>
                                    <span className="text-slate-300 font-body text-base group-hover/item:text-white transition-colors">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="flex justify-start">
                                <Button
                                  asChild
                                  size="lg"
                                  className="h-[60px] rounded-[2.5rem] px-16 text-xl font-black group/btn overflow-hidden relative shadow-2xl shadow-primary/20"
                                >
                                  <Link to="/contact" className="relative z-10 w-full h-full flex items-center justify-center">
                                    Join BizZen Programs
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity -z-10" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-background">
          <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-primary/5 to-transparent -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-16 md:p-24 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

                <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                  Not Sure Which Program <br />
                  <span className="text-gradient">is Right for You?</span>
                </h2>

                <p className="text-slate-400 text-xl font-body font-light mb-12 max-w-2xl mx-auto">
                  Schedule a private diagnostic call. We'll audit your current complexity and align you with the transformational path that fits your vision.
                </p>

                <Button asChild size="lg" className="h-20 rounded-[2rem] px-12 text-lg font-bold group">
                  <Link to="/contact">
                    Free Transformation Call
                    <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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

export default Courses;
