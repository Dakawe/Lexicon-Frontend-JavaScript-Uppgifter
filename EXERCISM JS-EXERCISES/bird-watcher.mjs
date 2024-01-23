export const totalBirdCount = (b) => eval(b.join("+")),
  birdsInWeek = (b, w) => eval(b.slice(w * 7 - 7, w * 7).join("+")),
  fixBirdCountLog = (b) => b.map((v, i) => (b[i] += ++i % 2)) && b;
//fixBirdCountLog = (b) => (b.forEach((v, i) => i % 2 || (b[i] = ++v)), b);

console.log(fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]));
const a = [1, 2, 3].map((v, i) => i);

console.log(a);
