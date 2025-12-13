import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Award, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import afsalImg from "@/assets/afsal-zaini.jpg";

const stats = [
  { value: "5-7+", label: "Years Experience" },
  { value: "500+", label: "Entrepreneurs Guided" },
  { value: "100+", label: "Businesses Transformed" },
  { value: "50+", label: "Workshops Conducted" },
];

const values = [
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

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Afsal Zaini | Business Growth Coach Journey</title>
        <meta
          name="description"
          content="Learn about Afsal Zaini's journey as a Business Growth Coach and the mission behind Kauzar Academy. 5-7 years of experience transforming entrepreneurs."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden font-inter">
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE */}
              <AnimatedSection>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 font-inter">
                  About Me
                </span>

                <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-white mb-8">
                  The Story Behind the <span className="text-gradient">Vision</span>
                </h1>

                <div className="space-y-6 text-foreground text-lg leading-relaxed font-inter">
                  <p>
                    I am <span className="text-white font-semibold">Afsal Zaini</span>, a Business Growth Coach
                    and the founder of Kauzar Academy. With 5-7 years of experience in business development
                    and entrepreneurial coaching, I've dedicated my career to transforming businesses and
                    the lives of entrepreneurs.
                  </p>

                  <p>
                    My journey began with a simple belief:{" "}
                    <span className="text-white italic">"Business is not small. Businessman is small."</span>
                    This philosophy drives everything I do—helping entrepreneurs expand their vision,
                    build robust systems, and achieve sustainable growth.
                  </p>

                  <p>
                    As the CEO of Kauzar Academy, I've created a platform where learning meets transformation,
                    offering comprehensive programs in business development, personal growth, and web development.
                  </p>
                </div>
              </AnimatedSection>

              {/* RIGHT SIDE (IMAGE) */}
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-[60px]" />

                  <div className="relative rounded-3xl overflow-hidden border border-border/50">
                    <div className="aspect-[4/5] bg-card overflow-hidden rounded-3xl">
                      <img
                        src={afsalImg}
                        alt="Afsal Zaini"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-2xl p-6 shadow-2xl"
                  >
                    <p className="text-primary font-montserrat font-semibold text-lg">
                      Business Development
                    </p>
                    <p className="text-foreground text-sm font-inter">
                      Specialist & Strategist
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative font-inter">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-8 rounded-2xl bg-card/50 border border-border/30"
                  >
                    <p className="font-montserrat text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {stat.value}
                    </p>
                    <p className="text-foreground font-inter">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 relative overflow-hidden font-inter">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />

          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                My Mission
              </span>

              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-8">
                Transforming Entrepreneurs,{" "}
                <span className="text-gradient">One Business at a Time</span>
              </h2>

              <div className="space-y-4 text-lg">
                {[
                  "Uplift entrepreneurs from struggles to success",
                  "Bring clarity to business owners overwhelmed by challenges",
                  "Transform both business operations and personal mindset",
                  "Build strong, scalable business systems",
                  "Shape confident, capable entrepreneurs ready for growth",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-left max-w-2xl mx-auto"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-inter">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative font-inter">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Core Values
              </span>

              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white">
                What Drives <span className="text-gradient">My Work</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlowCard className="h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="font-montserrat text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>

                    <p className="text-foreground text-sm font-inter">
                      {value.description}
                    </p>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Kauzar Academy Section */}
        <section className="py-24 relative overflow-hidden font-inter">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                  My Platform
                </span>

                <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-8">
                  Kauzar <span className="text-gradient">Academy</span>
                </h2>

                <p className="text-foreground text-lg leading-relaxed font-inter mb-8">
                  Kauzar Academy is a personalized platform of excellence providing online & offline learning
                  in Web Development, Life Manifesting & Personal Growth, and Business Solutions & Entrepreneurship.
                </p>

                <p className="text-2xl font-montserrat italic text-white">
                  "Where learning meets transformation."
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
