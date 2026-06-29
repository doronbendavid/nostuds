import { useState } from 'react';
import type { FormEvent } from 'react';
import { PageMeta } from '../components/PageMeta';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with No Studs — questions, press, partnerships, or just to tell us your high score."
        path="/contact"
      />
    <section className="container section-pad-lg" style={{ maxWidth: 880 }}>
      <div className="font-press" style={{ fontSize: 10, color: '#12b5d4', marginBottom: 16 }}>
        ▸ SAY HELLO
      </div>
      <h1 className="font-press page-title">DROP US A LINE</h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: '#6a558a', maxWidth: 560, margin: '0 0 40px' }}>
        Got a bug, a big idea, or just want to argue about which Commodore was best? We read
        everything. We reply to most of it. Eventually.
      </p>
      <div className="grid-contact">
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label className="font-press" style={{ fontSize: 9, display: 'block', marginBottom: 10 }}>
              YOUR NAME
            </label>
            <input
              type="text"
              placeholder="Player 3"
              style={{
                width: '100%',
                fontFamily: "'Space Mono', monospace",
                fontSize: 15,
                padding: '13px 14px',
                border: '3px solid #2c1250',
                background: '#fff',
                color: '#2c1250',
              }}
            />
          </div>
          <div>
            <label className="font-press" style={{ fontSize: 9, display: 'block', marginBottom: 10 }}>
              YOUR EMAIL
            </label>
            <input
              type="email"
              placeholder="you@somewhere.net"
              style={{
                width: '100%',
                fontFamily: "'Space Mono', monospace",
                fontSize: 15,
                padding: '13px 14px',
                border: '3px solid #2c1250',
                background: '#fff',
                color: '#2c1250',
              }}
            />
          </div>
          <div>
            <label className="font-press" style={{ fontSize: 9, display: 'block', marginBottom: 10 }}>
              MESSAGE
            </label>
            <textarea
              rows={5}
              placeholder="Tell us everything..."
              style={{
                width: '100%',
                fontFamily: "'Space Mono', monospace",
                fontSize: 15,
                padding: '13px 14px',
                border: '3px solid #2c1250',
                background: '#fff',
                color: '#2c1250',
                resize: 'vertical',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-primary font-press"
            style={{
              alignSelf: 'flex-start',
              background: '#ff2d95',
              color: '#fff',
              border: '3px solid #2c1250',
              boxShadow: '5px 5px 0 #12b5d4',
              padding: '15px 22px',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            ▶ SEND IT
          </button>
          {sent && (
            <div
              className="font-press"
              style={{
                background: '#1faa6b',
                color: '#fff',
                border: '3px solid #2c1250',
                padding: '14px 16px',
                fontSize: 9,
                lineHeight: 1.6,
              }}
            >
              MESSAGE LAUNCHED INTO THE VOID. WE&apos;LL GET BACK TO YOU.
            </div>
          )}
        </form>
        <div
          style={{
            background: '#fff',
            border: '3px solid #2c1250',
            boxShadow: '6px 6px 0 #ffc43d',
            padding: '26px 24px',
          }}
        >
          <div className="font-press" style={{ fontSize: 10, color: '#7a3cff', marginBottom: 18 }}>
            OTHER FREQUENCIES
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.9, color: '#4a3168' }}>
            <div style={{ marginBottom: 14 }}>
              <strong>EMAIL</strong>
              <br />
              hello@nostuds.com
            </div>
            <div style={{ marginBottom: 14 }}>
              <strong>PRESS</strong>
              <br />
              press@nostuds.com
            </div>
            <div>
              <strong>SUPPORT</strong>
              <br />
              &quot;have you tried turning it off and on again&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
