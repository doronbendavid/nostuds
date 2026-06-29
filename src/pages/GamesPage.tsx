import { GameCard } from '../components/GameCard';
import { PageMeta } from '../components/PageMeta';
import { gamesWithInitials } from '../data/content';

export function GamesPage() {
  const games = gamesWithInitials();

  return (
    <>
      <PageMeta
        title="Games"
        description="Browse every No Studs cartridge — small, silly, replayable mobile games from two Commodore veterans with 30+ years of experience and zero studs."
        path="/games"
      />
    <section className="container section-pad-lg">
      <div className="font-press" style={{ fontSize: 10, color: '#12b5d4', marginBottom: 16 }}>
        ▸ THE CATALOG
      </div>
      <h1 className="font-press page-title" style={{ marginBottom: 14 }}>
        ALL OUR GAMES
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: '#6a558a', maxWidth: 620, margin: '0 0 36px' }}>
        Ten tiny games, lovingly hand-soldered over far too many years. Tap any cartridge to read the
        full, regrettable details.
      </p>
      <div className="grid-games">
        {games.map((g) => (
          <GameCard key={g.id} game={g} variant="portfolio" />
        ))}
      </div>
    </section>
    </>
  );
}
