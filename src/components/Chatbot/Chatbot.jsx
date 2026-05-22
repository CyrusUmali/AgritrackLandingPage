import { useState, useRef, useEffect } from 'react';
import { CHAT_RESPONSES } from '../../constants/data';
import './Chatbot.css';

const CHIPS = [
  { emoji: '🌾', label: 'Best crops for my soil', key: 'best crops for my soil' },
  { emoji: '📅', label: 'Planting schedule',       key: 'planting schedule'      },
  { emoji: '🌦️', label: 'Weather advisory',        key: 'weather advisory'       },
  { emoji: '📋', label: 'How to register',          key: 'how to register'        },
];

export default function Chatbot() {
  const [open, setOpen]         = useState(false);
  const [minimized, setMin]     = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', html: "Kumusta! I'm the <strong>AgriTrack Assistant</strong>. I can help you with crop recommendations, soil tips, farming schedules, and anything about your farm. 🌱" },
    { from: 'bot', html: 'What would you like to know today?' },
  ]);
  const [showChips, setShowChips] = useState(true);
  const [inputVal, setInputVal]   = useState('');
  const [showNotif, setShowNotif] = useState(true);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const addUser = (text) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    setShowChips(false);
  };

  const addBot = (html) => {
    setMessages(prev => [...prev, { from: 'bot', html }]);
  };

  const addTyping = () => {
    setMessages(prev => [...prev, { from: 'bot', typing: true }]);
  };

  const removeTyping = () => {
    setMessages(prev => prev.filter(m => !m.typing));
  };

  const respond = (key) => {
    addTyping();
    const reply = CHAT_RESPONSES[key] ||
      "Thanks for your message! The full AI assistant is available when you're logged in to AgriTrack. Try the <strong>Crop Advisor</strong> or contact your DA technician. 🌱";
    setTimeout(() => { removeTyping(); addBot(reply); }, 1300);
  };

  const handleChip = (chip) => {
    addUser(`${chip.emoji} ${chip.label}`);
    respond(chip.key);
  };

  const handleSend = () => {
    const text = inputVal.trim();
    if (!text) return;
    setInputVal('');
    addUser(text);
    respond('');
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') handleSend(); };

  const toggle = () => {
    setOpen(o => !o);
    setMin(false);
    setShowNotif(false);
  };

  return (
    <>
      {/* FAB */}
      <button className="chatbot-fab" onClick={toggle} aria-label="Open AgriTrack Assistant">
        {open
          ? <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="22" height="22"><path d="M18 6L6 18M6 6l12 12"/></svg>
          : <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"   width="24" height="24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        }
        {showNotif && <span className="chatbot-fab__notif">1</span>}
      </button>

      {/* Window */}
      <div className={`chatbot-window ${open ? 'chatbot-window--open' : ''} ${minimized ? 'chatbot-window--min' : ''}`}>

        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <img src="./images/DA_image.png" alt="DA" className="chatbot-header__avatar" />
            <div>
              <div className="chatbot-header__title">AgriTrack Assistant</div>
              <div className="chatbot-header__status">
                <span className="chatbot-header__dot" /> Online · Powered by Gemini
              </div>
            </div>
          </div>
          <div className="chatbot-header__controls">
            <button className="chatbot-ctrl" onClick={() => setMin(true)}  title="Minimize">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M5 12h14"/></svg>
            </button>
            <button className="chatbot-ctrl" onClick={toggle} title="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Minimized bar */}
        {minimized && (
          <div className="chatbot-mini" onClick={() => setMin(false)}>
            <span style={{display:"flex",alignItems:"center",gap:"8px"}}><img src="./images/DA_image.png" alt="DA" style={{width:"20px",height:"20px",borderRadius:"50%",objectFit:"cover"}} /> AgriTrack Assistant</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M18 15l-6-6-6 6"/></svg>
          </div>
        )}

        {/* Messages */}
        {!minimized && (
          <>
            <div className="chatbot-messages" ref={messagesRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chatbot-row chatbot-row--${m.from}`}>
                  {m.from === 'bot' && <img src="./images/DA_image.png" alt="DA" className="chatbot-bubble-avatar" />}
                  <div>
                    {m.typing
                      ? <div className="chatbot-bubble chatbot-bubble--bot chatbot-bubble--typing">
                          <span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/>
                        </div>
                      : m.from === 'bot'
                        ? <div className="chatbot-bubble chatbot-bubble--bot" dangerouslySetInnerHTML={{ __html: m.html }} />
                        : <div className="chatbot-bubble chatbot-bubble--user">{m.text}</div>
                    }
                  </div>
                </div>
              ))}

              {showChips && (
                <div className="chatbot-chips" onMouseDown={e => e.stopPropagation()}>
                  {CHIPS.map(c => (
                    <button key={c.key} className="chatbot-chip" onClick={() => handleChip(c)}>
                      {c.emoji} {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="chatbot-input-area">
              <input
                className="chatbot-input"
                type="text"
                placeholder="Ask anything about your farm..."
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="chatbot-send" onClick={handleSend} aria-label="Send">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="18" height="18">
                  <path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}