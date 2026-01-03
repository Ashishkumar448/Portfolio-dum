export interface Project {
    _id: string;
    title: string;
    description: string;
    content: string;
    images: string[];
    technologies: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    likes: number;
    createdAt: string;
}

// ... Blog interface ... (kept as is, but allowed to be replaced if needed, here I assume replace_file_content replaces range)
// Wait, I need to keep Blog interface. I will target lines 1-13 (Project) and 33-73 (MOCK_PROJECTS).
// I'll make two calls or one large call if contiguous? They are not contiguous.
// I'll use multi_replace_file_content or just two replace calls.


export interface Blog {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    coverImage: string;
    tags: string[];
    category: string;
    author: {
        name: string;
        avatar?: string;
    };
    likes: number;
    featured: boolean;
    createdAt: string;
}

const MOCK_PROJECTS: Project[] = [
    {
        _id: "1",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with Next.js and Stripe.",
        content: "Detailed content about the e-commerce platform...",
        images: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"],
        technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        featured: true,
        likes: 120,
        createdAt: new Date().toISOString()
    },
    {
        _id: "2",
        title: "AI Chat Application",
        description: "Real-time chat application using OpenAI API and WebSocket.",
        content: "Detailed content about the AI Chat app...",
        images: ["https://images.unsplash.com/photo-1587560699334-cc4fa63490e2?w=800&q=80"],
        technologies: ["React", "Node.js", "Socket.io", "OpenAI"],
        category: "AI / ML",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        featured: true,
        likes: 85,
        createdAt: new Date().toISOString()
    },
    {
        _id: "3",
        title: "Portfolio Website",
        description: "Modern portfolio website with 3D elements and smooth animations.",
        content: "Detailed content about the portfolio...",
        images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"],
        technologies: ["Next.js", "Three.js", "GSAP", "Framer Motion"],
        category: "Frontend",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        featured: false,
        likes: 240,
        createdAt: new Date().toISOString()
    }
];

const MOCK_BLOGS: Blog[] = [
    {
        _id: "1",
        title: "Mastering React Server Components",
        slug: "mastering-react-server-components",
        description: "A deep dive into RSC and how they change web development.",
        content: "Full article content here...",
        coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        tags: ["React", "Next.js", "Web Development"],
        category: "Development",
        author: {
            name: "John Doe",
            avatar: "https://github.com/shadcn.png"
        },
        likes: 45,
        featured: true,
        createdAt: new Date().toISOString()
    },
    {
        _id: "2",
        title: "The Future of Web Design",
        slug: "future-of-web-design",
        description: "Exploring 3D elements, micro-interactions and dark mode trends.",
        content: "Full article content here...",
        coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
        tags: ["Design", "UI/UX", "Trends"],
        category: "Design",
        author: {
            name: "John Doe",
            avatar: "https://github.com/shadcn.png"
        },
        likes: 32,
        featured: false,
        createdAt: new Date().toISOString()
    }
];

const MOCK_SKILLS = [
    // Full Stack (Frontend + Backend)
    { _id: "1", name: "React", proficiency: 90, icon: "⚛️", category: "Full Stack" },
    { _id: "2", name: "Next.js", proficiency: 85, icon: "▲", category: "Full Stack" },
    { _id: "3", name: "TypeScript", proficiency: 85, icon: "TS", category: "Full Stack" },
    { _id: "4", name: "Node.js", proficiency: 80, icon: "💚", category: "Full Stack" },
    { _id: "5", name: "Python", proficiency: 80, icon: "🐍", category: "Full Stack" },
    { _id: "6", name: "Three.js", proficiency: 60, icon: "🧊", category: "Full Stack" },

    // Design
    { _id: "7", name: "Figma", proficiency: 85, icon: "🎨", category: "Design" },
    { _id: "8", name: "Adobe XD", proficiency: 75, icon: "✒️", category: "Design" },
    { _id: "9", name: "Blender", proficiency: 60, icon: "🟠", category: "Design" },

    // Security / Pentesting
    { _id: "10", name: "Web Pentesting", proficiency: 75, icon: "🛡️", category: "Security" },
    { _id: "11", name: "Burp Suite", proficiency: 70, icon: "🐞", category: "Security" },
    { _id: "12", name: "Network Sec", proficiency: 65, icon: "🔒", category: "Security" },

    // Cloud
    { _id: "13", name: "AWS", proficiency: 70, icon: "☁️", category: "Cloud" },
    { _id: "14", name: "Docker", proficiency: 75, icon: "🐳", category: "Cloud" },
    { _id: "15", name: "Kubernetes", proficiency: 60, icon: "☸️", category: "Cloud" },

    // Gen AI / RAG
    { _id: "16", name: "LangChain", proficiency: 80, icon: "🔗", category: "AI/ML" },
    { _id: "17", name: "OpenAI API", proficiency: 90, icon: "🤖", category: "AI/ML" },
    { _id: "18", name: "RAG Pipelines", proficiency: 85, icon: "🧠", category: "AI/ML" },
    { _id: "19", name: "HuggingFace", proficiency: 75, icon: "🤗", category: "AI/ML" },

    // Media & Creative
    { _id: "20", name: "DaVinci Resolve", proficiency: 85, icon: "🎞️", category: "Media" },
    { _id: "21", name: "Adobe Premiere", proficiency: 80, icon: "🎬", category: "Media" },
    { _id: "22", name: "Adobe After Effects", proficiency: 75, icon: "✨", category: "Media" },
    { _id: "23", name: "Adobe Photoshop", proficiency: 90, icon: "📸", category: "Media" },
    { _id: "24", name: "Adobe Illustrator", proficiency: 85, icon: "✒️", category: "Media" },
];

