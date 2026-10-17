"use client";

import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {SITE} from "@/constants/site";

type State = "idle" | "sending" | "sent" | "error";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<State>("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || state === "sending") return;

    setState("sending");
    emailjs
      .sendForm(
        "Adib-Portfolio",
        "template_fke9x0s",
        form.current,
        "9MKherpptDhGZ-j_6"
      )
      .then(
        () => {
          setState("sent");
          form.current?.reset();
        },
        () => {
          // The visitor needs to know it failed and what to do instead.
          setState("error");
        }
      );
  };

  return (
    <section id="contact" className="shell mt-24 sm:mt-32">
      <h2 className="border-b border-line pb-4 text-sm font-medium text-muted">
        Contact
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="max-w-[34ch] text-2xl leading-[1.35] tracking-[-0.015em] text-ink sm:text-[1.75rem]">
            Have something you want built? Send a note and I&apos;ll reply
            within a day.
          </p>
          <p className="mt-6 text-sm text-muted">
            Or email me directly:{" "}
            <a href={`mailto:${SITE.email}`} className="link text-ink">
              {SITE.email}
            </a>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm text-muted">
                Your name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                autoComplete="name"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm text-muted">
                Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                required
                autoComplete="email"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="field resize-y"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={state === "sending"}
                className="btn-ink"
              >
                {state === "sending" ? "Sending…" : "Send message"}
              </button>

              <p
                role="status"
                aria-live="polite"
                className="text-sm text-muted"
              >
                {state === "sent" &&
                  "Sent. I'll get back to you within a day."}
                {state === "error" && (
                  <>
                    That didn&apos;t send. Email me instead:{" "}
                    <a href={`mailto:${SITE.email}`} className="link text-ink">
                      {SITE.email}
                    </a>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
