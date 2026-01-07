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
        <section className="pt-40 pb-20 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />

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
                  Connect & Scale
                </span>
                <div className="h-[1px] w-8 bg-primary/60" />
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Let's Start Your <br />
                <span className="text-gradient">Transformation</span>
              </h1>
              <p className="text-slate-400 text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
                Ready to move from chaos to <span className="text-white font-medium">clarity</span>? Reach out and let's architect the future of your business.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
              {/* Contact Info */}
              <div className="lg:col-span-12 xl:col-span-5">
                <AnimatedSection>
                  <div className="space-y-10">
                    <div>
                      <h2 className="font-display text-4xl font-bold text-white mb-6 tracking-tight">
                        Direct <span className="text-primary">Channels</span>
                      </h2>
                      <p className="text-slate-400 text-lg font-body font-light leading-relaxed">
                        Select your preferred method of communication. We prioritize response efficiency for strategic inquiries.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 8 }}
                          className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-white text-xl mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, dIndex) => (
                              <p key={dIndex} className="text-slate-400 font-body text-base group-hover:text-slate-200 transition-colors">
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
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-4 w-full h-16 rounded-[2rem] bg-emerald-500 text-white font-bold text-lg shadow-xl shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-6 h-6" />
                      Priority WhatsApp Line
                    </motion.a>

                    {/* Social Links */}
                    <div className="pt-8 border-t border-white/5">
                      <h3 className="font-display font-medium text-slate-500 text-xs uppercase tracking-widest mb-6">Network Reach</h3>
                      <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-300"
                            aria-label={social.label}
                          >
                            <social.icon size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-12 xl:col-span-7">
                <AnimatedSection delay={0.2}>
                  <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px] -z-10" />

                    <h2 className="font-display text-3xl font-black text-white mb-10 tracking-tight">
                      Blueprint <span className="text-gradient">Enquiry</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ameen"
                            required
                            className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 text-white rounded-2xl px-6"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                            Strategic Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ameen@founder.com"
                            required
                            className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 text-white rounded-2xl px-6"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                            Direct Line
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 9656 66 90 66"
                            className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 text-white rounded-2xl px-6"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                            Scaling Target
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="System Mastery Plan"
                            required
                            className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/50 text-white rounded-2xl px-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                          Current Bottleneck
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe the complexity you're currently navigating..."
                          rows={6}
                          required
                          className="bg-white/[0.03] border-white/5 focus:border-primary/50 text-white rounded-[2rem] p-6 resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-16 rounded-[2rem] text-lg font-bold group">
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Initialize Scale Audit
                      </Button>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
