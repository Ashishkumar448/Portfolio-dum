"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, ShieldCheck, Cpu } from 'lucide-react';

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-black relative z-10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.div style={{ y, opacity }} className="sticky top-32">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                            More than just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">code.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md">
                            Bridging the gap between logic and creativity, I build digital experiences that leave a lasting impact.
                        </p>
                    </motion.div>

                    <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Code2 className="w-6 h-6" /></span>
                                <span className="text-blue-500">01.</span> The Engineer
                            </h3>
                            <p>
                                With a deep-rooted passion for <strong>Full Stack Development</strong>, I engineer robust, scalable applications.
                                My expertise spans across the entire stack—from architecting database schemas in <strong>PostgreSQL</strong>
                                to crafting responsive, interactive frontends with <strong>React</strong> and <strong>Next.js</strong>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Palette className="w-6 h-6" /></span>
                                <span className="text-purple-500">02.</span> The Creative
                            </h3>
                            <p>
                                Design is not an afterthought; it's the core of my process. I leverage tools like <strong>Figma</strong> and <strong>Blender</strong>
                                to create visual assets that breathe life into interfaces. My proficiency in the <strong>Adobe Creative Suite</strong> and <strong>DaVinci Resolve</strong> adds a cinematic
                                touch to my digital presentations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 bg-red-500/10 rounded-lg text-red-500"><ShieldCheck className="w-6 h-6" /></span>
                                <span className="text-red-500">03.</span> The Security Researcher
                            </h3>
                            <p>
                                Security is paramount. I actively engage in <strong>Penetration Testing</strong> and <strong>Network Security</strong>,
                                ensuring that the applications I build are not only beautiful but also resilient against modern threats.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 bg-green-500/10 rounded-lg text-green-500"><Cpu className="w-6 h-6" /></span>
                                <span className="text-green-500">04.</span> The Innovator
                            </h3>
                            <p>
                                Pushing boundaries with <strong>Generative AI</strong> and <strong>RAG</strong> pipelines, I explore the frontier
                                of intelligent applications. Integrating LLMs into workflows to solve complex problems is where I find my flow state.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
