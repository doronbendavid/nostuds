import { Link, useParams, Navigate } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { getGameById } from '../data/content';

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const game = id ? getGameById(id) : undefined;

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const shots = [1, 2, 3];

  return (
    <>
      <PageMeta
        title={game.name}
        description={`${game.tag} ${game.genre} game from No Studs (${game.year}).`}
        path={`/game/${game.id}`}
        type="article"
        imageAlt={`${game.name} — ${game.tag}`}
      />
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '3px solid #2c1250' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${game.color}, #2c1250)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'repeating-linear-gradient(to bottom, rgba(0,0,0,.08) 0 1px, transparent 1px 3px)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container grid-game-hero"
          style={{
            position: 'relative',
            paddingTop: 36,
            paddingBottom: 48,
            color: '#fff',
          }}
        >
          <div>
            <Link
              to="/games"
              className="nav-back font-press"
              style={{
                display: 'inline-block',
                fontSize: 9,
                color: '#fff',
                opacity: 0.85,
                marginBottom: 24,
              }}
            >
              ◂ BACK TO GAMES
            </Link>
            <div className="font-press" style={{ fontSize: 9, color: '#ffc43d', marginBottom: 16 }}>
              {game.genre} · EST. {game.year}
            </div>
            <h1
              className="font-press page-title-lg"
              style={{
                margin: '0 0 18px',
                textShadow: '3px 3px 0 rgba(0,0,0,.25)',
              }}
            >
              {game.name}
            </h1>
            <p style={{ fontSize: 'clamp(15px, 3.5vw, 18px)', lineHeight: 1.6, maxWidth: 480, margin: '0 0 28px', color: '#f3eaff' }}>
              {game.tag}
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <div
                style={{
                  background: '#fff',
                  color: '#2c1250',
                  border: '3px solid #2c1250',
                  boxShadow: '4px 4px 0 rgba(0,0,0,.3)',
                  padding: '13px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: 9, letterSpacing: '.05em' }}>DOWNLOAD ON</span>
                <span className="font-press" style={{ fontSize: 11 }}>
                  ▶ APP STORE
                </span>
              </div>
              <div
                style={{
                  background: '#2c1250',
                  color: '#fff',
                  border: '3px solid #fff',
                  boxShadow: '4px 4px 0 rgba(0,0,0,.3)',
                  padding: '13px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: 9, letterSpacing: '.05em' }}>GET IT ON</span>
                <span className="font-press" style={{ fontSize: 11 }}>
                  ▶ GOOGLE PLAY
                </span>
              </div>
            </div>
          </div>
          <div
            className="game-phone"
            style={{
              background: '#1a0c30',
              border: '4px solid #2c1250',
              borderRadius: 36,
              padding: 12,
              boxShadow: '10px 10px 0 rgba(0,0,0,.3)',
              animation: 'floaty2 6s ease-in-out infinite',
            }}
          >
            <div
              className="game-phone-inner"
              style={{
                background: game.color,
                borderRadius: 24,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 18,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 90,
                  height: 18,
                  background: '#1a0c30',
                  borderRadius: '0 0 12px 12px',
                }}
              />
              <div
                style={{
                  width: 84,
                  height: 84,
                  background: '#fff',
                  border: '4px solid #2c1250',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 30,
                  color: '#2c1250',
                }}
              >
                {game.initial}
              </div>
              <div
                className="font-press"
                style={{
                  fontSize: 11,
                  color: '#fff',
                  textAlign: 'center',
                  padding: '0 16px',
                  lineHeight: 1.5,
                }}
              >
                {game.name}
              </div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 24, color: 'rgba(255,255,255,.85)' }}>
                ▶ TAP TO PLAY
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad-lg">
        <div className="grid-two-col">
          <div>
            <h2 className="font-press" style={{ fontSize: 16, margin: '0 0 20px' }}>
              THE PITCH
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#4a3168', margin: '0 0 28px' }}>
              {game.blurb}
            </p>
            <h2 className="font-press" style={{ fontSize: 16, margin: '0 0 20px' }}>
              WHAT YOU GET
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {game.feats.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      background: game.color,
                      border: '2px solid #2c1250',
                      flex: '0 0 auto',
                      marginTop: 3,
                    }}
                  />
                  <span style={{ fontSize: 15, lineHeight: 1.6, color: '#4a3168' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                border: '3px solid #2c1250',
                boxShadow: `6px 6px 0 ${game.color}`,
                padding: 24,
                background: '#fff',
              }}
            >
              <div className="font-press" style={{ fontSize: 10, color: '#12b5d4', marginBottom: 18 }}>
                THE NUMBERS
              </div>
              <div className="font-press" style={{ fontSize: 26, color: '#ff2d95', marginBottom: 6 }}>
                {game.stars}
              </div>
              <div style={{ fontSize: 13, color: '#6a558a', marginBottom: 20 }}>
                {game.score} / 5 · {game.genre}
              </div>
              <div
                style={{
                  borderTop: '2px dashed #cdbbe8',
                  paddingTop: 18,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#4a3168',
                  fontStyle: 'italic',
                }}
              >
                {game.quote}
              </div>
              <div className="font-press" style={{ marginTop: 14, fontSize: 7, color: '#9a86b8' }}>
                — A REAL HUMAN, PROBABLY
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-press" style={{ fontSize: 16, margin: '46px 0 22px' }}>
          SCREENSHOTS
        </h2>
        <div className="grid-screenshots">
          {shots.map((n) => (
            <div
              key={n}
              style={{
                aspectRatio: '9/16',
                border: '3px solid #2c1250',
                boxShadow: `5px 5px 0 ${game.color}`,
                backgroundImage:
                  'repeating-linear-gradient(45deg, #efe4fb 0 12px, #f7f0ff 12px 24px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: '.1em',
                  color: '#9a86b8',
                  textAlign: 'center',
                  padding: '0 12px',
                }}
              >
                SCREENSHOT {n}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
