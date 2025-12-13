import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
import event5 from "@/assets/event5.jpeg";

const events = [
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

const EventsPreview = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Check out our
              <br />
              <span className="text-accent">upcoming & previous events</span>
            </h2>
          </div>
          <Link to="/events">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              All Events
            </Button>
          </Link>
        </AnimatedSection>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-72 md:w-80"
              >
                <Link to="/events" className="block group">
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-card">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === "Available" 
                          ? "bg-accent/90 text-accent-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
