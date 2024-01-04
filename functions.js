// Create a function that greets you with "Hello there my friend!".

function Greeting() {
  return "Hello there my friend!";
}
function GreetingWithName(name) {
  console.log(`${Greeting()} You must be ${name}!`);
}
function Addition(n1, n2) {
  return n1 + n2;
}
function Division(n1, n2) {
  if (n2 && Number.isFinite(n2)) {
    return n1 / n2;
  } else {
    console.error("Invalid input.");
  }
}
function Area(width, length) {
  return width * length;
}
function GreetingWithNameAgain(firstName, lastName) {
  return `Hello ${firstName} ${lastName}! How are you doing?`;
}
function KmToMiles(km) {
  return (km * 0.62137119).toFixed(4) + "miles";
}
function CelsiusToFahrenheit(km) {
  return (km * 1.8 + 32).toFixed(1) + "°F";
}
function MeanValue(numbers = [], sum = 0) {
  if (numbers.length) {
    for (number in numbers) {
      sum += numbers[number];
    }
  }
  return sum / numbers.length;
}
function Systembolaget(age) {
  return age <= 14
    ? "Get out of here!"
    : age <= 17
    ? "Sorry, you are not old enough"
    : age <= 19
    ? "Sorry, you must be at least 20. Why don't you try a bar instead?"
    : age <= 80
    ? "Thank you! Welcome!"
    : age > 80
    ? "I'm sorry, where is your caretaker?"
    : "Your input is invalid.";
}
function Sum(numbers = [], sum = 0) {
  for (n in numbers) {
    sum += numbers[n];
  }
  return sum;
}
function ListOfPersonsSkills(person) {
  console.log(`Uppgift 12 -> ${person.name} is skilled in: ${person.skills}`);
}

Greeting();
greetings_surname = GreetingWithName("Daniel");
greetings_fullname = GreetingWithNameAgain("Daniel", "Westergren");
add = Addition(4, 7);
div = Division(12, 4);
area = Area(7, 5);
kmtomiles = KmToMiles(3);
celsiustofahrenheit = CelsiusToFahrenheit(18);
meanvalue = MeanValue([1, 2, 3, 4, 5, 6, 7, 8, 9]);
systembolaget = Systembolaget(15);
sum = Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Uppgift 1 ->", Greeting());
console.log("Uppgift 2 ->", greetings_surname);
console.log("Uppgift 3 ->", greetings_fullname);
console.log("Uppgift 4 ->", add);
console.log("Uppgift 5 ->", div);
console.log("Uppgift 6 ->", area);
console.log("Uppgift 7 ->", kmtomiles);
console.log("Uppgift 8 ->", celsiustofahrenheit);
console.log("Uppgift 9 ->", meanvalue);
console.log("Uppgift 10 ->", systembolaget);
console.log("Uppgift 11 ->", sum);

let Person = {
  name: "Daniel Westergren",
  age: 37,
  city: "Halmstad",
  skills: ["JavaScript", "HTML", "CSS", "Python", "C#"],
};
ListOfPersonsSkills(Person);
