export const needsLicense = (k) => ["car", "truck"].includes(k),
  chooseVehicle = (o, oo) => `${o < oo ? o : oo} is clearly the better choice.`,
  calculateResellPrice = (o, a) => o * (o = a > 10 ? .5 : a < 3 ? .8 : .7);

console.log(chooseVehicle("a", "b"));
console.log(calculateResellPrice(1000, 2.9));
