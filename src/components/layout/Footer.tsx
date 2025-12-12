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
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold text-white">
                Afsal <span className="text-gradient">Zaini</span>
              </span>
            </Link>
            <p className="text-foreground text-sm leading-relaxed mb-6">
              Business Growth Coach & CEO of Kauzar Academy. Transforming entrepreneurs and businesses with proven strategies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-foreground hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kauzar Academy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-6">Kauzar Academy</h4>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              Where learning meets transformation. Online & offline excellence in business, development & personal growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kauzaracademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/Kauzar-Academy-100093565602330/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@kauzaracademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground">9656 66 90 66</p>
                  <p className="text-foreground">9605 31 35 66</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:kauzaracademy@gmail.com" className="text-foreground hover:text-white text-sm transition-colors">
                  kauzaracademy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">
                  Kottakkal, Malappuram District
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Afsal Zaini. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Powered by <span className="text-primary">Kauzar Academy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
