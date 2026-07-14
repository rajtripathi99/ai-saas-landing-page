import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center pt-16 md:pt-24 relative max-h-fit container px-4 md:px-0">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-1 px-2 py-1.5 bg-black border border-white/15 w-fit rounded-full"><span className="bg-[#9855FF] px-[4px] py-px text-black font-bold rounded-full text-xs">NEW</span><span className="text-[#9855FF] text-xs ">Latest integration just arrived</span></div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#B372CF] text-transparent bg-clip-text  text-center leading-[1.1]">
                    Boost your <br /> rankings with AI.
                </h1>
                <p className="text-white max-w-md text-center text-sm md:text-base px-4">Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
                <div className="p-1 border border-white/20 rounded-lg">
                    <button className="bg-white border border-white/35 rounded-md px-3 py-1 text-sm tracking-wide text-black cursor-pointer">Start for Free</button>
                </div>
                <div className="  w-full h-full absolute inset-0 -z-10">
                    <Image src="/assets/circles-bg.svg" alt="bg-img" className="object-fill pt-56 [mask-image:linear-gradient(to_top,transparent_20%,black_90%)]" fill priority />
                </div>
            </div>
            <Image src="/assets/app.png" alt="dashboard-img" className="pointer-events-none -mt-5 md:-mt-10 -mb-20 md:-mb-42 [mask-image:linear-gradient(to_bottom,black_20%,transparent_70%)]" width="1120" height="815" draggable={false} loading="lazy" />
        </section>
    );
}