"use client";

import React from "react";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import {FaDownload} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/sub/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-pulse rounded-full bg-accent/20" />
    </div>
  ),
});

const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-8 px-5 pt-24 sm:gap-12 sm:px-8 md:px-10 md:pt-28 lg:flex-row lg:justify-between lg:pt-32"
    >
      {/* Text content */}
      <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-start">
        <motion.span variants={fadeUp()} className="eyebrow">
          <SparklesIcon className="h-4 w-4 text-accent-soft" />
          Frontend Developer
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-5 max-w-[560px] text-[2rem] font-bold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl lg:max-w-[620px] lg:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            Adib Hoque
          </span>
          <br />I build for the web.
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-5 max-w-[480px] text-base leading-relaxed text-muted sm:text-lg"
        >
          A frontend developer crafting fast, responsive, user-friendly web
          applications with React, Next.js and TypeScript — and always keen to
          learn what comes next.
        </motion.p>

        <motion.div
          variants={fadeUp(0.3)}
          className="mt-8 flex w-full flex-col items-stretch gap-3 xs:flex-row xs:items-center xs:justify-center sm:w-auto lg:justify-start"
        >
          <a href="#projects" className="btn btn-primary">
            View Work
            <FiArrowRight className="h-4 w-4" />
          </a>
          <a href="/Resume.pdf" download className="btn btn-ghost">
            <FaDownload className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* 3D Scene */}
      <motion.div
        variants={fadeUp(0.15)}
        className="hidden w-full shrink-0 items-center justify-center lg:flex lg:max-w-[520px]"
        style={{ height: 480 }}
      >
        <HeroCanvas />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
