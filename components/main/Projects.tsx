import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Truebond-Image.png"
          title="Truebond Matrimony"
          description="Our platform offers a seamless experience for users seeking marriage partners, with features ranging from biodata creation and search to premium membership and success story sharing."
          link="https://truebond-matrimony.web.app/"
        />
        <ProjectCard
          src="/Jobseekers-Image.png"
          title="JobSeekers BD"
          description="JobSeekers BD is an online job portal designed to connect job seekers with potential employers. The platform offers a range of features to facilitate job searching, application management, and job posting."
          link="https://jobseekers-bd.web.app/"
        />
        <ProjectCard
          src="/TrekTravels-Image.png"
          title="Trek Travels"
          description="Whether you're an adventurous soul, seeking thrilling experiences or wanna immerse yourself in diverse cultures, Trek Travels offers you the perfect platform to embark on unforgettable journeys across the world."
          link="https://trek-travels.web.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
