import LogoBox from "./LogoBox";

export default function LogoTicker() {
    return (
        <section className="container px-4 md:px-28 pb-18 flex flex-col items-center gap-5">
            <span className="text-white/60 text-center text-sm md:text-base">Trusted by the world's most innovative teams</span>
            <div></div>
            <div className="grid grid-cols-2 md:flex items-center gap-4">
                <LogoBox src="/assets/2x.svg" alt="2x" size={160}/>
                <LogoBox src="/assets/pulse.svg" alt="Pulse" size={160}/>
                <LogoBox src="/assets/outside.svg" alt="Outside" size={160}/>
                <LogoBox src="/assets/echo.svg" alt="Echo" size={160}/>
            </div>
            <div className="grid grid-cols-2 md:flex items-center gap-4">
                <LogoBox src="/assets/acme-1.svg" alt="Acme" size={160}/>
                <LogoBox src="/assets/apex.svg" alt="Apex" size={160}/>
                <LogoBox src="/assets/quantum.svg" alt="Quantum" size={160}/>
                <LogoBox src="/assets/celestial.svg" alt="Celestial" size={160}/>
            </div>
        </section>
    );
}