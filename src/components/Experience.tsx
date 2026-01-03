"use client";

import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2025 - Present",
        title: "Cloud Infrastructure Engineer",
        company: "DrivoX (Freelance)",
        description: "Designing and managing scalable cloud architectures, optimizing performance, and ensuring high availability for diverse client projects."
    },
    {
        year: "2024 - Present",
        title: "Server Networking Specialist",
        company: "DrivoX (Freelance)",
        description: "Configuring secure server networks, implementing load balancing, and managing complex routing protocols."
    },
    {
        year: "2024 - Present",
        title: "Penetration Tester",
        company: "DrivoX (Freelance)",
        description: "Conducting rigorous security assessments, vulnerability scanning, and penetration testing to secure client infrastructure."
    },
    {
        year: "2023 - Present",
        title: "Full Stack Developer",
        company: "DrivoX (Freelance)",
        description: "Building robust web applications using the MERN stack, Next.js, and scaling backend infrastructure."
    },
    {
        year: "2022 - Present",
        title: "Frontend Developer",
        company: "DrivoX (Freelance)",
        description: "Crafting responsive, interactive, and pixel-perfect user interfaces with modern frameworks like React and Tailwind."
    },
    {
        year: "2021 - Present",
        title: "Graphic Designer",
        company: "DrivoX (Freelance)",
        description: "Designing impactful visuals, logos, and brand identities that resonate with audiences."
    },
    {
        year: "2020 - Present",
        title: "Video Editor",
        company: "DrivoX (Freelance)",
        description: " producng high-quality video content, motion graphics, and visual storytelling for digital branding."
    }
];

export default function Experience() {
    return (
        <section className="py-32 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-l-2 border-white/10 pl-8 pb-12 last:pb-0 relative"
                        >
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300" />
                            <span className="text-sm text-blue-500 font-mono mb-2 block">{exp.year}</span>
                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-gray-400 mb-2">{exp.company}</p>
                            <p className="text-gray-500">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
