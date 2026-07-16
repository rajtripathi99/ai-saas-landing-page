import Image from "next/image";

interface LogoBoxProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function LogoBox({ src, alt = "Logo", size = 34 }: LogoBoxProps) {
  return (
    <div className="h-[48px] md:h-[98px] px-4 md:px-10 py-2.5 md:py-8 bg-black border border-white/15 flex items-center justify-center rounded-lg">
      <Image src={src} alt={alt} width={size} height={size} className="max-h-[36px] md:max-h-none w-auto" />
    </div>
  );
}