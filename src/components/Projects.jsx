import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ projects }) {
  return (
    <Section id="projects" title="پروژه ها">
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
