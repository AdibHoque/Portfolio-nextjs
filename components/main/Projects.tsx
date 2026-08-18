"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";

const projects = [
  {
    src: "/EventVerse-Image.png",
    title: "EventVerse",
    description:
      "Create & Connect: Your Event, Our Platform! Host events or grab tickets to exclusive events, all in one place. Your go-to platform for events and unforgettable experiences.",
    link: "https://eventversely.vercel.app/",
    clientcode: "https://github.com/AdibHoque/EventVerse",
    servercode: "https://github.com/AdibHoque/EventVerse",
    features: ["Manage Events", "Payment Integration", "Tickets"],
  },
  {
    src: "/Truebond-Image.png",
    title: "Truebond Matrimony",
    description:
      "Our platform offers a seamless experience for users seeking marriage partners, with features ranging from biodata creation and search to premium membership and success story sharing.",
    link: "https://truebond-matrimony.web.app/",
    clientcode: "https://github.com/AdibHoque/Truebond-Matrimony",
    servercode: "https://github.com/AdibHoque/Truebond-Matrimony-Backend",
    features: ["Dashboard", "Premium Membership", "Payments"],
  },
  {
    src: "/JobSeekers-Image.png",
    title: "JobSeekers BD",
    description:
      "JobSeekers BD is an online job portal designed to connect job seekers with potential employers. The platform offers job searching, application management, and job posting.",
    link: "https://jobseekers-bd.web.app/",
    clientcode: "https://github.com/AdibHoque/JobSeekers-BD",
    servercode: "https://github.com/AdibHoque/JobSeekers-BD-Backend",
    features: ["Authentication", "User-Friendly", "Responsive"],
  },
];

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
          A selection of full-stack applications built with real-world features
          and a focus on user experience.
        </motion.p>
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
