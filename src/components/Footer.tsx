import Image from "next/image";
import Link from "next/link";
import { X, Camera, Play } from "lucide-react";

const footerLinks = {
    Product: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
    Company: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"],
    Resources: ["Examples", "Community", "Guides", "Docs", "Press"],
    Legal: ["Privacy", "Terms", "Security"],
};

export default function Footer() {
    return (
        <footer className="border-t border-white/15 bg-black pt-12 pb-8 px-4 md:px-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Logo */}
                    <div className="flex items-start gap-3">
                        <Image src="/assets/nav-logo.svg" alt="logo" width={36} height={36} />
                        <span className="text-white font-medium text-sm mt-1.5">AI Startup Kit</span>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="space-y-4">
                                <h4 className="text-white font-medium text-sm">{category}</h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <Link href="/" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-5 mt-12">
                    <Link href="/" className="text-white/50 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </Link>
                    <Link href="/" className="text-white/50 hover:text-white transition-colors">
                        <Camera className="w-5 h-5" />
                    </Link>
                    <Link href="/" className="text-white/50 hover:text-white transition-colors">
                        <Play className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
