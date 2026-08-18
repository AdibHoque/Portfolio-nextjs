import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen w-full"
      id="about"
    >
      <HeroContent />
    </section>
  );
};

export default Hero;
