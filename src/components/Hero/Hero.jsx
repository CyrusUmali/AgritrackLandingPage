import { useReveal } from '../../hooks/useReveal';
import { HERO_STATS } from '../../constants/data';
import './Hero.css';

export default function Hero() {
  const pillRef   = useReveal();
  const titleRef  = useReveal();
  const descRef   = useReveal();
  const actionsRef = useReveal();
  const statsRef  = useReveal();
  const imgRef    = useReveal();

  return (
    <section className="hero">
      {/* Decorative background SVG */}
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 700 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g stroke="#1c3d2c" strokeWidth="1" fill="none">
            {[60,110,165,222,282,344,410,480,554,632].map((rx, i) => (
              <ellipse key={i} cx="350" cy="460" rx={rx} ry={Math.round(rx * 0.6)} />
            ))}
            <line x1="0" y1="150" x2="700" y2="150"/><line x1="0" y1="220" x2="700" y2="220"/>
            <line x1="0" y1="290" x2="700" y2="290"/><line x1="0" y1="360" x2="700" y2="360"/>
            <line x1="0" y1="580" x2="700" y2="580"/><line x1="0" y1="650" x2="700" y2="650"/>
            <line x1="120" y1="0" x2="120" y2="900"/><line x1="260" y1="0" x2="260" y2="900"/>
            <line x1="440" y1="0" x2="440" y2="900"/><line x1="580" y1="0" x2="580" y2="900"/>
            <line x1="0" y1="0" x2="700" y2="900"/><line x1="100" y1="0" x2="700" y2="800"/>
            <circle cx="260" cy="360" r="4" fill="#1c3d2c"/>
            <circle cx="440" cy="290" r="3" fill="#1c3d2c"/>
            <circle cx="120" cy="580" r="3" fill="#1c3d2c"/>
            <circle cx="580" cy="650" r="4" fill="#1c3d2c"/>
          </g>
        </svg>
      </div>

      {/* Left: Text */}
      <div className="hero__left">
        <div ref={pillRef} className="reveal hero__pill">
          <span className="hero__pill-dot" />
          Department of Agriculture · San Pablo City
        </div>

        <h1 ref={titleRef} className="reveal delay-1 hero__title">
          Data that<br />moves <em>the</em><br />farm forward.
        </h1>

        <p ref={descRef} className="reveal delay-2 hero__desc">
          AgriTrack maps every farm, tracks every harvest, and puts agricultural intelligence
          in the hands of DA officers and farmers — in one unified system.
        </p>

        <div ref={actionsRef} className="reveal delay-3 hero__actions">
          <a href="https://agritrack-theta.vercel.app/" className="btn btn-dark">Access the system →</a>
          <a href="#features" className="btn btn-outline">See features</a>
        </div>

        <div ref={statsRef} className="reveal delay-3 hero__stats">
          {HERO_STATS.map(s => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
 
      <div className="hero__right">
        <div className="hero__badge hero__badge--top reveal">
          <div className="hero__badge-icon hero__badge-icon--green">🌾</div>
          <div>
            <div className="hero__badge-label">Annual yield</div>
            <div className="hero__badge-val">502 kg tracked</div>
          </div>
        </div>

        <div className="hero__badge hero__badge--bot reveal">
          <div className="hero__badge-icon hero__badge-icon--amber">🌡️</div>
          <div>
            <div className="hero__badge-label">Live weather</div>
            <div className="hero__badge-val">35°C · San Pablo</div>
          </div>
        </div>

        <img
          ref={imgRef}
          src="./images/hero.png"
          alt="AgriTrack Dashboard"
          className="reveal delay-1 hero__img"
        />
      </div>
    </section>
  );
}
