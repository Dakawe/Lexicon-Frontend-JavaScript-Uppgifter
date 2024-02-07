export const cardTypeCheck = (s, c) => s.filter((t) => c == t).length,

  determineOddEvenCards = (s, t) => s.filter((c) => c % 2 != t).length;

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
