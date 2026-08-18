import {ContactUs} from "@/components/main/ContactUs";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <Skills />
      <Projects />
      <ContactUs />
    </main>
  );
}
