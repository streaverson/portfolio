import ExternalLink from "./ExternalLink.jsx";

export default function ProjectCard({ project }) {
  const {
    name,
    description,
    technologies,
    image,
    imageAlt,
    liveUrl,
    sourceUrl,
  } = project;

  return (
    <article className="card">
      <img
        className="card__image"
        src={image}
        alt={imageAlt || `Screenshot of ${name}`}
        width="1280"
        height="800"
        loading="lazy"
      />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__description">{description}</p>

        <ul className="tags" aria-label={`Technologies used in ${name}`}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="card__links">
          <ExternalLink
            className="link link--strong"
            href={liveUrl}
            label={`Live demo of ${name}`}
          >
            لایو دمو
          </ExternalLink>
          {sourceUrl && (
            <ExternalLink
              className="link"
              href={sourceUrl}
              label={`Source code of ${name}`}
            >
              سورس کد
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
