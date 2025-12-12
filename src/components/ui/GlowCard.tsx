import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowCard = ({ children, className = "", glowColor = "primary" }: GlowCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative group rounded-2xl overflow-hidden",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
        glowColor === "primary" ? "bg-primary/30" : "bg-accent/30"
      )} />
      
      {/* Card content */}
      <div className="relative gradient-card border border-border/50 rounded-2xl p-6 h-full backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
