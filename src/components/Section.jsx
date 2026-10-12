export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
