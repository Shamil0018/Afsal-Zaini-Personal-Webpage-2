import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, TrendingUp, Clock, Users, Building2, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  { icon: DollarSign, title: "Streamline Cash Flow and Fund Flow" },
  { icon: TrendingUp, title: "Master Expense Management" },
  { icon: Clock, title: "Effective Due Management" },
  { icon: Users, title: "Payroll and Cost Management" },
  { icon: Building2, title: "Build Robust Business Systems" },
  { icon: Rocket, title: "Secure Funding and Financial Growth" },
];

const ConsultingSection = () => {
  // return (
  //   <section className="py-20 bg-cream/30">
  //     <div className="container mx-auto px-4">
  //       <AnimatedSection>
  //         {/* Image Container */}
  //         <div className="relative mb-12 max-w-4xl mx-auto">
  //           <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
  //           <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
  //             <img
  //               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=500&fit=crop"
  //               alt="Business Consultant"
  //               className="w-full h-[400px] object-cover"
  //             />
  //           </div>
  //         </div>
  //       </AnimatedSection>

  //       <AnimatedSection delay={0.2}>
  //         {/* Content Section */}
  //         <div className="max-w-4xl mx-auto text-center mb-12">
  //           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
  //             Need Business{" "}
  //             <span className="text-primary">Consulting & Training</span> ?
  //           </h2>
  //           <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
  //             Take control of your business finances with Afsal Zaini, a leading business consultant in Kerala. 
  //             From managing cash flow and expenses to building stronger business systems, 
  //             Afsal helps you achieve financial stability and growth.
  //           </p>
  //           <Button asChild className="bg-cta hover:bg-cta/90 text-white px-8 py-6 text-lg rounded-full">
  //             <Link to="/contact">Connect Now</Link>
  //           </Button>
  //         </div>
  //       </AnimatedSection>

  //       <AnimatedSection delay={0.4}>
  //         {/* Features Grid */}
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
  //           {features.map((feature, index) => (
  //             <div
  //               key={index}
  //               className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300 cursor-pointer"
  //             >
  //               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
  //                 <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
  //               </div>
  //               <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</span>
  //             </div>
  //           ))}
  //         </div>
  //       </AnimatedSection>
  //     </div>
  //   </section>
  // );
};

export default ConsultingSection;
