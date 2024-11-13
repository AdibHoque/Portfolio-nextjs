"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full py-4 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
        <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-sm:px-4; flex items-center h-14 max-lg:px-5">
          <a href="/" className="flex-1 cursor-pointer lg:hidden z-2">
            <div className="flex  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex-col gap-0 ">
              <h1 className="text-4xl font-extrabold">ADIB</h1>
              <h3 className="text-3xl font-bold -mt-2">HOQUE</h3>
            </div>
          </a>
          <div
            className={clsx(
              "w-full max-lg:opacity-0 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0C1838] transform transition-all duration-500 ease-in-out",
              open ? "max-lg:opacity-100" : "max-lg:opacity-0"
            )}
          >
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-lg:before:absolute max-lg:before:-right-64 max-lg:before:top-2/5 max-lg:before:h-[440px] max-lg:before:w-[252px] max-lg:before:bg-purple-500 max-lg:before:blur-[200px] max-lg:before:content-[''] max-md:px-4">
              <nav className="max-lg:relative max-lg:m-auto max-lg:z-2">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="nav-li">
                    <Link className="navlink" href="#about">
                      About
                    </Link>
                    <div className="dot"></div>
                    <Link className="navlink" href="#skills">
                      Skills
                    </Link>
                  </li>

                  <li className="nav-logo">
                    <Link
                      href="#hero"
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
                      {/* <Image
                        src="/adiblogo.svg"
                        width={160}
                        height={55}
                        alt="Logo"
                      /> */}
                      <div className="flex text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex-col gap-0 justify-center items-center">
                        <h1
                          style={{
                            WebkitTextStroke: "2px black",
                            color: "transparent",
                          }}
                          className="text-5xl font-extrabold"
                        >
                          ADIB
                        </h1>
                        <h3
                          style={{
                            WebkitTextStroke: "2px black",
                            color: "transparent",
                          }}
                          className="text-4xl font-bold -mt-2"
                        >
                          HOQUE
                        </h3>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-li">
                    <Link className="navlink" href="#projects">
                      Projects
                    </Link>
                    <div className="dot"></div>
                    <Link className="navlink" href="#contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="absolute block lg:hidden z-50 top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                <Image
                  src="/bg-outlines.svg"
                  width={960}
                  height={380}
                  className="relative z-2"
                  alt=""
                />
                <Image
                  src="/bg-outlines-fill.png"
                  width={960}
                  height={380}
                  className="absolute inset-0 mix-blend-soft-light opacity-5"
                  alt=""
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="size-10 z-50 flex items-center justify-center  rounded-full lg:hidden size-10 border-s4/25"
          >
            <Image
              src={`/${open ? "close" : "magic"}.svg`}
              alt="hamburger"
              width={28}
              height={28}
              className="object-contain"
            />
          </button>
        </div>
      </header>
    </>
  );
}
