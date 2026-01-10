import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Products", path: "/products" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1A3LVb8epb/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/afsal_zaini/", label: "Instagram" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/afsal-zaini-ab56812a9", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@kauzaracademy", label: "YouTube" },
  ];

  return (
    <footer className="relative pt-28 pb-12 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-block mb-8 group">
              <span className="font-display text-3xl font-black text-white tracking-tighter">
                Afsal <span className="text-gradient">Zaini</span>
              </span>
            </Link>
            <p className="text-slate-400 text-base font-light leading-relaxed mb-8 max-w-xs">
              Business Structure & System Coach. Empowering entrepreneurs to transition from operator to visionary through practical, implementation-driven frameworks.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-500"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Core Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-display text-xl font-bold text-white mb-8 tracking-tight">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-primary transition-all duration-300 text-sm font-medium flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Academy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-display text-xl font-bold text-white mb-8 tracking-tight">Kauzar Academy</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
              Online & offline excellence in business development and personal growth. Where theory meets execution.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-500 hover:text-primary transition-colors duration-300"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Secure Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-display text-xl font-bold text-white mb-8 tracking-tight">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div className="text-sm space-y-2">
                  <div>
                    <p className="text-slate-300 font-medium">9946 66 12 66</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider">Afsal Zaini</p>
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">9605 50 17 66</p>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider">Kauzar Academy</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <a href="mailto:kauzaracademy@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                    kauzaracademy@gmail.com
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Official Inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <span className="text-slate-300">Kottakkal, Kerala</span>
                  <p className="text-slate-500 text-xs mt-1">MSME Hub Office</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[13px] font-medium tracking-tight">
              © {currentYear} <span className="text-white">Afsal Zaini</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[13px]">
              <span className="text-slate-500">Execution by</span>
              <span className="text-primary font-bold uppercase tracking-widest text-[10px]">Kauzar Academy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
