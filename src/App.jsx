import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import {
  profile,
  about,
  projects,
  experience,
  contact,
} from "./data/content.js";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Hero profile={profile} />
      <main id="main">
        <About paragraphs={about} />
        <Projects projects={projects} />
        <Experience entries={experience} />
        <Contact contact={contact} />
      </main>
    </>
  );
}
