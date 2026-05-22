import { useReveal } from '../../hooks/useReveal';
import './DownloadSection.css';
 

export default function DownloadSection() {
  const textRef   = useReveal();
  const deviceRef = useReveal();

  return (
    <div className="dl-bg" id="download">
      <div className="dl-inner">
        <div className="dl-grid">

          {/* Left text */}
          <div ref={textRef} className="reveal">
            <span className="section-tag dl-tag">Available on</span>
            <h2 className="dl-title">Take AgriTrack<br /><em className='em-sub' >everywhere you go.</em></h2>
            <p className="dl-desc">
              Whether you're in the field with your phone or reviewing reports at the office —
              AgriTrack works wherever you need it.
            </p>

            <div className="dl-btns">
              <a href="https://agritrack-server.onrender.com/download/apk/agritrack.apk" className="dl-btn dl-btn--android">
                <div className="dl-btn__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M17.523 15.341a.5.5 0 01-.69-.155l-1.203-1.88a5.978 5.978 0 01-3.26.969 5.978 5.978 0 01-3.26-.969l-1.203 1.88a.5.5 0 01-.845-.535l1.21-1.892A5.964 5.964 0 016 9.37h12a5.964 5.964 0 01-2.272 3.389l1.21 1.892a.5.5 0 01-.155.69zM8.5 11a.75.75 0 100-1.5.75.75 0 000 1.5zm7 0a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="dl-btn__label">Download for</div>
                  <div className="dl-btn__name">Android</div>
                </div>
                <svg className="dl-btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>

              <a href="https://agritrack-server.onrender.com/download/windows/AgritrackSetup.exe" className="dl-btn dl-btn--windows">
                <div className="dl-btn__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M3 5.557L10.333 4.5v7.056H3V5.557zm0 12.886L10.333 19.5V12.5H3v5.943zm8.333 1.224L21 21v-8.5h-9.667v7.167zm0-14.334V12.5H21V3L11.333 5.333z"/>
                  </svg>
                </div>
                <div>
                  <div className="dl-btn__label">Download for</div>
                  <div className="dl-btn__name">Windows</div>
                </div>
                <svg className="dl-btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>

            <p className="dl-note">Android 8.0+ · Windows 10/11 · Free · Requires DA registration</p>
          </div>

          {/* Right devices */}
          <div ref={deviceRef} className="reveal delay-1 dl-devices">
            {/* Phone */}
            <div className="dl-phone">
              <div className="dl-phone__shell">
                <div className="dl-phone__notch" />
                <div className="dl-phone__screen">
                  <img src='./images/mobile.png' alt="AgriTrack Mobile App" className="dl-phone__image" />
                </div>
              </div>
            </div>

            {/* Laptop */}
            <div className="dl-laptop">
              <div className="dl-laptop__screen">
                <div className="dl-laptop__bar">
                  <div className="dl-laptop__dots">
                    <span style={{background:'#ff5f57'}}/>
                    <span style={{background:'#febc2e'}}/>
                    <span style={{background:'#28c840'}}/>
                  </div>
                  <span className="dl-laptop__title">AgriTrack Desktop</span>
                </div>
                <div className="dl-laptop__content">
                  <img src='./images/desktop.png' alt="AgriTrack Desktop App" className="dl-laptop__image" />
                </div>
              </div>
              <div className="dl-laptop__base" />
              <div className="dl-laptop__foot" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}