"use client";

import React from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const variants = {
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: i * 0.08, duration: 0.4, ease: "easeOut"},
  }),
};

const SkillDataProvider = ({src, width, height, index, name}: Props) => {
  const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{y: -4, transition: {duration: 0.2}}}
      className="card group flex w-[100px] flex-col items-center gap-3 p-4 sm:w-[110px] bg-white/[0.01] hover:bg-white/[0.03] border-glass/50 hover:border-accent/40"
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <Image
          src={src}
          width={width}
          height={height}
          alt={`${name} logo`}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-center text-xs font-medium text-muted">{name}</span>
    </motion.div>
  );
};

export default SkillDataProvider;
