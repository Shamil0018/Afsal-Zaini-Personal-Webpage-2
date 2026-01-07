import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  // { name: "Products", path: "/products" },
  { name: "Events", path: "/events" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1A3LVb8epb/?mibextid=wwXIfr" },
  { icon: Instagram, href: "https://www.instagram.com/afsal_zaini/" },
  { icon: Linkedin, href: "https://in.linkedin.com/in/afsal-zaini-ab56812a9" },
  { icon: Youtube, href: "https://www.youtube.com/@kauzaracademy" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <span className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter">
              Afsal <span className="text-gradient">Zaini</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-body text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${location.pathname === link.path
                ? "text-primary"
                : "text-slate-300 hover:text-white"
                }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-white/5"
          >
            <nav className="container mx-auto px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block font-body text-xl font-bold tracking-tight py-2 ${location.pathname === link.path
                      ? "text-primary px-4 border-l-2 border-primary"
                      : "text-slate-300 px-4"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-8 pt-8 mt-4 border-t border-white/5 px-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
