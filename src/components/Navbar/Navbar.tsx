import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../Infra/routes/path";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav ref={navRef} id="main-nav" className={`navbar-glass${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <Link to={Path.HOME} className="logo-link" onClick={closeMenu}>
          <img src="/img/vic_almeida_logo.png" alt="Vic Almeida" className="nav-logo" />
        </Link>

        <div className="nav-links-desktop">
          <Link to={Path.INFOS} className="nav-link-btn text-hover-glow">
            Sobre Mim
          </Link>
          <div className="social-links">
            <a href="https://www.instagram.com/vickkalmeida/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://br.linkedin.com/in/vict%C3%B3ria-almeida-a2b24a19b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <button
          type="button"
          id="mobile-menu-btn"
          className={`mobile-menu-toggle${menuOpen ? " active" : ""}`}
          aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="icon-toggle" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <line className="line-top" x1="4" y1="6" x2="20" y2="6" />
            <line className="line-mid" x1="4" y1="12" x2="20" y2="12" />
            <line className="line-bottom" x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      <div id="mobile-nav-dropdown" className={`mobile-nav-menu${menuOpen ? " active" : ""}`}>
        <Link to={Path.INFOS} className="mobile-nav-link text-hover-glow" onClick={closeMenu}>
          Sobre Mim
        </Link>
        <div className="mobile-socials">
          <a href="https://www.instagram.com/vickkalmeida/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
          <a
            href="https://br.linkedin.com/in/vict%C3%B3ria-almeida-a2b24a19b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
