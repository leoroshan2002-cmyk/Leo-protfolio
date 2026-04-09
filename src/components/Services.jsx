import { useReveal } from '../hooks';
import { SERVICES } from '../data';
import { SectionHeader } from './About';
import '../styles/services.css';

export default function Services() {
  const [ref, visible] = useReveal();
  return (
    <section id="services" ref={ref} className="services section-pad reveal" style={visible ? { opacity: 1 } : {}}>
      <div className="services__container">
        <SectionHeader tag="04" title="Services" subtitle="What I Offer" />

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * .07} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, delay, visible }) {
  return (
    <div className="service-card" style={{
      opacity: visible ? 1 : 0,
      animation: visible ? `fadeUp .6s ease ${delay}s both` : 'none',
    }}>
      <div className="service-card__icon" style={{ borderColor: s.color, background: `${s.color}12` }}>
        {s.icon}
      </div>
      <h3 className="service-card__title" style={{ color: s.color }}>
        {s.title}
      </h3>
      <p className="service-card__desc">{s.desc}</p>
    </div>
  );
}
