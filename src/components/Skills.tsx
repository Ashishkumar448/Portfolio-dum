"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../lib/api';
import { Layers, Brain, Cloud, Shield, Palette, Video } from 'lucide-react';

const categoryIcons: Record<string, any> = {
    "Full Stack": Layers,
    "AI/ML": Brain,
    "Cloud": Cloud,
    "Security": Shield,
    "Design": Palette,
    "Media": Video
};

interface Skill {
    _id: string;
    name: string;
    proficiency: number;
    icon?: string;
    category?: string;
}

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        api.getSkills().then(res => {
            setSkills(res.data || []);
        });
    }, []);

    return (
        <section className="py-20 bg-zinc-900 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400">Tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {["Full Stack", "AI/ML", "Cloud", "Security", "Design", "Media"].map((category) => {
                        const categorySkills = skills.filter(s => s.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <div key={category}>
                                <h3 className="text-2xl font-bold text-gray-300 mb-8 px-4 border-l-4 border-blue-500 flex items-center gap-3">
                                    {(() => {
                                        const Icon = categoryIcons[category];
                                        return Icon ? <Icon className="w-6 h-6 text-blue-400" /> : null;
                                    })()}
                                    {category}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill._id}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group"
                                        >
                                            <div className="text-4xl mb-4 text-gray-200 group-hover:scale-110 transition-transform">
                                                {skill.icon || "⚡"}
                                            </div>
                                            <span className="text-gray-300 font-medium text-center">{skill.name}</span>
                                            <div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.proficiency}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className={`h-full ${category === 'AI/ML' ? 'bg-purple-500' :
                                                        category === 'Security' ? 'bg-red-500' :
                                                            category === 'Design' ? 'bg-pink-500' :
                                                                category === 'Cloud' ? 'bg-orange-500' :
                                                                    'bg-blue-500'
                                                        }`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
