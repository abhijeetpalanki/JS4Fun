export const palettes = [
  { baseHue: 260, range: 20 },
  { baseHue: 210, range: 25 },
  { baseHue: 170, range: 20 },
  { baseHue: 300, range: 25 },
  { baseHue: 30, range: 20 },
  { baseHue: 130, range: 20 },
];

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const pickPalette = (title) => {
  const hash = hashString(title);
  return palettes[hash % palettes.length];
};

export const generateGradientFromTitle = (title) => {
  const hash = hashString(title);
  const palette = pickPalette(title);

  const { baseHue, range } = palette;

  const hue1 = (baseHue + (hash % range)) % 360;
  const hue2 = (baseHue + ((hash >> 3) % range) + range / 2) % 360;

  const sat1 = 60 + (hash % 20);
  const sat2 = 70 + (hash % 15);

  const light1 = 55 + (hash % 10);
  const light2 = 65 + (hash % 10);

  const color1 = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
  const color2 = `hsl(${hue2}, ${sat2}%, ${light2}%)`;

  return { color1, color2 };
};
