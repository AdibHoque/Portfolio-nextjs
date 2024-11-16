"use client";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import MySwal from "sweetalert2";
import {motion} from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "Adib-Portfolio",
          "template_fke9x0s",
          form.current,
          "9MKherpptDhGZ-j_6"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "Email Sent!",
              showConfirmButton: false,
            });
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div
      id="contact"
      className=" mt-20 flex flex-col justify-center items-center z-10"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Contact Me</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] px-5"
        >
          I would write back as soon as possible.
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Great things awaits
        </motion.div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="px-4 mb-12 max-w-md mx-auto p-4 button-primary rounded-lg shadow-lg"
      >
        <label className="font-bold mb-2 text-white">Name</label>
        <input
          type="text"
          name="from_name"
          className="border bg-opacity-80 border-gray-300/60 rounded-md px-3 py-2 mb-4 w-full bg-white/20"
        />

        <label className="font-bold mb-2 text-white ">Email</label>
        <input
          type="email"
          name="from_email"
          className="border bg-opacity-80 border-gray-300/60 rounded-md px-3 py-2 mb-4 w-full bg-white/20"
        />

        <label className="font-bold mb-2 text-white">Message</label>
        <textarea
          name="message"
          className="border bg-opacity-80 border-gray-300/60 rounded-md px-3 py-2 mb-4 w-full bg-white/20"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="button-primary cursor-pointer text-white p-2 rounded-md"
        />
      </form>
    </div>
  );
};
