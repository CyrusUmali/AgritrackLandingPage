import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { FAQ_ITEMS } from '../../constants/data';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const leftRef = useReveal();
  const rightRef = useReveal();

  const toggle = (i) => setOpenIndex(prev => (prev === i ? -1 : i));

  return (
    <div className="faq-bg" id="faq">
      <div className="section-wrap">
        <div className="faq__layout">
          <div ref={leftRef} className="reveal faq__left">
            <span className="section-tag">FAQ</span>
            <h2 className="faq__title">Common<br /><em>questions.</em></h2>
            <p className="faq__sub">Can't find what you're looking for? Reach out to the DA office in San Pablo City.</p>
            <a href="#contact" className="btn btn-dark faq__cta">Contact us →</a>
          </div>

          <div ref={rightRef} className="reveal delay-1 faq__list">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}>
                <button className="faq__question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="faq__chevron">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </button>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
