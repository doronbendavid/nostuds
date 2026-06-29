const PALETTE: Record<string, string> = {
  W: '#f3efe6',
  G: '#c4c4cf',
  S: '#e8a877',
  K: '#262230',
  E: '#2f6fb3',
  C: '#e52521',
  Y: '#43a047',
};

const FOUNDER_A = [
  '   WWWWW   ',
  '  WWWWWWW  ',
  ' WWWWWWWWW ',
  ' WWSSSSSWW ',
  ' WSSSSSSSW ',
  ' WSKSSSKSW ',
  '  SSSSSSS  ',
  '  SSSKSSS  ',
  '   SSSSS   ',
  '    SWS    ',
  '     W     ',
];

const FOUNDER_B = [
  '  GGGGGGG  ',
  ' GGGGGGGGG ',
  'GGGGGGGGGGG',
  'GGSSSSSSSGG',
  'GSSSSSSSSSG',
  'GSESSSSSESG',
  ' SSSSSSSSS ',
  ' KSSSSSSSK ',
  ' KKKKKKKKK ',
  '  KKKKKKK  ',
  '   KKKKK   ',
];

const FOUNDER_A_HAT = [
  '   CCCCC   ',
  '  CCCCCCC  ',
  'CCCCCCCCC  ',
  '  CCCCCCC  ',
  ' WSSSSSSSW ',
  ' WSKSSSKSW ',
  '  SSSSSSS  ',
  '  SSSKSSS  ',
  '   SSSSS   ',
  '    SWS    ',
  '     W     ',
];

const FOUNDER_B_HAT = [
  '  YYYYYYY  ',
  ' YYYYYYYY  ',
  ' YYYYYYYYYY',
  ' YYYYYYYY  ',
  'GSSSSSSSSSG',
  'GSESSSSSESG',
  ' SSSSSSSSS ',
  ' KSSSSSSSK ',
  ' KKKKKKKKK ',
  '  KKKKKKK  ',
  '   KKKKK   ',
];

export type SpriteVariant = 'founderA' | 'founderB' | 'founderAHat' | 'founderBHat';

const GRIDS: Record<SpriteVariant, string[]> = {
  founderA: FOUNDER_A,
  founderB: FOUNDER_B,
  founderAHat: FOUNDER_A_HAT,
  founderBHat: FOUNDER_B_HAT,
};

interface PixelSpriteProps {
  variant: SpriteVariant;
  scale: number;
  outline?: string | null;
}

function buildShadow(grid: string[], scale: number, outline?: string | null): string {
  const rows = grid.length;
  const cols = grid[0].length;
  const lit = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < cols && y < rows && grid[y][x] !== ' ';

  const shadows: string[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const ch = grid[y][x];
      if (ch !== ' ') {
        const color = PALETTE[ch];
        if (color) shadows.push(`${x * scale}px ${y * scale}px 0 0 ${color}`);
      } else if (
        outline &&
        (lit(x - 1, y) || lit(x + 1, y) || lit(x, y - 1) || lit(x, y + 1))
      ) {
        shadows.push(`${x * scale}px ${y * scale}px 0 0 ${outline}`);
      }
    }
  }
  return shadows.join(', ');
}

export function PixelSprite({ variant, scale, outline = null }: PixelSpriteProps) {
  const grid = GRIDS[variant];
  const cols = grid[0].length;
  const rows = grid.length;

  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        width: cols * scale,
        height: rows * scale,
        flex: '0 0 auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: scale,
          height: scale,
          background: 'transparent',
          boxShadow: buildShadow(grid, scale, outline),
        }}
      />
    </div>
  );
}
