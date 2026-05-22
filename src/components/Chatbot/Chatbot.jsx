import { useState, useRef, useEffect } from 'react';
import { AGRITRACK_SYSTEM_PROMPT } from '../../context/agritrack-context';
import './Chatbot.css';

const CHIPS = [
  { emoji: '🌾', label: 'Best crops for my soil', key: 'best crops for my soil' },
  { emoji: '📅', label: 'Planting schedule',       key: 'planting schedule'      },
  { emoji: '🌦️', label: 'Weather advisory',        key: 'weather advisory'       },
  { emoji: '📋', label: 'How to register',          key: 'how to register'        },
];

const OPENROUTER_API_KEY = import.meta.env.VITE_OPEN_ROUTER_API_KEY;
const OPENROUTER_MODEL   = 'google/gemini-2.0-flash-001'; // fast, cost-effective model

// ---------------------------------------------------------------------------
// Helper: call OpenRouter with full conversation history
// Returns the assistant reply as a plain string.
// ---------------------------------------------------------------------------
async function callOpenRouter(conversationHistory) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'HTTP-Referer': window.location.origin,   // required by OpenRouter
      'X-Title': 'AgriTrack Assistant',
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        { role: 'system', content: AGRITRACK_SYSTEM_PROMPT },
        ...conversationHistory,
      ],
      max_tokens: 600,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `OpenRouter error ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? 'Sorry, I could not generate a response.';
}

// ---------------------------------------------------------------------------
// Convert plain markdown-lite text → safe HTML for dangerouslySetInnerHTML
// (bold **text**, line breaks, bullet lists with -)
// ---------------------------------------------------------------------------
function markdownToHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\n/g, '<br/>');
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Chatbot() {
  const [open, setOpen]         = useState(false);
  const [minimized, setMin]     = useState(false);
  const [showNotif, setShowNotif] = useState(true);
  const [showChips, setShowChips] = useState(true);
  const [inputVal, setInputVal]   = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // messages shown in the UI: { from: 'bot'|'user', html?, text?, typing? }
  const [messages, setMessages] = useState([
    { from: 'bot', html: "Kumusta! I'm the <strong>AgriTrack Assistant</strong>. I can help you with crop recommendations, soil tips, farming schedules, and anything about your farm. 🌱" },
    { from: 'bot', html: 'What would you like to know today?' },
  ]);

  // conversation history sent to the API: { role: 'user'|'assistant', content: string }
  const historyRef = useRef([]);

  const messagesRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // ------------------------------------------------------------------
  // Message helpers
  // ------------------------------------------------------------------
  const appendMessage = (msg) => setMessages(prev => [...prev, msg]);

  const addTyping    = () => appendMessage({ from: 'bot', typing: true });
  const removeTyping = () => setMessages(prev => prev.filter(m => !m.typing));

  // ------------------------------------------------------------------
  // Core: send a user text, get AI reply
  // ------------------------------------------------------------------
  const sendMessage = async (userText) => {
    if (!userText.trim() || isLoading) return;

    // Show user bubble & hide chips
    appendMessage({ from: 'user', text: userText });
    setShowChips(false);
    setIsLoading(true);
    addTyping();

    // Add to history before the API call
    historyRef.current = [
      ...historyRef.current,
      { role: 'user', content: userText },
    ];

    try {
      const reply = await callOpenRouter(historyRef.current);

      // Store assistant turn in history
      historyRef.current = [
        ...historyRef.current,
        { role: 'assistant', content: reply },
      ];

      removeTyping();
      appendMessage({ from: 'bot', html: markdownToHtml(reply) });
    } catch (error) {
      console.error('OpenRouter error:', error);
      removeTyping();
      appendMessage({
        from: 'bot',
        html: "Sorry, I'm having trouble connecting right now. Please try again in a moment, or contact your <strong>DA Agricultural Technologist</strong> for immediate assistance. 🌱",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChip = (chip) => {
    sendMessage(`${chip.emoji} ${chip.label}`);
  };

  const handleSend = () => {
    const text = inputVal.trim();
    if (!text) return;
    setInputVal('');
    sendMessage(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggle = () => {
    setOpen(o => !o);
    setMin(false);
    setShowNotif(false);
  };

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
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
                <span className="chatbot-header__dot" />
                {isLoading ? 'Typing…' : 'Online · Powered by AI'}
              </div>
            </div>
          </div>
          <div className="chatbot-header__controls">
            <button className="chatbot-ctrl" onClick={() => setMin(true)} title="Minimize">
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
            <span style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <img src="./images/DA_image.png" alt="DA" style={{ width:'20px', height:'20px', borderRadius:'50%', objectFit:'cover' }} />
              AgriTrack Assistant
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M18 15l-6-6-6 6"/></svg>
          </div>
        )}

        {/* Messages + Input */}
        {!minimized && (
          <>
            <div className="chatbot-messages" ref={messagesRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chatbot-row chatbot-row--${m.from}`}>
                  {m.from === 'bot' && (
                    <img src="./images/DA_image.png" alt="DA" className="chatbot-bubble-avatar" />
                  )}
                  <div>
                    {m.typing
                      ? (
                        <div className="chatbot-bubble chatbot-bubble--bot chatbot-bubble--typing">
                          <span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/>
                        </div>
                      )
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
                    <button key={c.key} className="chatbot-chip" onClick={() => handleChip(c)} disabled={isLoading}>
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
                placeholder={isLoading ? 'Assistant is typing…' : 'Ask anything about your farm...'}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button
                className="chatbot-send"
                onClick={handleSend}
                aria-label="Send"
                disabled={isLoading || !inputVal.trim()}
              >
                {isLoading
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="18" height="18" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M12 2a10 10 0 0 1 10 10"/>
                    </svg>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" width="18" height="18">
                      <path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                }
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}