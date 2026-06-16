import { useState } from "react";

function SectionContacts() {
  const [copied, setCopied] = useState(false);
  const email = "prod.vicalmeida@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="section-contacts">
      <div className="container-narrow">
        <h2 className="contacts-title">Contatos</h2>

        <div className="contacts-grid">
          <a
            href="https://www.instagram.com/vickkalmeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
          >
            <span className="contact-label">Instagram</span>
            <span className="contact-value">@vickkalmeida</span>
          </a>

          <div className="glass-card" id="email-box">
            <span className="contact-label">Email</span>
            <div className="email-click-wrapper">
              <span className="contact-value" id="email-text">
                {email}
              </span>
              <button
                type="button"
                className={`copy-email-btn${copied ? " copied" : ""}`}
                aria-label="Copiar E-mail"
                onClick={copyEmail}
              >
                <svg className="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                <span className="tooltip-text">{copied ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bio-footer">
          <img src="/img/globo_branco.png" alt="" className="footer-logo" />
        </div>
      </div>
    </section>
  );
}

export default SectionContacts;
