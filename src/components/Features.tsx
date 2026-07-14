import { BarChart3, BellRing, FileSearch, Globe, Link2, ListChecks, MousePointerClick, Sparkles, Target } from "lucide-react";

const features = [
    {
        icon: <Globe className="w-5 h-5 text-white/60" />,
        title: "User-friendly dashboard",
        description: "Perform complex SEO audits and optimizations with a single click.",
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-white/60" />,
        title: "Visual reports",
        description: "Visual insights into your site's performance.",
    },
    {
        icon: <Sparkles className="w-5 h-5 text-white/60" />,
        title: "Smart Keyword Generator",
        description: "Automatic suggestions and the best keywords to target.",
    },
    {
        icon: <FileSearch className="w-5 h-5 text-white/60" />,
        title: "Content evaluation",
        description: "Simple corrections for immediate improvements.",
    },
    {
        icon: <Target className="w-5 h-5 text-white/60" />,
        title: "SEO goal setting",
        description: "Helps you set and achieve SEO goals with guided assistance.",
    },
    {
        icon: <BellRing className="w-5 h-5 text-white/60" />,
        title: "Automated alerts",
        description: "Automatic notifications about your SEO health, including quick fixes.",
    },
    {
        icon: <Link2 className="w-5 h-5 text-white/60" />,
        title: "Link Optimization Wizard",
        description: "Guides you through the process of creating and managing links.",
    },
    {
        icon: <MousePointerClick className="w-5 h-5 text-white/60" />,
        title: "One-click optimization",
        description: "Perform complex SEO audits and optimizations with a single click.",
    },
    {
        icon: <ListChecks className="w-5 h-5 text-white/60" />,
        title: "Competitor reports",
        description: "Provides insights into competitors' keyword strategies and ranking.",
    },
];

export default function Features() {
    return (
        <section
            className="py-20 px-10"
            style={{ background: "linear-gradient(to right, #190D2E, #020103)" }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-16">
                    Elevate your <br /> SEO efforts.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex items-center gap-2">
                                {feature.icon}
                                <h3 className="text-white font-medium">{feature.title}</h3>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}