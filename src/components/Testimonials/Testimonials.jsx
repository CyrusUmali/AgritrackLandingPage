import { useReveal } from '../../hooks/useReveal';
import { TESTIMONIALS } from '../../constants/data';
import './Testimonials.css';

export default function Testimonials() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section-wrap" id="testimonials">
      <div ref={headRef} className="reveal testi__head">
        <span className="section-tag">From the field</span>
        <h2>Trusted by farmers<br /><em>and DA officers alike.</em></h2>
      </div>

      <div ref={gridRef} className="reveal delay-1 testi__grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`testi-card ${t.featured ? 'testi-card--featured' : ''}`}>
            <span className="testi-card__quote">"</span>
            <p className="testi-card__text">{t.text}</p>
            <div className="testi-card__author">
              <div className={`testi-card__avatar ${t.tag === 'Farmer' ? 'testi-card__avatar--amber' : ''}`}>
                {t.initials}
              </div>
              <div>
                <div className="testi-card__name">{t.name}</div>
                <div className="testi-card__role">{t.role}</div>
              </div>
              <div className={`testi-card__tag ${t.tag === 'Farmer' ? 'testi-card__tag--amber' : ''}`}>
                {t.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
