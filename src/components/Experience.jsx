import Section from "./Section.jsx";

export default function Experience({ entries }) {
  return (
    <Section id="experience" title="سابقه">
      <ol className="timeline">
        {entries.map((entry) => (
          <li className="timeline__item" key={`${entry.company}-${entry.role}`}>
            <h3 className="timeline__role">
              {entry.role}, {entry.company}
            </h3>
            <p className="timeline__period">{entry.period}</p>
            <p className="timeline__description">{entry.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
