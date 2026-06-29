import { Link } from 'react-router-dom';
import { PixelSprite } from '../components/PixelSprite';
import { GameCard } from '../components/GameCard';
import { PageMeta } from '../components/PageMeta';
import { gamesWithInitials, heroSub, stats, pillars } from '../data/content';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '../seo/site';

export function HomePage() {
  const featured = gamesWithInitials().slice(0, 4);

  return (
    <>
      <PageMeta title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} path="/" />
      <section className="hero-section">
        <div
          style={{
            position: 'absolute',
            left: '-25%',
            right: '-25%',
            bottom: -80,
            height: 340,
            transform: 'perspective(300px) rotateX(66deg)',
            transformOrigin: 'bottom',
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(18,181,212,.3) 0 2px, transparent 2px 70px), repeating-linear-gradient(to bottom, rgba(255,45,149,.3) 0 2px, transparent 2px 70px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'repeating-linear-gradient(to bottom, rgba(44,18,80,.05) 0 1px, transparent 1px 3px)',
          }}
        />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="hero-sun-zone">
            <div className="hero-sun-disc" />
            <div className="hero-sun-slats" />
            <div className="hero-sun-fade" />
            <div className="hero-sun-characters">
              <div
                className="hero-sprites"
                style={{
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-end',
                  animation: 'floaty 5s ease-in-out infinite',
                }}
              >
                <PixelSprite variant="founderA" scale={8} />
                <PixelSprite variant="founderB" scale={8} />
              </div>
            </div>
          </div>
          <h1 className="font-press hero-title">
            100% ORGANIC,
            <br />
            FREE-RANGE
            <br />
            <span style={{ color: '#ff2d95' }}>GAMES</span>
          </h1>
          <p className="hero-sub">{heroSub}</p>
          <div className="hero-actions">
            <Link
              to="/games"
              className="btn-primary font-press"
              style={{
                background: '#ff2d95',
                color: '#fff',
                border: '3px solid #2c1250',
                boxShadow: '5px 5px 0 #12b5d4',
              }}
            >
              BROWSE THE GAMES
            </Link>
            <Link
              to="/about"
              className="btn-secondary font-press"
              style={{
                background: '#fff',
                color: '#2c1250',
                border: '3px solid #2c1250',
                boxShadow: '5px 5px 0 #ffc43d',
              }}
            >
              MEET THE GEEKS
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          background: '#2c1250',
          color: '#faf5ff',
          borderTop: '3px solid #2c1250',
          borderBottom: '3px solid #2c1250',
        }}
      >
        <div className="container grid-stats" style={{ paddingTop: 30, paddingBottom: 30 }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-press stat-num"
                style={{
                  color: s.color,
                  display: 'inline-block',
                  transform: `rotate(${s.rot})`,
                }}
              >
                {s.num}
              </div>
              <div className="stat-label" style={{ letterSpacing: '.08em', marginTop: 10, color: '#cdbbe8' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-pad">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div>
            <div className="font-press" style={{ fontSize: 10, color: '#12b5d4', marginBottom: 14 }}>
              NOW PLAYING
            </div>
            <h2 className="font-press section-heading">FEATURED CARTRIDGES</h2>
          </div>
          <Link
            to="/games"
            className="font-press hover-underline"
            style={{ fontSize: 10, color: '#ff2d95' }}
          >
            ALL GAMES ▸
          </Link>
        </div>
        <div className="grid-featured">
          {featured.map((g) => (
            <GameCard key={g.id} game={g} variant="featured" />
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', borderTop: '3px solid #2c1250', borderBottom: '3px solid #2c1250' }}>
        <div className="container section-pad grid-pillars">
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                border: '3px solid #2c1250',
                boxShadow: `6px 6px 0 ${p.color}`,
                padding: '26px 24px',
                background: '#faf5ff',
              }}
            >
              <div className="font-press" style={{ fontSize: 22, color: p.color, marginBottom: 16 }}>
                {p.icon}
              </div>
              <div className="font-press" style={{ fontSize: 12, lineHeight: 1.4, marginBottom: 12 }}>
                {p.title}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.65, color: '#6a558a' }}>{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-pad-lg">
        <div
          className="cta-box grid-cta"
          style={{
            background: 'linear-gradient(120deg, #2c1250, #4a1f7a)',
            color: '#faf5ff',
            border: '3px solid #2c1250',
            boxShadow: '9px 9px 0 #ff2d95',
          }}
        >
          <div>
            <h2 className="font-press" style={{ fontSize: 'clamp(16px, 4vw, 22px)', lineHeight: 1.5, margin: '0 0 18px' }}>
              TWO GEEKS.
              <br />
              THIRTY YEARS.
              <br />
              <span style={{ color: '#ffc43d' }}>ZERO STUDS.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520, color: '#d9c9f2', margin: '0 0 26px' }}>
              We&apos;ve been writing software since the Commodore was the hottest box on the desk. Now
              we make the small, silly, replayable games we always wanted to make.
            </p>
            <Link
              to="/about"
              className="btn-cta font-press"
              style={{
                display: 'inline-block',
                background: '#ffc43d',
                color: '#2c1250',
                border: '3px solid #faf5ff',
                boxShadow: '4px 4px 0 #12b5d4',
                padding: '14px 20px',
                fontSize: 11,
              }}
            >
              OUR WHOLE SAD STORY ▸
            </Link>
          </div>
          <div className="cta-sprites" style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
            <PixelSprite variant="founderA" scale={6} />
            <PixelSprite variant="founderB" scale={6} />
          </div>
        </div>
      </section>
    </>
  );
}
