import Image from "next/image";

export default function Features() {
    return (
        <section className="py-20">
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-xl max-w-xs text-center">Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h1>
                <div className="flex flex-col gap-4 w-full max-w-5xl">
                    {/* Row 1 — 1:2 split */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-black border border-white/15 rounded-2xl p-6 min-h-[340px] flex flex-col gap-4">
                            <div className="flex-1 flex items-center justify-center">
                                <Image src="/assets/Visual-top.svg" alt="visual-top" width={300} height={300} />
                            </div>
                            <div className="space-y-2">
                                <h1>SEO goal setting</h1>
                                <p className="text-white/60 text-sm max-w-[220px]">Helps you set and achieve SEO goals with guided assistance.</p>
                            </div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-b from-black to-[#371866] rounded-2xl p-6 min-h-[340px] flex flex-col justify-end relative">
                            <Image src="/assets/top-right.png" alt="top-right" width={590} height={400} className="absolute right-0 bottom-0 mask-b-from-0% to-30%"/>
                            {/* User-friendly dashboard */}
                            <div className="space-y-2">
                                <h1>User-friendly dashboard</h1>
                                <p className="text-white/60 text-sm max-w-[420px]">Perform complex SEO audits and optimizations with a single click.</p>
                            </div>
                        </div>
                    </div>
                    {/* Row 2 — 3:2 split */}
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-3 bg-gradient-to-b from-black to-[#371866] rounded-2xl p-6 min-h-[340px] flex flex-col justify-end">
                            <Image src="/assets/bottom-left.png" alt="bottom-left" width={500} height={400} className="m-auto translate-y-10 mask-b-from-0% to-25%"/>
                            {/* Visual reports */}
                            <div className="space-y-2">
                                <h1>Visual reports</h1>
                                <p className="text-white/60 text-sm">Visual insights into your site’s performance.</p>
                            </div>
                        </div>
                        <div className="col-span-2 bg-black border border-white/15 rounded-2xl p-6 min-h-[340px] flex flex-col gap-4">
                            <div className="flex-1 flex items-center justify-center">
                                <Image src="/assets/Visual-bottom.svg" alt="visual-bottom" width={300} height={300} />
                            </div>
                            {/* Smart Keyword Generator */}
                            <div className="space-y-2">
                                <h1>Smart Keyword Generator</h1>
                                <p className="text-white/60 text-sm max-w-[180px]">Automatic suggestions and the best keywords to target.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}