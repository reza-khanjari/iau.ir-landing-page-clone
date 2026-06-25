import { type ReactNode } from "react";
import { GiVanillaFlower } from "react-icons/gi";

interface HeadingProps {
  children: ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  shapes?: boolean;
}

function Heading({ level = "h1", children, shapes = true ,className }: HeadingProps) {
  const Tag = level;
  const baseStyle =
    "font-vazir-bold my-16 flex items-center justify-center gap-x-6 ";
  const styles: Record<HeadingProps["level"], string> = {
    h1: "text-xl sm:text-3xl md:text-4xl",
    h2: "text-xl sm:text-2xl md:text-3xl",
    h3: "text-lg md:text-2xl",
    h4: "text-base md:text-xl",
    h5: "text-base md:text-lg",
    h6: "text-base md:text-lg",
  };
  return (
    <Tag className={`${baseStyle} ${styles[Tag]} ${className} `}>
      {shapes && <GiVanillaFlower className="text-5xl text-[#262630]" />}
      {children}
      {shapes && <GiVanillaFlower className="text-5xl text-[#262630]" />}
    </Tag>
  );
}

export default Heading;
