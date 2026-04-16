import { useReveal } from '../hooks';
import { PROJECTS } from '../data';
import { SectionHeader } from './About';
import '../styles/projects.css';

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" ref={ref} className="projects section-pad reveal" style={visible ? { opacity: 1 } : {}}>
      <div className="projects__container">
        <SectionHeader tag="03" title="Projects" subtitle="What I've Built" />

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * .08} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay, visible }) {
  return (
    <div className="project-card" style={{
      opacity: visible ? 1 : 0,
      animation: visible ? `fadeUp .7s ease ${delay}s both` : 'none',
    }}>
      <div className="project-card__header" style={{ borderTopColor: p.color }}>
        <h3 className="project-card__title">{p.title}</h3>
        <div className="project-card__subtitle">{p.subtitle}</div>
      </div>

      <p className="project-card__desc">{p.desc}</p>

      <div className="project-card__tags">
        {p.tags.map(t => (
          <span key={t} className="project-card__tag" style={{ borderColor: p.color, color: p.color }}>
            {t}
          </span>
        ))}
      </div>

  
    </div>
  );
}
