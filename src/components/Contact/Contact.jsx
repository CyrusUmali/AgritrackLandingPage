import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './Contact.css';

const INFO_ITEMS = [
  { icon: 'pin',   label: 'Office address', value: 'City Agriculture Office, San Pablo City, Laguna 4000' },
  { icon: 'phone', label: 'Phone',           value: '(049) 562-0000' },
  { icon: 'mail',  label: 'Email',           value: 'agritrack@sanpablocity.gov.ph' },
  { icon: 'clock', label: 'Office hours',    value: 'Monday – Friday, 8:00 AM – 5:00 PM' },
];

const ROLE_OPTIONS = ['Farmer','DA Officer / Technician','Municipal Agriculturist','Developer / Technical','Other'];

export default function Contact() {
  const [form, setForm]       = useState({ name:'', role:'', email:'', phone:'', subject:'', message:'' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const leftRef  = useReveal();
  const rightRef = useReveal();
  const mapRef   = useReveal();

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name:'', role:'', email:'', phone:'', subject:'', message:'' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div id="contact">
      {/* Form section */}
      <div className="contact-wrap">
        <div className="section-wrap contact-grid">

          {/* Left info */}
          <div ref={leftRef} className="reveal">
            <span className="section-tag">Get in touch</span>
            <h2>We're here<br /><em>to help.</em></h2>
            <p className="contact-desc">
              Whether you're a farmer wanting to register, a DA officer needing support,
              or a developer with a technical question — reach out and we'll get back to you.
            </p>

            <div className="contact-info">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="contact-info__item">
                  <div className="contact-info__icon">
                    <InfoIcon name={item.icon} />
                  </div>
                  <div>
                    <div className="contact-info__label">{item.label}</div>
                    <div className="contact-info__val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div ref={rightRef} className="reveal delay-1 contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Full name</label>
                  <input className="cf-input" name="name" type="text" placeholder="Juan dela Cruz" value={form.name} onChange={handleChange} required />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Role</label>
                  <select className="cf-input cf-select" name="role" value={form.role} onChange={handleChange} required>
                    <option value="" disabled>Select your role</option>
                    {ROLE_OPTIONS.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <div className="cf-row">
                <div className="cf-field">
                  <label className="cf-label">Email address</label>
                  <input className="cf-input" name="email" type="email" placeholder="juan@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="cf-field">
                  <label className="cf-label">Phone <span className="cf-optional">(optional)</span></label>
                  <input className="cf-input" name="phone" type="tel" placeholder="+63 9XX XXX XXXX" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="cf-field">
                <label className="cf-label">Subject</label>
                <input className="cf-input" name="subject" type="text" placeholder="e.g. Farm registration, login issue..." value={form.subject} onChange={handleChange} required />
              </div>
              <div className="cf-field">
                <label className="cf-label">Message</label>
                <textarea className="cf-input cf-textarea" name="message" placeholder="Tell us how we can help..." rows={5} value={form.message} onChange={handleChange} required />
              </div>

              <div className="cf-footer">
                <p className="cf-note">We typically respond within 1–2 business days.</p>
                <button type="submit" className="btn btn-dark cf-submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send message →'}
                </button>
              </div>

              {success && (
                <div className="cf-success">
                  <div className="cf-success__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <div className="cf-success__title">Message sent!</div>
                    <div className="cf-success__sub">We'll get back to you within 1–2 business days.</div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="map-embed-section">
        <div className="section-wrap map-embed-header">
          <div ref={mapRef} className="reveal map-embed-header__text">
            <span className="section-tag">Find us</span>
            <h2>Visit the <em>DA office.</em></h2>
            <p>The City Agriculture Office of San Pablo City is open Monday to Friday.</p>
          </div>
          <a
            href="https://maps.google.com/?q=City+Agriculture+Office+San+Pablo+City+Laguna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="map-embed-wrap">
          <div className="map-embed-card">
            <span className="map-embed-card__icon">🏛️</span>
            <div>
              <div className="map-embed-card__name">City Agriculture Office</div>
              <div className="map-embed-card__addr">San Pablo City, Laguna 4000</div>
              <div className="map-embed-card__hours"><span className="map-embed-card__open">● Open today</span> · Mon–Fri 8AM–5PM</div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62905.59!2d121.3008!3d14.0692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd62455d56a1c1%3A0x19d4e0e0e0e0e0e!2sSan%20Pablo%20City%2C%20Laguna!5e0!3m2!1sen!2sph!4v1"
            width="100%"
            height="440"
            style={{ border: 0, display: 'block', filter: 'grayscale(15%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DA Office — San Pablo City"
          />
        </div>
      </div>
    </div>
  );
}

function InfoIcon({ name }) {
  const icons = {
    pin:   <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
    mail:  <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" width="18" height="18">
      {icons[name]}
    </svg>
  );
}
