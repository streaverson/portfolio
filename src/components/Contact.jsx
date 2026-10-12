import Section from "./Section.jsx";
import ExternalLink from "./ExternalLink.jsx";

const stripProtocol = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact({ contact }) {
  return (
    <Section id="contact" title="تماس با من">
      <ul className="contact-list">
        <li>
          <span className="contact-list__label">Email</span>
          <a className="link link--strong" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>
        <li>
          <span className="contact-list__label">GitHub</span>
          <ExternalLink className="link link--strong" href={contact.github}>
            {stripProtocol(contact.github)}
          </ExternalLink>
        </li>
        <li>
          <span className="contact-list__label">LinkedIn</span>
          <ExternalLink className="link link--strong" href={contact.linkedin}>
            {stripProtocol(contact.linkedin)}
          </ExternalLink>
        </li>
      </ul>
    </Section>
  );
}
