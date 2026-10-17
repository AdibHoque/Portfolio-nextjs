import {Contact} from "@/components/main/ContactUs";
import Hero from "@/components/main/Hero";
import Note from "@/components/main/Note";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <main className="pb-8">
      <Hero />
      <Work />
      <Note />
      <Contact />
    </main>
  );
}
