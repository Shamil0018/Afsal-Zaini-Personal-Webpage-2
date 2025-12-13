import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Rocket, User, Brain, Code, CheckCircle2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: TrendingUp,
    title: "Business Growth Mastery",
    description: "A complete program that helps business owners achieve sustainable growth and scale their operations.",
    features: [
      "Grow sales, revenue & operations",
      "Build business systems & long-term strategies",
      "Scale with structure, clarity & confidence",
      "Access proven growth frameworks",
    ],
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    icon: Rocket,
    title: "Startup Launch Program",
    description: "Guides beginners from zero to launch with comprehensive planning and execution frameworks.",
    features: [
      "Start a business step-by-step",
      "Learn planning, validation & branding",
      "Set up marketing systems & foundations",
      "Launch with confidence and clarity",
    ],
    color: "from-accent/15 to-accent/5",
    borderColor: "border-accent/30",
  },
  {
    icon: User,
    title: "Personal Business Consulting (1:1)",
    description: "A complete personal guidance experience with one-on-one business problem solving.",
    features: [
      "One-to-one business problem solving",
      "Fix sales, marketing & management issues",
      "Personalized growth strategies",
      "Full business analysis + action plan",
    ],
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    icon: Brain,
    title: "Life Manifestation Blueprint",
    description: "A total personal transformation program for mindset, discipline, and goal achievement.",
    features: [
      "Mindset training & reprogramming",
      "Goal manifestation techniques",
      "Discipline, clarity & personal growth",
      "Lifestyle transformation roadmap",
    ],
    color: "from-blue-light/20 to-blue-light/5",
    borderColor: "border-blue-glow/30",
  },
  {
    icon: Code,
    title: "Web Development Full Stack Course",
    description: "A practical, job-ready development program for aspiring developers.",
    features: [
      "Full front-end + back-end training",
      "Beginners learn coding from zero",
      "Real-world, project-based learning",
      "Become job-ready full-stack developer",
    ],
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
  },
];


const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses & Programs | Afsal Zaini - Kauzar Academy</title>
        <meta
          name="description"
          content="Transform your career with Business Growth Mastery, Startup Launch Program, 1:1 Consulting, Life Manifestation, and Web Development courses at Kauzar Academy."
        />
      </Helmet>

      <Layout>

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden font-inter">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-inter mb-6">
                Programs & Courses
              </span>

              <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-white mb-8">
                Transform Your <span className="text-gradient">Journey</span>
              </h1>

              <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto font-inter">
                Comprehensive programs designed to elevate your business, career, and personal growth. 
                Choose your path to transformation.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 font-inter">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              {courses.map((course, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-3xl overflow-hidden ${course.borderColor} border`}
                  >
                    {/* Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />
                    
                    <div className="relative p-8 md:p-12 bg-card/50 backdrop-blur-sm">
                      <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start">

                        {/* Left side */}
                        <div>
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6">
                            <course.icon className="w-10 h-10 text-primary" />
                          </div>

                          <h2 className="font-montserrat text-3xl font-bold text-white mb-4">
                            {course.title}
                          </h2>

                          <p className="text-foreground text-lg leading-relaxed font-inter">
                            {course.description}
                          </p>
                        </div>

                        {/* Right side */}
                        <div>
                          <h3 className="font-montserrat text-xl font-semibold text-white mb-6">
                            What You'll Learn
                          </h3>

                          <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {course.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground font-inter">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button asChild className="group font-inter">
                            <Link to="/contact">
                              Enroll Now
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden font-inter">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto">

              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
                Not Sure Which Program is <span className="text-gradient">Right for You?</span>
              </h2>

              <p className="text-foreground text-lg font-inter mb-10">
                Schedule a free consultation call and let's discuss your goals. 
                I’ll help you choose the perfect program for your journey.
              </p>

              <Button asChild size="lg" className="group font-inter">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

            </AnimatedSection>
          </div>
        </section>

      </Layout>
    </>
  );
};

export default Courses;
