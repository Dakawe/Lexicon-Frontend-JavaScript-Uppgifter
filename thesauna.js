function fahrenheit_celcius(celcius) {
  celcius = ((celcius - 32) / 1.8).toFixed(3);
  console.log(celcius);
}

const letters = ["a", "b", "c", "d"];
const copy = letters.slice();
console.log(copy); // ["b"]

const animals = ["tiger", "lion", "rubberduck", "bear"];
const removedElements = animals.splice(2, 1);

console.log(animals); //  ["tiger", "lion", "bear"];
console.log(removedElements); // ["rubberduck"]

animals.splice(1, 0, "shark", "moose");
console.log(animals);

animals.splice(1, 2, "Daniel", "Westergren", "Mu");
console.log(animals);
