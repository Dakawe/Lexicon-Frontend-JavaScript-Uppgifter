export const canExecuteFastAttack = (k) => !k,
  canSpy = (k, a, p) => k || a || p,
  canSignalPrisoner = (a, p) => !a && p,
  canFreePrisoner = (k, a, p, d) => (!a && d) || (!k && !a && p);

let a = false;
let b = true;
let c = true;
let d = false;

const x = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log(new Set(x).has(4));
