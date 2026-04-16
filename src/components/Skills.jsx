import { useReveal } from '../hooks';
import { SKILLS } from '../data';
import { SectionHeader } from './About';
import '../styles/skills.css';

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" ref={ref} className="skills section-pad reveal" style={visible ? { opacity: 1 } : {}}>
      <div className="skills__container">
        <SectionHeader tag="02" title="Technical Skills" subtitle="MERN & Beyond" />

        <div className="skills__grid">
          {SKILLS.map((cat) => (
            <div key={cat.category} className="skill-category">
              <div className="skill-category__header">
                <h3 className="skill-category__title" style={{ color: cat.color }}>
                  {cat.category}
                </h3>
                <div className="skill-category__dot" style={{ background: cat.color }} />
              </div>
              <div className="skill-category__tags">
                {cat.items.map(skill => (
                  <span key={skill.name} className="skill-tag" style={{
                    borderColor: cat.color,
                    color: cat.color,
                  }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
