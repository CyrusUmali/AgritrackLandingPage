import { useReveal } from '../../hooks/useReveal';
import { AUDIENCE } from '../../constants/data';
import './AudienceSection.css';

export default function AudienceSection() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <div className="audience-bg" id="who">
      <div className="section-wrap">
        <div ref={headRef} className="reveal">
          <span className="section-tag">Built for</span>
          <h2>Two users.<br /><em>One platform.</em></h2>
        </div>

        <div ref={gridRef} className="reveal delay-1 audience__grid">
          {AUDIENCE.map((card, i) => (
            <div key={i} className={`audience-card audience-card--${card.type}`}>
              <div className="audience-card__tag">{card.tag}</div>
              <h3 className="audience-card__title">{card.title}</h3>
              <p className="audience-card__desc">{card.desc}</p>
              <ul className="audience-card__perks">
                {card.perks.map((perk, j) => (
                  <li key={j}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
