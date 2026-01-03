"use client";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Terminal, Share2, Palette, MessageSquare, PlaySquare } from 'lucide-react';

const categoryIcons: Record<string, any> = {
    "Coding Platforms": Terminal,
    "Dev Socials": Share2,
    "Design & Portfolio": Palette,
    "Communication": MessageSquare,
    "Media": PlaySquare
};

const linkCategories = [
    {
        title: "Coding Platforms",
        links: [
            { name: "LeetCode", url: "https://leetcode.com/u/ashishkumar1437/", icon: "💻" },
            { name: "HackerRank", url: "#", icon: "👨‍💻" },
            { name: "Codeforces", url: "#", icon: "📊" },
            { name: "CodeChef", url: "#", icon: "🍳" },
            { name: "Codepen", url: "#", icon: "🖊️" },
            { name: "GeeksforGeeks", url: "#", icon: "🤓" },
            { name: "Exercism", url: "#", icon: "🏋️" },
            { name: "Replit", url: "#", icon: "🚀" },
            { name: "Buy me a Coffee", url: "#", icon: "☕" },
        ]
    },
    {
        title: "Dev Socials",
        links: [
            { name: "GitHub", url: "https://github.com/ashishkumar1437", icon: "🐙" },
            { name: "GitLab", url: "#", icon: "🦊" },
            { name: "Bitbucket", url: "#", icon: "🗑️" },
            { name: "Stack Overflow", url: "#", icon: "📚" },
            { name: "Hashnode", url: "#", icon: "📝" },
            { name: "Dev.to", url: "#", icon: "👩‍💻" },
            { name: "Medium", url: "https://medium.com/@ashishkumarjena1437", icon: "✍️" },
            { name: "Reddit", url: "#", icon: "👽" },
            { name: "Quora", url: "#", icon: "❓" },
        ]
    },
    {
        title: "Design & Portfolio",
        links: [
            { name: "Dribbble", url: "#", icon: "🏀" },
            { name: "Behance", url: "#", icon: "🎨" },
            { name: "Figma", url: "#", icon: "📐" },
            { name: "Notion", url: "#", icon: "📓" },
            { name: "Polywork", url: "#", icon: "🧱" },
            { name: "Gumroad", url: "#", icon: "🛍️" },
            { name: "ProductHunt", url: "#", icon: "🦄" },
            { name: "Personal Portfolio", url: "/", icon: "🌐" },
        ]
    },
    {
        title: "Communication",
        links: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ashishkumar", icon: "💼" },
            { name: "Twitter (X)", url: "https://twitter.com/ashishkumar", icon: "🐦" },
            { name: "Discord", url: "#", icon: "💬" },
            { name: "Telegram", url: "#", icon: "✈️" },
            { name: "Email", url: "mailto:ashishkumar48.connect@gmail.com", icon: "📧" },
        ]
    },
    {
        title: "Media",
        links: [
            { name: "YouTube", url: "#", icon: "▶️" },
            { name: "Instagram", url: "#", icon: "📷" },
            { name: "Twitch", url: "#", icon: "👾" },
        ]
    }
];

export default function LinkTree() {
    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
                        <div className="w-full h-full rounded-full bg-black overflow-hidden">
                            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Ashish Kumar</h1>
                    <p className="text-gray-400 text-sm">Full Stack Developer • UI/UX Enthusiast • Content Creator</p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-12">
                    {linkCategories.map((category, catIndex) => (
                        <div key={category.title}>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-4"
                            >
                                {(() => {
                                    const Icon = categoryIcons[category.title];
                                    return Icon ? <Icon className="w-5 h-5 text-gray-400" /> : null;
                                })()}
                                {category.title}
                                <div className="h-[1px] flex-1 bg-gray-800" />
                            </motion.h2>

                            <div className="grid gap-4">
                                {category.links.map((link, linkIndex) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target={link.url.startsWith('http') ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (catIndex * 0.1) + (linkIndex * 0.05) }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-4 p-4 bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 hover:border-white/20 rounded-xl transition-all group backdrop-blur-sm"
                                    >
                                        <span className="text-2xl">{link.icon}</span>
                                        <span className="font-medium text-gray-200 group-hover:text-white flex-1">{link.name}</span>
                                        <span className="text-gray-600 group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                        ← Back to Main Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}

