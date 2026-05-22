import { LOGO_BAR_ITEMS } from '../../constants/data';
import './LogoBar.css';

const ICONS = {
  'Live Dashboard':      <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
  'Satellite Mapping':   <><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></>,
  'Yield Analytics':     <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  'Role-based Access':   <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
  'PDF & Excel Reports': <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></>,
};

export default function LogoBar() {
  return (
    <div className="logobar">
      {LOGO_BAR_ITEMS.map(item => (
        <div key={item} className="logobar__item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
            {ICONS[item]}
          </svg>
          {item}
        </div>
      ))}
    </div>
  );
}
