export const getCardPosition = (s, c) => s.indexOf(c),
  doesStackIncludeCard = (s, c) => s.includes(c),
  isEachCardEven = (s) => s.every((c) => !(c % 2)),
  doesStackIncludeOddCard = (s) => s.some((c) => c % 2),
  getFirstOddCard = (s) => s.find((c, ind) => !!(c % 2)),
  getFirstEvenCardPosition = (s) => s.findIndex((c) => !(c % 2));

console.log(getFirstEvenCardPosition([21, 24, 2, 63]));
