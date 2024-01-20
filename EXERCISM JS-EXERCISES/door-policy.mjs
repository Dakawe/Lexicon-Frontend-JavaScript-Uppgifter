export let frontDoorResponse = (l) => l[0],
  frontDoorPassword = (w) => w[0].toUpperCase() + w.slice(1).toLowerCase(),
  backDoorResponse = (l) => l.trim().at(-1),
  backDoorPassword = (w) => frontDoorPassword(w) + ", please";

console.log("abcdefg".slice(1));

const cl = {
  name: "daniel",
  last: "westergren",
  age: 37,
};
const cd = {
  name: "daniel",
  last: "westergren",
  age: 37,
};

Object.freeze(cd);

console.log(cd);

const a = { ...cd };
a.name = "new";
console.log(a); 
