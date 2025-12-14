import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    details: ["9656 66 90 66", "9605 31 35 66"],
    action: "tel:+919656669066",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["kauzaracademy@gmail.com"],
    action: "mailto:kauzaracademy@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Kottakkal, Malappuram District"],
    action: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1A3LVb8epb/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/afsal_zaini/", label: "Instagram" },
  { icon: Linkedin, href: "https://in.linkedin.com/in/afsal-zaini-ab56812a9", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@kauzaracademy", label: "YouTube" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // 1️⃣ Send to your backend for admin dashboard storage
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });
  
      if (!res.ok) {
        toast({
          title: "Failed!",
          description: "Could not submit to server.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("API ERROR:", error);
    }
  
    // 2️⃣ WhatsApp message (your existing feature)
    const whatsappMessage = 
      `Hi Afsal! I'm ${formData.name}.%0A%0A` +
      `Subject: ${formData.subject}%0A%0A` +
      `${formData.message}%0A%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}`;
  
    window.open(`https://wa.me/919656669066?text=${whatsappMessage}`, "_blank");
  
    toast({
      title: "Message Sent!",
      description: "Your message has been sent, and WhatsApp chat is opened.",
    });
  
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | Get in Touch - Afsal Zaini</title>
        <meta
          name="description"
          content="Contact Afsal Zaini for business consulting, coaching, or inquiries about Kauzar Academy programs. Located in Kottakkal, Malappuram."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Get in Touch
              </span> */}
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
                Let's Start Your <span className="text-gradient">Transformation</span>
              </h1>
              <p className="text-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Ready to take your business to the next level? I'm here to help. 
                Reach out and let's discuss your goals.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-white mb-6">
                      Contact Information
                    </h2>
                    <p className="text-foreground text-lg">
                      Feel free to reach out through any of these channels. 
                      I typically respond within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/30"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-white mb-1">
                            {info.title}
                          </h3>
                          {info.details.map((detail, dIndex) => (
                            <p key={dIndex} className="text-foreground">
                              {info.action ? (
                                <a href={info.action} className="hover:text-primary transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <motion.a
                    href="https://wa.me/919656669066"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </motion.a>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-display font-semibold text-white mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon size={22} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <div className="bg-card/50 border border-border/50 rounded-3xl p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-muted border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-muted border-border/50"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-muted border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Business Consultation"
                          required
                          className="bg-muted border-border/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your business goals..."
                        rows={5}
                        required
                        className="bg-muted border-border/50 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// await fetch("/api/contact", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name, email, message })
// });


export default Contact;
