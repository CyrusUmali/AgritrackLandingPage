import { useReveal } from '../../hooks/useReveal';
import { STATS } from '../../constants/data';
import './StatsSection.css';

export default function StatsSection() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <div className="stats-bg">
      <div className="stats-inner">
        <div ref={headRef} className="reveal stats__header">
          <div>
            <span className="section-tag stats__tag">By the numbers</span>
            <div className="stats__headline">
              Agriculture,<br />
              <em className="stats__headline-em">quantified.</em>
            </div>
            <p className="stats__sub">
              Live data from farms across San Pablo City, updated in real time
              as DA officers and farmers use the system.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="reveal delay-1 stats__grid">
          {STATS.map((s, i) => (
            <div key={i} className="stats__cell">
              <div className="stats__num">{s.num}</div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
