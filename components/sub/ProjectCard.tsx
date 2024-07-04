import Image from "next/image";
import Link from "next/link";
import React from "react";

import {motion} from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {FaCode, FaEye} from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  clientcode: string;
  servercode: string;
  features: string[];
}

const ProjectCard = ({
  src,
  title,
  description,
  link,
  clientcode,
  servercode,
  features,
}: Props) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="button-primary hover:cursor-pointer relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-48 object-fill"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          <p className="mt-2 text-lg text-gray-300 font-bold">Core Features</p>
          <div className="flex gap-2 flex-wrap ">
            {features.map((f) => (
              <button
                disabled
                className="button-primary text-xs md:text-sm rounded-md text-white p-2"
                key={f}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="mt-2 text-lg text-gray-300 font-bold">
            Used Technologies
          </p>
          <div>
            <Image
              src="/used-tech.svg"
              alt="react-svg"
              key="react-svg"
              width={1000}
              height={1000}
            />
          </div>

          <div className="flex gap-2 w-full max-md:flex-wrap">
            <Link
              href={clientcode}
              className="py-2 mt-2 z-50 button-primary flex items-center justify-center gap-x-2 text-center text-white cursor-pointer rounded-lg w-full max-w-[200px]"
            >
              <FaCode></FaCode>
              Client Code
            </Link>
            <Link
              href={servercode}
              className="py-2 mt-2 z-50 button-primary flex items-center justify-center gap-x-2 text-center text-white cursor-pointer rounded-lg w-full max-w-[200px]"
            >
              <FaCode></FaCode> Server Code
            </Link>
          </div>
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
