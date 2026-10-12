export default function Hero({ profile }) {
  return (
    <header className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              پروژه ها
            </a>
            <a className="button button--secondary" href="#contact">
              تماس با من
            </a>
          </div>
        </div>

        {profile.photo && (
          <img
            className="hero__photo"
            src={profile.photo}
            alt={profile.photoAlt}
            width="480"
            height="480"
          />
        )}
      </div>
    </header>
  );
}
