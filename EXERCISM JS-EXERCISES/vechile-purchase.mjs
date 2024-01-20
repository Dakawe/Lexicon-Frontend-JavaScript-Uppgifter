export const needsLicense = (k) => ["car", "truck"].includes(k),
  chooseVehicle = (o, oo) => ((o = o < oo ? o : oo), `${o} is clearly the better choice.`),
  calculateResellPrice = (o, a) => (o = a > 10 ? o * 0.5 : a < 3 ? o * 0.8 : o * 0.7);

console.log(chooseVehicle("a", "b"));
console.log(calculateResellPrice(1000, 2.9));
