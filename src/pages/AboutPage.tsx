import { PixelSprite } from '../components/PixelSprite';
import { PageMeta } from '../components/PageMeta';
import { founders, timeline, values } from '../data/content';

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Meet the two graying Commodore veterans behind No Studs — thirty years of shipping software, zero studs, and boutique mobile games made with love."
        path="/about"
      />
      <section className="container section-pad-lg" style={{ paddingBottom: 30 }}>
        <div className="font-press" style={{ fontSize: 10, color: '#12b5d4', marginBottom: 16 }}>
          ▸ WHO WE ARE (SORT OF)
        </div>
        <h1 className="font-press page-title">
          TWO GEEKS,
          <br />
          ONE PASSION
        </h1>
        <p style={{ fontSize: 'clamp(15px, 3.5vw, 17px)', lineHeight: 1.8, color: '#4a3168', maxWidth: 680, margin: 0 }}>
          We&apos;ve been building software for thirty years — since the days when &quot;saving&quot;
          meant listening to a tape deck screech for four minutes. We were Commodore kids. We never
          really logged off. No Studs is what happens when two old geeks finally build the games they
          always wanted to play.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 60 }}>
        <div className="grid-founders">
          {founders.map((f, i) => (
            <div
              key={f.handle}
              className="founder-card"
              style={{
                background: '#fff',
                border: '3px solid #2c1250',
                boxShadow: `8px 8px 0 ${f.color}`,
                padding: '30px 28px',
              }}
            >
              <div style={{ flex: '0 0 auto' }}>
                <PixelSprite variant={i === 0 ? 'founderAHat' : 'founderBHat'} scale={9} />
              </div>
              <div>
                <div className="font-press" style={{ fontSize: 13, marginBottom: 10 }}>
                  {f.handle}
                </div>
                <div className="font-press" style={{ fontSize: 8, color: f.color, marginBottom: 14 }}>
                  {f.role}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: '#6a558a' }}>{f.bio}</div>
              </div>
            </div>
          ))}
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
        <div className="container section-pad-lg">
          <h2 className="font-press" style={{ fontSize: 18, margin: '0 0 38px', color: '#ffc43d' }}>
            THE HIGH SCORE TABLE
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {timeline.map((t) => (
              <div key={t.year} className="timeline-row">
                <div className="font-press" style={{ fontSize: 14, color: '#12b5d4' }}>
                  {t.year}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: '#e7dbf7' }}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad-lg">
        <h2 className="font-press" style={{ fontSize: 18, margin: '0 0 34px', textAlign: 'center' }}>
          HOW WE (BARELY) OPERATE
        </h2>
        <div className="grid-values">
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                border: '3px solid #2c1250',
                boxShadow: `6px 6px 0 ${v.color}`,
                padding: '26px 24px',
                background: '#fff',
              }}
            >
              <div className="font-press" style={{ fontSize: 12, lineHeight: 1.4, marginBottom: 14, color: v.color }}>
                {v.title}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.65, color: '#6a558a' }}>{v.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
