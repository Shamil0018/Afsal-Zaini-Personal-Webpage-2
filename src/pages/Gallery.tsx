import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <>
            <Helmet>
                <title>Gallery | Afsal Zaini</title>
                <meta
                    name="description"
                    content="A visual journey of leadership, transformation, and excellence. Explore moments from Afsal Zaini's impact-driven career."
                />
            </Helmet>

            <Layout>
                <section className="pt-40 pb-20 relative overflow-hidden bg-background min-h-screen">
                    {/* Background decorations - Matching About.tsx style */}
                    <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -z-10" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

                    <div className="container mx-auto px-6 relative z-10">
                        <AnimatedSection className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center gap-3 mb-6"
                            >
                                <div className="h-[1px] w-8 bg-primary/60" />
                                <span className="text-sm font-body tracking-[0.3em] text-primary/80 uppercase font-medium">
                                    Visual Journey
                                </span>
                                <div className="h-[1px] w-8 bg-primary/60" />
                            </motion.div>

                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Legacy in <br />
                                <span className="text-gradient">Action</span>
                            </h1>

                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-body font-light max-w-3xl mx-auto">
                                Snapshots of transformation, leadership, and the pursuit of excellence across global business ecosystems. Ensuring Every Business Operates with Clarity.
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="w-full">
                        <ImageAutoSlider />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 mt-20">
                        <AnimatedSection delay={0.4} className="flex flex-col items-center">
                            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
                            <p className="text-slate-500 font-body text-[13px] uppercase tracking-[0.2em] font-medium text-center">
                                Afsal Zaini • Business Catalyst • Visionary Leader
                            </p>
                        </AnimatedSection>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Gallery;
