import { Link } from 'react-router-dom';
import type { Game } from '../data/content';

interface GameCardProps {
  game: Game;
  variant?: 'featured' | 'portfolio';
}

export function GameCard({ game, variant = 'featured' }: GameCardProps) {
  const isFeatured = variant === 'featured';
  const initial = game.initial ?? game.name.charAt(0);

  return (
    <Link to={`/game/${game.id}`} className="card-link" style={{ display: 'block' }}>
      <div
        style={{
          background: '#fff',
          border: '3px solid #2c1250',
          boxShadow: `6px 6px 0 ${game.color}`,
          overflow: 'hidden',
          height: isFeatured ? undefined : '100%',
        }}
      >
        <div
          style={{
            height: isFeatured ? 120 : 140,
            background: game.color,
            borderBottom: '3px solid #2c1250',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: isFeatured ? 54 : 62,
              height: isFeatured ? 54 : 62,
              background: '#fff',
              border: '3px solid #2c1250',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: isFeatured ? 18 : 22,
            }}
          >
            {initial}
          </div>
        </div>
        <div style={{ padding: isFeatured ? '16px 15px 18px' : '18px 16px 20px' }}>
          <div
            className="font-press"
            style={{
              fontSize: isFeatured ? 11 : 12,
              lineHeight: 1.4,
              marginBottom: isFeatured ? 10 : 12,
            }}
          >
            {game.name}
          </div>
          <div
            style={{
              fontSize: 13,
              lineHeight: isFeatured ? 1.5 : 1.55,
              color: '#6a558a',
              minHeight: isFeatured ? 58 : 60,
            }}
          >
            {game.tag}
          </div>
          {isFeatured ? (
            <div
              className="font-press"
              style={{ marginTop: 12, fontSize: 7, color: '#12b5d4' }}
            >
              {game.genre} · {game.year}
            </div>
          ) : (
            <div
              style={{
                marginTop: 14,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span className="font-press" style={{ fontSize: 7, color: '#12b5d4' }}>
                {game.genre}
              </span>
              <span className="font-press" style={{ fontSize: 8, color: '#ff2d95' }}>
                {game.stars}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
