import Image from "next/image";

interface LogoBoxProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function LogoBox({ src, alt = "Logo", size = 34 }: LogoBoxProps) {
  return (
    <div className="h-[98px] px-10 py-8 bg-black border border-white/15 flex items-center justify-center rounded-lg">
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
}