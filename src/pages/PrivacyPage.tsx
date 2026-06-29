import { privacy } from '../data/content';
import { PageMeta } from '../components/PageMeta';

export function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="How No Studs handles your data — spoiler: we collect almost nothing and we'd rather be making games."
        path="/privacy"
        noindex
      />
    <section className="container section-pad-lg" style={{ maxWidth: 820 }}>
      <h1 className="font-press page-title" style={{ fontSize: 'clamp(18px, 4.5vw, 26px)', marginBottom: 12 }}>
        PRIVACY POLICY
      </h1>
      <div style={{ fontSize: 12, color: '#9a86b8', marginBottom: 36 }}>
        LAST UPDATED: JUNE 29, 2026
      </div>
      <div style={{ fontSize: 'clamp(14px, 3.5vw, 15px)', lineHeight: 1.85, color: '#4a3168' }}>
        {privacy.map((b) => (
          <div key={b.h}>
            <h3 className="font-press" style={{ fontSize: 12, color: '#2c1250', margin: '30px 0 12px' }}>
              {b.h}
            </h3>
            <p style={{ margin: '0 0 4px' }}>{b.p}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
