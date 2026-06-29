export interface Game {
  id: string;
  name: string;
  genre: string;
  year: number;
  color: string;
  stars: string;
  score: string;
  tag: string;
  quote: string;
  blurb: string;
  feats: string[];
  initial?: string;
}

export const games: Game[] = [
  {
    id: 'pixel-paddle',
    name: 'Pixel Paddle',
    genre: 'Arcade',
    year: 1996,
    color: '#ff2d95',
    stars: '★★★★☆',
    score: '4.2',
    tag: 'Pong, but now your thumbs file formal complaints.',
    quote: '"My grandkid installed this and now we both have callouses."',
    blurb:
      'The game that started it all, ported forward roughly nine times because we never learned to stop. Bounce a pixel. Miss the pixel. Quietly reassess your reflexes. The bus will arrive before you do.',
    feats: [
      'One-thumb controls for one-thumb people',
      'Endless rally mode that ends your dignity',
      'Local multiplayer for settling old scores',
    ],
  },
  {
    id: 'goblin-deli',
    name: 'Goblin Deli',
    genre: 'Sim',
    year: 2001,
    color: '#ff7a3c',
    stars: '★★★★★',
    score: '4.6',
    tag: 'Run a sandwich shop for deeply ungrateful goblins.',
    quote: '"I have never been so stressed about cured meats."',
    blurb:
      'Stack orders, dodge complaints, and keep a horde of impatient goblins fed before they eat the furniture. A cozy management game with a 0% chance of staying cozy.',
    feats: [
      '100+ increasingly cursed recipes',
      'Goblins with opinions and pitchforks',
      'Upgrade your deli, regret your choices',
    ],
  },
  {
    id: 'jetpack-grandpa',
    name: 'Jetpack Grandpa',
    genre: 'Endless Runner',
    year: 2009,
    color: '#12b5d4',
    stars: '★★★★☆',
    score: '4.3',
    tag: 'He should be napping. He is, alarmingly, not napping.',
    quote: '"This is exactly how my father flies, yes."',
    blurb:
      'Strap a questionable jetpack onto a retired man and launch him across an endless sky of obstacles, early-bird specials, and low-flying pigeons. Gravity is undefeated. So far.',
    feats: [
      'Tilt or tap, both end badly',
      'Unlockable hats for a dignified man',
      'Daily challenges he did not consent to',
    ],
  },
  {
    id: 'snake-charmer',
    name: 'Snake Charmer',
    genre: 'Arcade',
    year: 1998,
    color: '#7a3cff',
    stars: '★★★★☆',
    score: '4.1',
    tag: 'The snake grows. Your patience does not.',
    quote: '"It is just Snake." "It is NOT just Snake."',
    blurb:
      'A loving tribute to the game you played on every phone ever, now with a flute, a charming personality, and a tail that absolutely will betray you in the final inch.',
    feats: [
      'Five board sizes, infinite regret',
      'Pixel-perfect retro controls',
      'Leaderboards nobody asked for',
    ],
  },
  {
    id: 'tappy-toast',
    name: 'Tappy Toast',
    genre: 'Reflex',
    year: 2013,
    color: '#ffc43d',
    stars: '★★★★★',
    score: '4.7',
    tag: 'Tap the toast. Do not let it burn. You will let it burn.',
    quote: '"Lost my job. Worth it. Mostly."',
    blurb:
      'A breakfast-themed reflex game with one button and zero mercy. Flip toast, juggle eggs, and watch a tiny kitchen descend into total carbohydrate chaos.',
    feats: [
      'One-button, all-panic gameplay',
      'Combo multipliers and butter physics',
      'Toast skins. So many toast skins.',
    ],
  },
  {
    id: 'dungeon-dad',
    name: 'Dungeon Dad',
    genre: 'Roguelite',
    year: 2017,
    color: '#1faa6b',
    stars: '★★★★☆',
    score: '4.4',
    tag: 'A dad. A dungeon. A frankly unsafe number of puns.',
    quote: '"He keeps the thermostat at 68 in the dungeon too."',
    blurb:
      'Descend procedurally generated dungeons as a suburban father armed with a flashlight, a multitool, and devastating one-liners. Loot is optional. Dad jokes are not.',
    feats: [
      'Procedural dungeons, eternal dad energy',
      'Craft gear out of garage clutter',
      'A pun meter that powers your sword',
    ],
  },
  {
    id: 'asteroid-yard-sale',
    name: 'Asteroid Yard Sale',
    genre: 'Shooter',
    year: 2004,
    color: '#12b5d4',
    stars: '★★★★☆',
    score: '4.0',
    tag: 'Blast the rocks. Then haggle over the debris.',
    quote: '"I came for the shooting, I stayed for the bartering."',
    blurb:
      'Half twitchy space shooter, half flea market. Vaporize asteroids, scoop up the wreckage, and sell it back to suspicious aliens for parts and a tidy profit.',
    feats: [
      'Classic vector-style blasting',
      'Upgrade your ship at the cosmic swap meet',
      'Negotiate with aliens of low character',
    ],
  },
  {
    id: 'crypt-keeper-cafe',
    name: 'Crypt Keeper Café',
    genre: 'Sim',
    year: 2019,
    color: '#7a3cff',
    stars: '★★★★★',
    score: '4.8',
    tag: 'Latte art, but make it deeply haunted.',
    quote: '"Best oat-milk flat white I have had post-mortem."',
    blurb:
      'Open a cozy café in a haunted crypt and serve cursed customers their morning brew. Manage the undead rush, decorate with tasteful gothic flair, and keep the ghosts caffeinated.',
    feats: [
      'Brew drinks for the recently deceased',
      'Spooky-cute decor unlocks',
      'A loyalty program that outlives you',
    ],
  },
  {
    id: 'laser-cat-64',
    name: 'Laser Cat 64',
    genre: 'Action',
    year: 2011,
    color: '#ff7a3c',
    stars: '★★★★☆',
    score: '4.5',
    tag: 'A cat. Lasers. We said yes far too quickly.',
    quote: '"Scientifically, this should not work. It rules."',
    blurb:
      'Pilot a cat that shoots lasers from its eyes through 64 chunky low-poly levels of mayhem. There is no deeper meaning. There is only the laser cat, and the cat is enough.',
    feats: [
      'Eye-laser physics, fully unhinged',
      '64 levels of pure feline ordnance',
      'Knock everything off every table',
    ],
  },
  {
    id: 'bowling-for-goblins',
    name: 'Bowling for Goblins',
    genre: 'Sports',
    year: 2022,
    color: '#ff2d95',
    stars: '★★★★☆',
    score: '4.2',
    tag: 'They are not pins. They have families.',
    quote: '"I felt bad. I bowled anyway."',
    blurb:
      'Ten-pin bowling, except the pins are tiny goblins who will absolutely talk trash before you roll. Curve the ball, rack up strikes, and live with the consequences.',
    feats: [
      'Goblins that heckle in real time',
      'Trick-shot physics and silly spin',
      'Tournament mode with cruel prizes',
    ],
  },
];

