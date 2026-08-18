"use client";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import MySwal from "sweetalert2";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "@/utils/motion";
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
    <section
      id="contact"
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
          Contact Me
        </motion.span>
        <motion.h2
          variants={fadeUp(0.1)}
          className="mt-6 max-w-[600px] text-3xl font-bold tracking-tight text-text md:text-4xl"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          variants={fadeUp(0.2)}
          className="mt-4 max-w-[520px] text-lg text-muted"
        >
          Have a project in mind or just want to say hello? Drop me a message and
          I&apos;ll get back to you as soon as possible.
        </motion.p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        className="glass-panel flex w-full max-w-lg flex-col gap-5 p-6 md:p-8"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="from_name"
            className="text-sm font-medium text-muted"
          >
            Name
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-glass bg-white/[0.03] px-4 py-3 text-sm text-text placeholder:text-subtle transition-colors focus:border-accent/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="from_email"
            className="text-sm font-medium text-muted"
          >
            Email
          </label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-glass bg-white/[0.03] px-4 py-3 text-sm text-text placeholder:text-subtle transition-colors focus:border-accent/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-y rounded-xl border border-glass bg-white/[0.03] px-4 py-3 text-sm text-text placeholder:text-subtle transition-colors focus:border-accent/50 focus:outline-none"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </motion.form>
    </section>
  );
};
