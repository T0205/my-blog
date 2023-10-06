

export function randomInt(m: number, n: number) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}