export function gamesWithInitials(): Game[] {
  return games.map((g) => ({ ...g, initial: g.name.charAt(0) }));
}

export function getGameById(id: string): Game | undefined {
  return gamesWithInitials().find((g) => g.id === id);
}

export const heroSub =
  "Casual mobile games hand-raised since the '90s by two white-haired Commodore veterans who are, frankly, too old for this. Big nostalgia. Tiny downloads. Absolutely no studs.";

export const stats = [
  { num: '30+', rot: '0deg', label: 'YEARS OF EXPERIENCE', color: '#ffc43d' },
  { num: '8', rot: '90deg', label: 'PRODUCTIONS DELIVERED', color: '#12b5d4' },
  { num: '2', rot: '0deg', label: 'GRAYING GEEKS', color: '#ff2d95' },
  { num: '0', rot: '0deg', label: 'ACTUAL STUDS', color: '#7affc4' },
];

export const pillars = [
  {
    icon: '◆',
    color: '#ff2d95',
    title: 'TINY ON PURPOSE',
    body: 'No bloat, no battle passes, no 4GB updates. Just small games that respect your time and your storage.',
  },
  {
    icon: '▲',
    color: '#12b5d4',
    title: 'BUILT TO LAST',
    body: 'Three decades of shipping software means we know how to make something that still works next year.',
  },
  {
    icon: '●',
    color: '#ffc43d',
    title: 'MADE WITH LOVE',
    body: 'Two people make every game here. If something is janky, you know exactly whose fault it is. (Both of us.)',
  },
];

export const founders = [
  {
    handle: 'PLAYER ONE',
    role: 'WHITE HAIR · SUSPICIOUS GOATEE',
    color: '#ff2d95',
    bio: 'Has been writing code since you needed a screwdriver to install it. Believes every problem is solvable with enough coffee and a good night\u2019s sleep he will not be getting.',
    hat: true as const,
  },
  {
    handle: 'PLAYER TWO',
    role: 'FULL BEARD · FULLER OPINIONS',
    color: '#12b5d4',
    bio: 'Comfortably built, comfortably opinionated, and comfortably certain the 8-bit era was peak human achievement. Does the art, the audio, and most of the complaining.',
    hat: true as const,
  },
];

