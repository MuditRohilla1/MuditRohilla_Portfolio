import Contacts from "@/components/Contacts";
import { Education } from "@/components/Education";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Gallery />
        <Education />
        <Skills />
        <Scroll />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
