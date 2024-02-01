export const cookingStatus = (t) => t ? 'Not done, please wait.' : t==0 ? 'Lasagna is done.' : 'You forgot to set the timer.',
preparationTime = (l, t=2) => (l.length*t),
quantities = (q,n=0,s=0) => (q.map((p) => (p=='noodles' && ++n) || (p=='sauce' && ++s)), {noodles:n*50,sauce:s*0.2}),
addSecretIngredient = (f, m) => {m.push(f.at(-1))},
scaleRecipe = (r, n=2, c={...r}) => eval('for(let i in c)c[i]*=n/2;c');

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(quantities(['noodles', 'noodles', 'sauce', 'noodles']));


const dayArray = (day) => ["Sunday", "Monday", "Tuesday"].at(day-1);

console.log(dayArray(3));