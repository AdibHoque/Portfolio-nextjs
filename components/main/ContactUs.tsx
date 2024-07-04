"use client";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import MySwal from "sweetalert2";

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
    <div className="z-20 flex flex-col justify-center items-center ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mb-12 max-w-md mx-auto p-4 button-primary border border-gray-300 rounded-lg shadow-lg"
      >
        <label className="font-bold mb-2 text-white">Name</label>
        <input
          type="text"
          name="from_name"
          className="border bg-opacity-80 border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />

        <label className="font-bold mb-2 text-white">Email</label>
        <input
          type="email"
          name="from_email"
          className="border bg-opacity-80 border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />

        <label className="font-bold mb-2 text-white">Message</label>
        <textarea
          name="message"
          className="border bg-opacity-80 border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="button-primary cursor-pointer text-white p-2 rounded-md"
        />
      </form>
    </div>
  );
};
