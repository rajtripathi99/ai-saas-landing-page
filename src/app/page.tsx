import Bento from "@/components/Bento";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Bento />
      <Features />
    </>
  );
}