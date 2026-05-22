import { useReveal } from '../../hooks/useReveal';
import { HOW_STEPS } from '../../constants/data';
import './HowItWorks.css';

export default function HowItWorks() {
  const headRef  = useReveal();
  const stepsRef = useReveal();

  return (
    <section className="section-wrap" id="how">
      <div ref={headRef} className="reveal">
        <span className="section-tag">Simple process</span>
        <h2>Up and running<br /><em>in minutes.</em></h2>
      </div>

      <div ref={stepsRef} className="reveal delay-1 how__grid">
        {HOW_STEPS.map((step, i) => (
          <div key={i} className="how__step">
            <div className="how__step-num">{step.num}</div>
            <h4 className="how__step-title">{step.title}</h4>
            <p className="how__step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
