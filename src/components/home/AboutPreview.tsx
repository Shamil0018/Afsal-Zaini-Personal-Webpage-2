import { motion } from "framer-motion";
import aboutImg from "@/assets/image 9.png";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "1K+", label: "Learners Completed" },
  { value: "500+", label: "Entrepreneurs Worked With" },
  { value: "100+", label: "Workshops & Seminars" },
];

const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background glow consistent with Hero */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left - Image (5/12 split) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-md lg:max-w-full">
              {/* Soft Shadow behind image */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full scale-110" />

              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Afsal Zaini - Who am I"
                  className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-primary/20 rounded-br-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content (7/12 split) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-primary/60" />
              <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                The Visionary
              </span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Who am <span className="text-gradient">I</span>
            </h2>

            <div className="space-y-8 text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
              <p className="text-2xl md:text-3xl text-white font-display italic font-light leading-tight">
                I’m not a motivational speaker — <br className="hidden md:block" />
                I’m a <span className="text-primary font-normal">Business Structure & System Coach.</span>
              </p>

              <p className="max-w-2xl font-light tracking-wide text-slate-200">
                I work with B2B, B2C, service-sector, and MSME business owners to help them shift from
                Everything depends on me” to “My business runs on clarity, systems, and accountable teams.
                {/* <span className="italic text-slate-400 block mt-2 mb-2">“Everything depends on me”</span>
                to
                <span className="text-white font-medium block">“My business runs on clarity, systems, and accountable teams.”</span> */}
              </p>

              {/* <div className="relative pl-6 border-l-2 border-primary/30">
                <p className="max-w-2xl font-light leading-loose">
                  As CEO of <span className="text-white font-medium">Kauzar Academy</span>, I created <span className="text-primary underline decoration-primary/30 underline-offset-8">Business FrameX</span> — a practical, implementation-driven framework focused on:
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                  {[
                    'Leadership clarity',
                    'System installation',
                    'Team accountability',
                    'Owner liberation'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-white/90 text-sm font-medium tracking-wide uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Stats section refined */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold mb-1">
                    <span className="text-white">{stat.value.replace(/[^0-9]/g, "")}</span>
                    <span className="text-primary">{stat.value.replace(/[0-9]/g, "")}</span>
                  </div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