export const timeline = [
  { year: '199X', text: 'Two kids meet a Commodore. Nothing is ever the same. Mostly the carpet.' },
  { year: '2000s', text: 'Careers in "serious" software. Suits. Meetings. A slow, quiet ache for joysticks.' },
  { year: '2013', text: 'First mobile game shipped at 2am. It had one button. We cried (with joy).' },
  { year: '2019', text: 'No Studs becomes a real, registered, tax-paying boutique studio. Somehow.' },
  { year: 'NOW', text: 'Ten games deep, grayer than ever, and still arguing about which Commodore was best.' },
];

export const values = [
  {
    color: '#ff2d95',
    title: 'WE SHIP SMALL',
    body: 'A finished little game beats a perfect imaginary one. We\u2019d rather you play it than hear about it.',
  },
  {
    color: '#12b5d4',
    title: 'WE STAY ANONYMOUS',
    body: 'You don\u2019t need our names, you need our games. We let the pixels do the talking.',
  },
  {
    color: '#ffc43d',
    title: 'WE ROAST OURSELVES',
    body: 'The name is No Studs for a reason. Low ego, high effort, zero pretense.',
  },
];

export const privacy = [
  {
    h: 'THE SHORT VERSION',
    p: 'We make small games and we like to keep things simple — including this. We collect as little as we can, we don\u2019t sell your data, and we\u2019d genuinely rather not know that much about you.',
  },
  {
    h: 'WHAT WE COLLECT',
    p: 'When you use our apps or visit nostuds.com, we may collect basic device and usage information (like crash reports, game progress, and rough analytics) so we can fix bugs and make better games. If you contact us, we keep your message and email so we can reply.',
  },
  {
    h: 'HOW WE USE IT',
    p: 'We use this information to operate and improve our games, respond to support requests, and understand which features people actually enjoy. That\u2019s it. We don\u2019t build advertising profiles.',
  },
  {
    h: 'SHARING',
    p: 'We do not sell your personal information. We only share data with service providers who help us run the games (such as analytics and crash-reporting tools), and only to the extent needed to provide the service. They are bound to keep it confidential.',
  },
  {
    h: 'YOUR CHOICES',
    p: 'You can opt out of analytics in-app where available, request a copy of your data, or ask us to delete it. Email us and a real human (one of two) will handle it.',
  },
  {
    h: 'CHILDREN',
    p: 'Our games are designed to be family-friendly, but they are not directed at children under 13, and we do not knowingly collect personal information from them. If you believe we have, contact us and we\u2019ll remove it.',
  },
  {
    h: 'CHANGES',
    p: 'If we update this policy, we\u2019ll revise the date at the top. Significant changes will be announced in-app or on the site.',
  },
  {
    h: 'CONTACT',
    p: 'Questions about privacy? Email hello@nostuds.com. We read everything.',
  },
];

export const terms = [
  {
    h: 'THE SHORT VERSION',
    p: 'By using our games and website, you agree to be reasonable, and so do we. Don\u2019t break things, don\u2019t steal things, and have fun. Here are the slightly longer details.',
  },
  {
    h: 'USING OUR STUFF',
    p: 'No Studs grants you a personal, non-exclusive, non-transferable license to download and play our games for your own enjoyment. You agree not to copy, resell, reverse-engineer, or otherwise mess with the apps beyond what the law allows.',
  },
  {
    h: 'YOUR CONDUCT',
    p: 'You agree not to use our games or services to do anything illegal, abusive, or designed to disrupt the experience for other players. In multiplayer modes, be a decent human — even to the goblins.',
  },
  {
    h: 'PURCHASES',
    p: 'Any in-app purchases are handled by the relevant app store (Apple or Google) under their terms. Refunds are subject to those stores\u2019 policies. We\u2019re a two-person studio, so please be patient with support.',
  },
  {
    h: 'INTELLECTUAL PROPERTY',
    p: 'All game content, characters, code, art, and the No Studs name and logo are owned by us and protected by applicable laws. Enjoy them; don\u2019t take them.',
  },
  {
    h: 'DISCLAIMER',
    p: 'Our games are provided "as is." We work hard to keep them fun and functional, but we can\u2019t guarantee they\u2019ll be uninterrupted, bug-free, or compatible with every device that has ever existed.',
  },
  {
    h: 'LIMITATION OF LIABILITY',
    p: 'To the fullest extent permitted by law, No Studs is not liable for indirect or incidental damages arising from your use of our games. Translation: please don\u2019t sue us over a missed high score.',
  },
  {
    h: 'CHANGES & CONTACT',
    p: 'We may update these terms from time to time; the date above reflects the latest version. Questions? Email hello@nostuds.com.',
  },
];
