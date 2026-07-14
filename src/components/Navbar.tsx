import { ChevronDownIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="container bg-black/20 border-white/15 border-b h-18 flex items-center justify-between px-4 md:px-0">
            <nav className="max-w-4xl mx-auto flex items-center justify-between w-full">
                <Link href="/" className="text-white text-2xl font-bold pointer-events-none">
                    <Image src="/assets/nav-logo.svg" alt="logo" width={40} height={40} draggable={false} loading="lazy" />
                </Link>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-10 px-8 py-2 rounded-full border border-white/15 text-md">
                    <Link href="/" className="text-white/60 flex items-center gap-1">
                        Features <ChevronDownIcon className="w-4 h-4" />
                    </Link>
                    <Link href="/" className="text-white/60">
                        Developers
                    </Link>
                    <Link href="/" className="text-white/60 flex items-center gap-1">
                        Company <ChevronDownIcon className="w-4 h-4" />
                    </Link>
                    <Link href="/" className="text-white/60">
                        Blog
                    </Link>
                    <Link href="/" className="text-white/60">
                        Changelog
                    </Link>
                </div>
                {/* Desktop CTA */}
                <div className="hidden md:block p-1 border border-white/20 rounded-lg">
                    <button className="bg-[#8C45FF]/40 backdrop-blur-md border border-white/35 rounded-md px-3 py-1 text-sm tracking-wide text-white shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] cursor-pointer">Join Waitlist</button>
                </div>
                {/* Mobile hamburger */}
                <button className="md:hidden text-white/60 p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </nav>
        </header>
    );
}