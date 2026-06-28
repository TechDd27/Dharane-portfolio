import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Education } from "../components/sections/Education";
import { Contact } from "../components/sections/Contact";
import { CurrentlyLearning } from "../components/sections/CurrentlyLearning";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CurrentlyLearning />
      <Education />
      <Contact />
    </>
  );
}
