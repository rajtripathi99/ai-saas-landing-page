import LogoBox from "./LogoBox";

export default function LogoTicker() {
    return (
        <section className="container px-28 pb-14 flex flex-col items-center gap-5">
            <span className="text-white/60 ">Trusted by the world’s most innovative teams</span>
            <div></div>
            <div className="flex items-center gap-4">
                <LogoBox src="/assets/2x.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/pulse.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/outside.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/echo.svg" alt="2x" size={200}/>
            </div>
            <div className="flex items-center gap-4">
                <LogoBox src="/assets/acme-1.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/apex.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/quantum.svg" alt="2x" size={200}/>
                <LogoBox src="/assets/celestial.svg" alt="2x" size={200}/>
            </div>
        </section>
    );
}