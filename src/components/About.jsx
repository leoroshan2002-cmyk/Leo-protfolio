import { useReveal } from '../hooks';

import img from '../assets/pic.jpeg';

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" ref={ref} className="about section-pad reveal" style={visible ? { opacity: 1, transform: 'none' } : {}}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader tag="01" title="About Me" subtitle="My Journey & Background" />

        <div className="about__grid">
          {/* Left — bio */}
          <div>
            <div className="about__avatar-card">
              <div className="about__avatar-inner">
                <div className="about__avatar-circle">
                  <img src={img} alt="Leo Prakash" />
                </div>
                <div>
                  <div className="about__avatar-name">Leo Prakash</div>
                  <div className="about__avatar-role">MERN STACK DEV</div>
                </div>
              </div>
            </div>

          <div className="about1">
            <h3 className="about__heading">
              A developer who builds{' '}
              <span>complete</span> products.
            </h3>
            <p className="about__body">
              I specialize in building full-stack applications using the MERN stack — from MongoDB schema design and Express REST APIs to React UIs and Node.js server architecture.
            </p>
            <p className="about__body">
              I care deeply about code quality, API design, and performance. Every project I ship is built to scale, documented well, and designed with real users in mind.
            </p>

            <div className="about__pills">
              <span className="about__info-pill" style={{ color: 'var(--cyan)' }}>Coimbatore, TN</span>
              <span className="about__info-pill" style={{ color: 'var(--cyan)' }}>🎓 MCA Graduate</span>
              <span className="about__info-pill" style={{ color: 'var(--mongo)' }}>💼 Open to Work</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: '.5rem' }}>
      <div className="section-header__row">
        <span className="section-header__tag">{tag}</span>
        <div className="section-header__line" />
        <span className="section-header__sub">{subtitle}</span>
      </div>
      <h2 className="section-header__title">{title}</h2>
    </div>
  );
}
