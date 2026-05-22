import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { CAROUSEL_SLIDES } from '../../constants/data';
import './Carousel.css';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading]   = useState(false);
  const timerRef = useRef(null);
  const headRef  = useReveal();
  const stageRef = useReveal();

  const goTo = (n) => {
    const next = (n + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    setFading(true);
    setTimeout(() => { setCurrent(next); setFading(false); }, 200);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(next + 1), 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % CAROUSEL_SLIDES.length), 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = CAROUSEL_SLIDES[current];

  return (
    <div className="carousel-section">
      <div className="section-wrap">
        <div ref={headRef} className="reveal carousel__head">
          <span className="section-tag">See it in action</span>
          <h2>The full picture,<br /><em>before you sign in.</em></h2>
          <p className="carousel__sub">Every screen built around real workflows — from municipal dashboards to individual farm profiles.</p>
        </div>

        <div
          ref={stageRef}
          className="reveal delay-1 carousel__stage"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={() => { timerRef.current = setInterval(() => setCurrent(c => (c + 1) % CAROUSEL_SLIDES.length), 4000); }}
        > 
          <div className="carousel__slide" style={{ '--ph-hue': slide.hue }}>
            <div className="carousel__chrome">
              <span className="carousel__dot" /><span className="carousel__dot" /><span className="carousel__dot" />
              <span className="carousel__chrome-label">{slide.screen}</span>
            </div>
            <div className={`carousel__screenshot ${fading ? 'carousel__screenshot--fade' : ''}`}>
              <img 
                src={slide.image}  
                alt={`${slide.label} screenshot`}
                className="carousel__image"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="carousel__controls">
          <button className="carousel__arrow" onClick={() => goTo(current - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="carousel__dots">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button key={i} className={`carousel__dot-btn ${i === current ? 'carousel__dot-btn--active' : ''}`} onClick={() => goTo(i)} />
            ))}
          </div>
          <button className="carousel__arrow" onClick={() => goTo(current + 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="carousel__info">
          <div className={`carousel__info-label ${fading ? 'carousel__info--fade' : ''}`}>{slide.label}</div>
          <div className={`carousel__info-desc  ${fading ? 'carousel__info--fade' : ''}`}>{slide.desc}</div>
        </div>
      </div>
    </div>
  );
}