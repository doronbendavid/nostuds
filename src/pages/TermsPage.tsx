import { terms } from '../data/content';
import { PageMeta } from '../components/PageMeta';

export function TermsPage() {
  return (
    <>
      <PageMeta
        title="Terms of Use"
        description="Terms of use for No Studs games and website — the legal fine print, written in mostly human language."
        path="/terms"
        noindex
      />
    <section className="container section-pad-lg" style={{ maxWidth: 820 }}>
      <h1 className="font-press page-title" style={{ fontSize: 'clamp(18px, 4.5vw, 26px)', marginBottom: 12 }}>
        TERMS OF USE
      </h1>
      <div style={{ fontSize: 12, color: '#9a86b8', marginBottom: 36 }}>
        LAST UPDATED: JUNE 29, 2026
      </div>
      <div style={{ fontSize: 'clamp(14px, 3.5vw, 15px)', lineHeight: 1.85, color: '#4a3168' }}>
        {terms.map((b) => (
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
