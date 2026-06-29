import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PixelSprite } from './PixelSprite';

const playBtnStyle = {
  background: '#ff2d95',
  color: '#fff',
  border: '3px solid #2c1250',
  boxShadow: '3px 3px 0 #12b5d4',
  padding: '11px 14px',
} as const;

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,245,255,.92)',
        backdropFilter: 'blur(6px)',
        borderBottom: '3px solid #2c1250',
      }}
    >
      <div className="nav-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }} onClick={closeMenu}>
          <div style={{ display: 'flex', gap: 5 }}>
            <PixelSprite variant="founderAHat" scale={4} />
            <PixelSprite variant="founderBHat" scale={4} />
          </div>
          <span className="font-press nav-logo-text">NO STUDS</span>
        </Link>

        <div className="nav-links">
          <Link to="/games" className="hover-pink">
            GAMES
          </Link>
          <Link to="/about" className="hover-pink">
            ABOUT
          </Link>
          <Link to="/contact" className="hover-pink">
            CONTACT
          </Link>
          <Link to="/games" className="btn-play" style={playBtnStyle}>
            ▶ PLAY
          </Link>
        </div>

        <button
          type="button"
          className="nav-menu-btn"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`nav-mobile-panel${menuOpen ? ' is-open' : ''}`}>
        <Link to="/games" className="hover-pink" onClick={closeMenu}>
          GAMES
        </Link>
        <Link to="/about" className="hover-pink" onClick={closeMenu}>
          ABOUT
        </Link>
        <Link to="/contact" className="hover-pink" onClick={closeMenu}>
          CONTACT
        </Link>
        <Link to="/games" className="btn-play" style={playBtnStyle} onClick={closeMenu}>
          ▶ PLAY
        </Link>
      </div>
    </nav>
  );
}
