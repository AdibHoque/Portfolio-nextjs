import Image from "next/image";
import Link from "next/link";
import React from "react";

import {motion} from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {FaEye} from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({src, title, description, link}: Props) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="button-primary hover:cursor-pointer relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-56 object-fill"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          <Link
            href={link}
            className="py-2 mt-2 z-50 button-primary flex items-center justify-center gap-x-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <FaEye></FaEye>
            Live Preview
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
