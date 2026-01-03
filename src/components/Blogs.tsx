"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { api, type Blog } from "../lib/api";

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        api.getBlogs().then(res => {
            setBlogs(res.data);
        });
    }, []);

    return (
        <section className="py-32 bg-zinc-950 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-2">Thoughts & Insights</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Latest Articles</h3>
                    </div>
                    <a href="https://medium.com/@ashishkumarjena1437" target="_blank" className="hidden md:block text-white border-b border-blue-500 pb-1 hover:text-blue-500 transition-colors">View all articles</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <a href={blog.slug} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-white/10 relative">
                                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                    <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                    <span>{blog.author.name}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                                    {blog.title}
                                </h4>
                                <div className="text-white/60 text-sm group-hover:text-white transition-colors inline-flex items-center gap-2">
                                    Read Article
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
