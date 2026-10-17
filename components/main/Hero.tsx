import {SITE} from "@/constants/site";

const Hero = () => {
  return (
    <section id="top" className="shell pt-14 sm:pt-20 lg:pt-28">
      <p
        className="rise text-sm text-muted"
        style={{"--d": "0ms"} as React.CSSProperties}
      >
        {SITE.jobTitle}
      </p>

      <h1
        className="rise mt-3 text-[clamp(3.1rem,10.5vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-ink"
        style={{"--d": "90ms"} as React.CSSProperties}
      >
        Adib Hoque
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:mt-14 lg:grid-cols-12 lg:gap-10">
        <p
          className="rise max-w-[58ch] text-[1.0625rem] leading-[1.65] text-ink lg:col-span-7 lg:text-lg"
          style={{"--d": "180ms"} as React.CSSProperties}
        >
          {SITE.intro}
        </p>

        <div
          className="rise flex flex-col gap-3 lg:col-span-4 lg:col-start-9"
          style={{"--d": "270ms"} as React.CSSProperties}
        >
          <a
            href="#work"
            className="text-[1.0625rem] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink"
          >
            See the work
          </a>
          <a href={`mailto:${SITE.email}`} className="masthead-link text-[1.0625rem]">
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
