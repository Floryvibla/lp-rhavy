import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HeroSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  onButtonClick?: () => void;
  classNameHeroImg?: string;
  classNameContainerHeroImg?: string;
  stylesImgHero?: React.CSSProperties
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  classNameHeroImg,
  classNameContainerHeroImg,
  className,
  stylesImgHero,
  onButtonClick
}) => {
  return (
    <section className={cn("flex flex-col-reverse xl:flex-row w-full max-h-[90vh] h-[70vh] justify-center items-center px-5 xl:px-[15%] py-10 xl:py-0 text-white bg-gradient-to-r from-secondary to-primary", className)}>
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center xl:pr-10 mb-8 xl:mb-0">
        <h2 className="text-lg xl:text-xl font-extralight tracking-[0.55em] uppercase text-center xl:text-left">
          {subtitle}
        </h2>
        <h1 className="text-3xl xl:text-6xl font-bold mb-4 xl:mb-6 text-center xl:text-left">
          {title}
        </h1>
        <p className="text-base xl:text-lg font-light text-center xl:text-left mb-6">
          {description}
        </p>
        <Button
          className="w-full xl:w-auto mt-4 font-semibold uppercase hover:opacity-85 hover:bg-primary shadow-2xl px-6 py-3 xl:py-2 mx-auto xl:mx-0"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>

      {/* Image Section */}
      <div className={cn("w-full xl:flex-1 h-full relative", classNameContainerHeroImg)}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          className={cn("object-contain", classNameHeroImg)}
          style={stylesImgHero}
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};
