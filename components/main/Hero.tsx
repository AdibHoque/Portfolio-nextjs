import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-full w-full"
      id="about"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-220px] sm:top-[-160px] md:top-[-200px] lg:top-[-240px] h-full w-full left-0 object-cover -z-30"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
