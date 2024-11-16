"use client";

import React from "react";
import {motion} from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {FaDownload} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-4 md:px-8 lg:px-20 mt-20 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="invisible lg:visible Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello, I am <br></br>
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Adib Hoque{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m an aspiring Frontend Developer with a growing portfolio of
          web applications. I have foundational knowledge in various
          technologies and tools, and I am passionate about creating
          user-friendly and responsive web solutions. I&apos;m eager to continue
          learning and expanding my skill set in this exciting field.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/resume.pdf"
          download
          className="z-2 py-2 button-primary flex items-center justify-center gap-x-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <FaDownload></FaDownload> Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
