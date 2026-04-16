import { useReveal } from '../hooks';
import { SectionHeader } from './About';
import '../styles/contact.css';

const CONTACT_INFO = [
  { icon: '', label: 'Email',    value: 'leoroshan2002@gmail.com',        href: 'mailto:leoroshan2002@gmail.com' },
  { icon: '', label: 'LinkedIn', value: 'linkedin.com/in/leoroshan', href: 'https://linkedin.com/in/leoroshan' },
  { icon: '', label: 'GitHub',   value: 'github.com/leoroshan',      href: 'https://github.com/leoroshan2002-cmyk' },
  { icon: '', label: 'Twitter',  value: '@leoroshan',            href: 'https://twitter.com/leoroshan ' },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" ref={ref} className="contact section-pad reveal" style={visible ? { opacity: 1 } : {}}>
      <div className="contact__inner">
        <SectionHeader tag="05" title="Get In Touch" subtitle="Let's Work Together" />

        <div className="contact__grid">
          <div>
            <h3 className="contact__heading">
              Looking for a{' '}
              <span className="contact__heading-gradient">MERN expert</span>?
            </h3>
            <p className="contact__body">
              Whether you need a full-stack app built from scratch, an existing codebase improved, or technical consultation — I'd love to hear about your project.
            </p>

            <div className="contact__info-list">
              {CONTACT_INFO.map(c => (
                <a key={c.label} href={c.href} className="contact__info-row">
                  <span className="contact__info-icon">{c.icon}</span>
                  <div className="contact__info-details">
                    <div className="contact__info-label">{c.label}</div>
                    <div className="contact__info-value">{c.value}</div>
                  </div>
                  <span className="contact__info-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <div className="contact__availability-header">
                <div className="contact__availability-dot" />
                <span className="contact__availability-label">Currently Available</span>
              </div>
              <p className="contact__availability-text">
                Open to full-time senior roles, founding engineer positions, and select MERN contract work. Typical response within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
