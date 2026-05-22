import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './AISection.css';

const SCREENS = [
  { id: 'rec',   label: 'Crop AI'    },
  { id: 'guide', label: 'Soil Guide' },
  { id: 'chat',  label: 'Chatbot'    },
];

const LEFT_CARDS = [
  {
    title: 'Instant crop recommendations',
    desc: 'Input nitrogen, phosphorus, potassium, pH, temperature, humidity, and rainfall — get a ranked list of the best crops for your exact conditions.',
    iconBg: 'var(--green-6)', iconColor: 'var(--green)',
  },
  {
    title: 'ML model trained on crop data',
    desc: 'Recommendations come from a machine learning model trained on thousands of soil-crop data points — actual agronomic science, not guesswork.',
    iconBg: '#f0f4ff', iconColor: '#4f6ef7',
  },
];

const RIGHT_CARDS = [
  {
    title: 'Gemini-powered soil guidance',
    desc: 'Want to grow a specific crop despite borderline conditions? Gemini AI identifies gaps and gives you a step-by-step soil improvement plan.',
    iconBg: 'linear-gradient(135deg,#f0f0ff,#e8e8ff)', iconColor: '#7c3aed',
  },
  {
    title: 'AI farming chatbot',
    desc: 'Ask anything — planting schedules, pest management, fertilizer amounts. The assistant answers grounded in your actual farm data.',
    iconBg: '#fff0f6', iconColor: '#db2777',
  },
];

export default function AISection() {
  const [screen, setScreen] = useState('rec');
  const headRef  = useReveal();
  const layoutRef = useReveal();

  return (
    <>
      <section className="section-wrap ai-head-wrap" id="ai">
        <div ref={headRef} className="reveal ai__head">
          <span className="section-tag">Powered by AI</span>
          <h2>From soil data to harvest plan,<br /><em>in seconds.</em></h2>
          <p className="ai__sub">
            Input your environmental parameters and let AgriTrack's AI engine — powered by Gemini —
            recommend the best crops, guide soil preparation, and answer any farming question.
          </p>
        </div>
      </section>

      <div className="ai-bg">
        <div className="ai-layout-wrap">
          <div ref={layoutRef} className="reveal ai__layout">

            {/* Left cards */}
            <div className="ai__cards-col">
              {LEFT_CARDS.map((c, i) => (
                <div key={i} className="ai-card">
                  <div className="ai-card__icon" style={{ background: c.iconBg }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={c.iconColor} strokeWidth="1.6" width="22" height="22">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <h4 className="ai-card__title">{c.title}</h4>
                  <p className="ai-card__desc">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Center phone */}
            <div className="ai__center">
              <div className="ai-phone">
                <div className="ai-phone__notch" />
                <div className="ai-phone__screen">
                  <img 
                    src={`./images/${screen}.png`} 
                    alt={SCREENS.find(s => s.id === screen)?.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="ai-tabs">
                {SCREENS.map(s => (
                  <button
                    key={s.id}
                    className={`ai-tab ${screen === s.id ? 'ai-tab--active' : ''}`}
                    onClick={() => setScreen(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right cards */}
            <div className="ai__cards-col">
              {RIGHT_CARDS.map((c, i) => (
                <div key={i} className="ai-card">
                  <div className="ai-card__icon" style={{ background: c.iconBg }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={c.iconColor} strokeWidth="1.6" width="22" height="22">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  </div>
                  <h4 className="ai-card__title">{c.title}</h4>
                  <p className="ai-card__desc">{c.desc}</p>
                </div>
              ))}
            </div> 

          </div>
        </div>
      </div>
    </>
  );
}