"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import {projects, PROJECT_CATEGORIES, ProjectCategory} from "@/constants/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:gap-12 md:px-10 md:py-24 lg:py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.4}}
        className="flex w-full flex-col items-center text-center"
      >
        <motion.span variants={fadeUp()} className="eyebrow">
          <SparklesIcon className="h-4 w-4 text-accent-soft" />
          My Projects
        </motion.span>
        <motion.h2
          variants={fadeUp(0.1)}
          className="mt-6 max-w-[600px] text-3xl font-bold tracking-tight text-text md:text-4xl"
        >
          Things I&apos;ve built
        </motion.h2>
        <motion.p
          variants={fadeUp(0.2)}
          className="mt-4 max-w-[520px] text-lg text-muted"
        >
          A selection of products I&apos;ve shipped — from full-stack applications
          to vibe-coded experiments.
        </motion.p>
      </motion.div>

      {/* Category legend */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
      >
        {(Object.keys(PROJECT_CATEGORIES) as ProjectCategory[]).map((category) => (
          <span
            key={category}
            className="inline-flex items-center gap-1.5 text-sm text-muted"
          >
            <span className={`size-2 rounded-full ${PROJECT_CATEGORIES[category].dot}`} />
            {PROJECT_CATEGORIES[category].label}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.15}}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp()}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
