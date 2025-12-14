import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight, Mic, Video, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowCard from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const eventTypes = [
  {
    icon: Mic,
    title: "Business Growth Workshops",
    description: "Intensive hands-on workshops focused on scaling your business with proven strategies and frameworks.",
    format: "Offline",
    duration: "Full Day",
  },
  {
    icon: Building,
    title: "Startup Bootcamps",
    description: "Comprehensive bootcamps for aspiring entrepreneurs to validate, plan, and launch their ventures.",
    format: "Offline",
    duration: "2-3 Days",
  },
  {
    icon: Users,
    title: "Entrepreneur Training",
    description: "In-depth training sessions covering all aspects of entrepreneurship and business management.",
    format: "Offline",
    duration: "Multiple Sessions",
  },
  {
    icon: Video,
    title: "Online Webinars",
    description: "Live interactive webinars on specific business topics with Q&A sessions.",
    format: "Online",
    duration: "2-3 Hours",
  },
  {
    icon: Mic,
    title: "Sales & Marketing Workshops",
    description: "Focused workshops on improving sales techniques and marketing strategies for growth.",
    format: "Hybrid",
    duration: "Half Day",
  },
];

const upcomingEvents = [
  {
    title: "Business Growth Masterclass 2024",
    date: "Coming Soon",
    location: "Malappuram",
    spots: "Limited Seats",
  },
  {
    title: "Startup Weekend Bootcamp",
    date: "Coming Soon",
    location: "Kottakkal",
    spots: "30 Seats",
  },
  {
    title: "Online Marketing Webinar",
    date: "Coming Soon",
    location: "Online (Zoom)",
    spots: "100 Seats",
  },
];

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events & Workshops | Business Training - Afsal Zaini</title>
        <meta
          name="description"
          content="Join business growth workshops, startup bootcamps, entrepreneur training, and webinars conducted by Afsal Zaini. Transform your business skills."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Events & Workshops
              </span> */}
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                Learn, Network & <span className="text-gradient">Grow</span>
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Join our transformative events and workshops designed to accelerate 
                your business growth and entrepreneurial journey.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Types of <span className="text-gradient">Events</span>
              </h2>
              <p className="text-foreground text-lg max-w-2xl mx-auto">
                From intensive workshops to online webinars, choose the format that works for you
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlowCard className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <event.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold text-white mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {event.format}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.duration}
                        </span>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center mb-16">
              {/* <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                Mark Your Calendar
              </span> */}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.map((event, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white mb-4">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            {event.spots}
                          </span>
                        </div>
                      </div>
                      <Button className="group whitespace-nowrap">
                        Register Interest
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Host Event CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur-xl opacity-50" />
                <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-12 md:p-16 text-center">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                    Want to Host a <span className="text-gradient">Workshop?</span>
                  </h2>
                  <p className="text-foreground text-lg mb-10 max-w-2xl mx-auto">
                    Bring transformative business training to your organization or community. 
                    Let's discuss how we can collaborate.
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link to="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Events;
