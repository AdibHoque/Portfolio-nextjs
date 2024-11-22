"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {motion} from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Projects</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          My projects made with best technologies
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Never compromise on user experience
        </motion.div>
      </div>
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:px-10 ">
        <ProjectCard
          src="/EventVerse-Image.png"
          title="EventVerse"
          description="Create & Connect: Your Event, Our Platform! Host events or grab tickets to exclusive events, all in one place. Your go-to platform for events and unforgettable experiences."
          link="https://eventversely.vercel.app/"
          clientcode="https://github.com/AdibHoque/EventVerse"
          servercode="https://github.com/AdibHoque/EventVerse"
          features={JSON.parse(
            '["Manage Events", "Payment Integretion", "Tickets"]'
          )}
        />
        <ProjectCard
          src="/Truebond-Image.png"
          title="Truebond Matrimony"
          description="Our platform offers a seamless experience for users seeking marriage partners, with features ranging from biodata creation and search to premium membership and success story sharing."
          link="https://truebond-matrimony.web.app/"
          clientcode="https://github.com/AdibHoque/Truebond-Matrimony"
          servercode="https://github.com/AdibHoque/Truebond-Matrimony-Backend"
          features={JSON.parse(
            '["Dashboard", "Premium Membership", "Payments"]'
          )}
        />
        <ProjectCard
          src="/JobSeekers-Image.png"
          title="JobSeekers BD"
          description="JobSeekers BD is an online job portal designed to connect job seekers with potential employers. The platform offers job searching, application management, and job posting."
          link="https://jobseekers-bd.web.app/"
          clientcode="https://github.com/AdibHoque/JobSeekers-BD"
          servercode="https://github.com/AdibHoque/JobSeekers-BD-Backend"
          features={JSON.parse(
            '["Authentication", "User-Friendly", "Responsive"]'
          )}
        />
      </div>
    </div>
  );
};

export default Projects;