class ApiClient {

    constructor() {
        // Mock client doesn't need base URL
    }

    // Projects
    async getProjects(params?: { page?: number; limit?: number; category?: string; search?: string; featured?: boolean }) {
        let projects = [...MOCK_PROJECTS];

        if (params?.featured) {
            projects = projects.filter(p => p.featured);
        }

        if (params?.search) {
            const search = params.search.toLowerCase();
            projects = projects.filter(p =>
                p.title.toLowerCase().includes(search) ||
                p.description.toLowerCase().includes(search)
            );
        }

        return {
            data: projects,
            pagination: {
                total: projects.length,
                page: params?.page || 1,
                pages: 1
            }
        };
    }

    async getProject(id: string) {
        const project = MOCK_PROJECTS.find(p => p._id === id);
        if (!project) throw new Error("Project not found");
        return { data: project };
    }

    async likeProject(_id: string) {
        return { success: true, message: "Project liked" };
    }

    // Blogs
    // Blogs
    async getBlogs(params?: { page?: number; limit?: number; category?: string; search?: string }) {
        try {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashishkumarjena1437');
            const data = await response.json();

            if (data.status === 'ok') {
                const mediumBlogs: Blog[] = data.items.map((item: any) => ({
                    _id: item.guid,
                    title: item.title,
                    slug: item.link, // using link as slug for external redirect
                    description: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...', // Strip HTML
                    content: item.content,
                    coverImage: item.thumbnail,
                    tags: item.categories,
                    category: "Tech", // Default category
                    author: {
                        name: item.author,
                        avatar: data.feed.image
                    },
                    likes: 0,
                    featured: false,
                    createdAt: item.pubDate
                }));

                let blogs = mediumBlogs;

                if (params?.search) {
                    const search = params.search.toLowerCase();
                    blogs = blogs.filter(b =>
                        b.title.toLowerCase().includes(search) ||
                        b.description.toLowerCase().includes(search)
                    );
                }

                // If no blogs found from Medium (or empty), maybe fallback or just return empty
                if (blogs.length === 0) {
                    blogs = [...MOCK_BLOGS]; // Fallback to mock if desired, or remove this line
                }

                return {
                    data: blogs,
                    pagination: {
                        total: blogs.length,
                        page: params?.page || 1,
                        pages: 1
                    }
                };
            }
        } catch (error) {
            console.error("Failed to fetch Medium blogs:", error);
        }

        // Fallback to MOCK_BLOGS if fetch fails
        let blogs = [...MOCK_BLOGS];
        if (params?.search) {
            const search = params.search.toLowerCase();
            blogs = blogs.filter(b =>
                b.title.toLowerCase().includes(search) ||
                b.description.toLowerCase().includes(search)
            );
        }

        return {
            data: blogs,
            pagination: {
                total: blogs.length,
                page: params?.page || 1,
                pages: 1
            }
        };
    }

    async getBlog(id: string) {
        // Try to find by ID or slug (simplified)
        const blog = MOCK_BLOGS.find(b => b._id === id || b.slug === id);
        if (!blog) throw new Error("Blog not found");
        return { data: blog };
    }

    async likeBlog(_id: string) {
        return { success: true, message: "Blog liked" };
    }

    // Skills
    async getSkills() {
        return { data: MOCK_SKILLS };
    }

    // Contact
    async submitContact(data: { name: string; email: string; subject: string; message: string }) {
        console.log("Contact form submitted:", data);
        return { success: true, message: "Message sent successfully" };
    }

    // Comments
    async getComments(_blogId: string, _params?: { page?: number; limit?: number }) {
        return {
            data: [
                {
                    _id: "c1",
                    content: "Great article! thanks for sharing.",
                    author: { name: "Alice", email: "alice@example.com" },
                    createdAt: new Date().toISOString()
                }
            ],
            pagination: { total: 1, page: 1, pages: 1 }
        };
    }

    async addComment(_blogId: string, data: { content: string; author: { name: string; email: string }; parentComment?: string }) {
        console.log("Comment added:", data);
        return { success: true, message: "Comment added" };
    }

    // Analytics
    async trackEvent(data: { type: string; resourceId?: string }) {
        console.log("Event tracked:", data);
        return { success: true };
    }
}

export const api = new ApiClient();
