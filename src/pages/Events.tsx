import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
// import event5 from "@/assets/event5.jpeg"; // Imported in user code but unused in array

const staticEvents = [
  {
    id: 1,
    title: "Business Growth Mastery",
    type: "Workshop",
    date: "Jan 15",
    location: "Kottakkal",
    status: "Available",
    image: event1,
  },
  {
    id: 2,
    title: "Startup Bootcamp",
    type: "Bootcamp",
    date: "Feb 10",
    location: "Calicut",
    status: "Available",
    image: event2,
  },
  {
    id: 3,
    title: "Sales & Marketing Workshop",
    type: "Workshop",
    date: "Mar 5",
    location: "Malappuram",
    status: "Coming Soon",
    image: event3,
  },
  {
    id: 4,
    title: "Entrepreneur Mindset Training",
    type: "Webinar",
    date: "Mar 20",
    location: "Online",
    status: "Available",
    image: event4,
  },
];

const Events = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });

  const displayEvents = data?.events?.length > 0 ? data.events : staticEvents;

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <>
      <Helmet>
        <title>Events & Workshops | Business Training - Afsal Zaini</title>
        <meta
          name="description"
          content="Join business growth workshops, startup bootcamps, and entrepreneur training conducted by Afsal Zaini. Transform your business skills through immersive events."
        />
      </Helmet>

      <Layout>
        <section className="pt-40 pb-28 relative overflow-hidden bg-background">
          {/* Background glow */}
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
              <AnimatedSection>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="h-[1px] w-8 bg-primary/60" />
                  <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                    Impact & Insights
                  </span>
                </motion.div>

                <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                  Upcoming & <br className="hidden md:block" />
                  <span className="text-gradient">Previous Events</span>
                </h2>
                <p className="text-slate-400 text-xl font-light max-w-2xl leading-relaxed">
                  Experience the energy of transformation at our <span className="text-white font-medium">regional workshops</span> and flagship training sessions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 group">
                  <Link to="/contact">
                    Host an Event
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing px-2" ref={emblaRef}>
              <div className="flex gap-8">
                {isLoading ? (
                  <div className="w-full flex justify-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  </div>
                ) : (
                  displayEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex-shrink-0 w-80 md:w-[400px]"
                    >
                      <div className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-primary/20">
                        {/* Image Section */}
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                          {/* Floating Meta */}
                          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                            <div className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                              <span className="text-primary text-xs font-bold uppercase tracking-widest">{event.type}</span>
                            </div>

                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                              <div className={`w-2 h-2 rounded-full ${event.status === "Available" ? "bg-green-500 animate-pulse" : "bg-slate-500"}`} />
                              <span className="text-white text-[10px] font-semibold uppercase tracking-tighter">{event.status}</span>
                            </div>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                            <div className="flex items-center gap-6 text-sm text-slate-300 mb-4 font-light">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{event.location}</span>
                              </div>
                            </div>

                            <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                              {event.title}
                            </h3>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                            >
                              <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Explore Event</span>
                              <ArrowUpRight className="w-5 h-5 text-primary" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Events;
