"use client";
import React from "react";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      className="flex w-full flex-col items-center text-center"
    >
      <motion.span variants={fadeUp()} className="eyebrow">
        <SparklesIcon className="h-4 w-4 text-accent-soft" />
        My Skills
      </motion.span>
      <motion.h2
        variants={fadeUp(0.1)}
        className="mt-6 max-w-[600px] text-3xl font-bold tracking-tight text-text md:text-4xl"
      >
        Building with modern technologies
      </motion.h2>
      <motion.p
        variants={fadeUp(0.2)}
        className="mt-4 max-w-[520px] text-lg text-muted"
      >
        The tools and frameworks I reach for to ship polished, reliable web
        applications.
      </motion.p>
    </motion.div>
  );
};

export default SkillText;
