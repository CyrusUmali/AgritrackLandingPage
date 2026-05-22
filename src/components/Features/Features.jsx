import {
  MapPin,
  BarChart3,
  Cloud,
  Map,
  Users,
  FileText,
} from 'lucide-react';

import { useReveal } from '../../hooks/useReveal';
import { FEATURES } from '../../constants/data';
import './Features.css';

export default function Features() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <div className="features-bg" id="features">
      <div className="section-wrap">
        <div ref={headRef} className="reveal">
          <span className="section-tag">Core capabilities</span>

          <h2 className="features__title">
            Built for the <em>full</em>
            <br />
            agricultural workflow.
          </h2>

          <p className="features__sub">
            From satellite farm polygons to per-crop yield charts —
            every tool a DA officer or farmer needs, in one place.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal delay-2 features__grid"
        >
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-card__icon">
                <FeatureIcon name={f.icon} />
              </div>

              <h3 className="feature-card__title">
                {f.title}
              </h3>

              <p className="feature-card__desc">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ name }) {
  const icons = {
    'map-pin': MapPin,
    'bar-chart': BarChart3,
    cloud: Cloud,
    map: Map,
    users: Users,
    file: FileText,
  };

  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      size={20}
      strokeWidth={1.8}
      color="var(--green)"
    />
  );
}