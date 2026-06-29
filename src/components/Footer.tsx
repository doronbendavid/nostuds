import { Link } from 'react-router-dom';
import { PixelSprite } from './PixelSprite';

export function Footer() {
  return (
    <footer style={{ background: '#2c1250', color: '#faf5ff', borderTop: '3px solid #2c1250' }}>
      <div className="container grid-footer" style={{ paddingTop: 48, paddingBottom: 30 }}>
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              <PixelSprite variant="founderA" scale={3} />
              <PixelSprite variant="founderB" scale={3} />
            </div>
            <span className="font-press" style={{ fontSize: 15 }}>
              NO STUDS
            </span>
          </Link>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: '#cdbbe8', maxWidth: 320, margin: 0 }}>
            100% organic, free-range developers since the 1990s. Boutique mobile games made by two
            geeks who should probably know better.
          </p>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.65,
              color: '#9a86b8',
              maxWidth: 320,
              margin: '14px 0 0',
              fontStyle: 'italic',
            }}
          >
            Born in the &apos;80s. Delivering software to actual humans since the early &apos;90s.
          </p>
        </div>
        <div>
          <div className="font-press" style={{ fontSize: 9, color: '#ffc43d', marginBottom: 18 }}>
            EXPLORE
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: '#cdbbe8' }}>
            <Link to="/games" className="hover-white">
              Games
            </Link>
            <Link to="/about" className="hover-white">
              About
            </Link>
            <Link to="/contact" className="hover-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <div className="font-press" style={{ fontSize: 9, color: '#ffc43d', marginBottom: 18 }}>
            THE FINE PRINT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: '#cdbbe8' }}>
            <Link to="/privacy" className="hover-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container footer-bar"
        style={{
          borderTop: '2px solid rgba(205,187,232,.2)',
          paddingTop: 20,
          paddingBottom: 20,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          fontSize: 12,
          color: '#9a86b8',
        }}
      >
        <span>© 2026 No Studs. All bugs reserved.</span>
        <span>Built on caffeine &amp; nostalgia. nostuds.com</span>
      </div>
    </footer>
  );
}
