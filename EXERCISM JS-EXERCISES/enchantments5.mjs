export const seeingDouble = (d) => d.map((c) => c * 2),
  threeOfEachThree = (d) => d.flatMap((c) => (c == 3 ? [3, 3, 3] : c)),
  middleTwo = (d, m = d.length / 2 - 1) => d.slice(m, m + 2),
  sandwichTrick = (d) => d.splice(d.length / 2 - 1, 0, ...[d.pop(), d.shift()]) && d,
  twoIsSpecial = (d) => d.filter((c) => c == 2),
  perfectlyOrdered = (d) => d.sort((i, j) => i - j),
  reorder = (d) => d.reverse();

console.log(threeOfEachThree([1, 2, 3, 5, 2, 10]));
