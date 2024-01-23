// export const timeToMixJuice = (n, x = ["Pure Strawberry Joy", 0.5, "Energizer", 1.5, "Green Garden", 1.5, "Tropical Island", 3, "All or Nothing", 5], i) => (
//     (i = x.indexOf(n)), i + 1 ? x[i + 1] : 2.5
//   ),
//   limesToCut = (w, l, x = { small: 6, medium: 8, large: 10 }) => (l.forEach((v, i) => (w > 0 ? (l[i] = w -= x[v]) : l.splice(i))), l.length),
//   remainingOrders = (t, o, l) => (o.map((v, i) => ((l = timeToMixJuice(v)), t > 0 ? (t -= l) && o.splice(i) : o[i])), t);

// console.log(remainingOrders(7, ["Tropical Island", "Energizer", "Limetime", "All or Nothing", "Pure Strawberry Joy"]));
export let MIX,
  timeToMixJuice = (MIX = (n) => (({ r: 1, e: 3, o: 6, l: 10 }[n[2]] ?? 5) / 2)),
  limesToCut = (i, o, c = 0) => o.map((m) => (c += i > !(i -= { s: 6, m: 8, l: 10 }[m[0]]))) && c,
  remainingOrders = (t, o) => o.filter((f) => t <= !(t -= MIX(f)));

console.log(timeToMixJuice("Green Garden"));
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
console.log(remainingOrders(7, ["Tropical Island", "Energizer", "Limetime", "All or Nothing", "Pure Strawberry Joy"]));
