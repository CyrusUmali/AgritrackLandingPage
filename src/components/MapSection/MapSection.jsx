import { useReveal } from '../../hooks/useReveal';
import './MapSection.css';

const CHECK_ITEMS = [
  'Draw and edit farm boundaries directly on the satellite map',
  'Search and filter across 68+ farms by barangay or crop',
  'Temperature and humidity overlays per farm location',
  'Tap any polygon for full farm details and production history',
];

export default function MapSection() {
  const mapRef  = useReveal();
  const textRef = useReveal();

  return ( 
    <section className="section-wrap map-section">
      <div ref={mapRef} className="reveal map-section__visual">
        <img 
          src="/images/hero.png" 
          alt="Satellite farm map interface showing farm boundaries and weather overlays"
          className="map-section__screenshot"
        />
      </div>

      <div ref={textRef} className="reveal delay-1 map-section__text">
        <span className="section-tag">Live mapping</span>
        <h2>Every farm,<br /><em>precisely placed.</em></h2>
        <p className="map-section__desc">
          Satellite-mapped farm polygons let DA officers and farmers see exactly
          where each plot sits — with crop type, area, ownership, and weather,
          all in one tap.
        </p>
        <ul className="map-section__list">
          {CHECK_ITEMS.map((item, i) => (
            <li key={i} className="map-section__list-item">
              <div className="map-section__check">
                <svg viewBox="0 0 12 12" fill="none" stroke="var(--green)" strokeWidth="2.5" width="11" height="11">
                  <path d="M2 6l3 3 5-5"/>
                </svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}