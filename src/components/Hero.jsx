import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const fade = (d = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .9s ease ${d}s, transform .9s ease ${d}s`,
  });

  return (
    <section id="home" className="hero grid-bg">
      <div className="hero__glow-top" />
      <div className="hero__glow-bottom" />

      <div className="hero__inner">
        <div className="hero__grid">
          <div>
            <div className="hero__badge" style={fade(0)}>
              <div className="hero__badge-dot" />
              <span className="hero__badge-text">Available for MERN Projects</span>
            </div>

            <h1 className="hero__heading" style={fade(.1)}>
              Hi, I'm{' '}
              <span className="hero__heading--gradient-cyan">Leo Prakash</span>
              <br />
              MERN Stack Developer
            </h1>

            <p className="hero__description" style={fade(.3)}>
              I build end-to-end web applications using{' '}
              <b className="mongo">MongoDB</b>,{' '}
              <b className="express">Express</b>,{' '}
              <b className="react">React</b>, and{' '}
              <b className="node">Node.js</b>.
              From clean APIs to polished UIs — I own the full stack.
            </p>

            <div className="hero__buttons" style={fade(.4)}>
              <a href="#projects" className="hero__btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects →
              </a>
              <a href="#contact" className="hero__btn-ghost"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
