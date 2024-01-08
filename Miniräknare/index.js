let activetxt = document.getElementById("calc");
let totaltxt = document.getElementById("calc-small");
let sum = "";
let modifier = String();
let active = "";

function input(input) {
  if (isNaN(input)) {
    modifier = input;
  } else {
    active += input;
  }

  activetxt.innerText = active;
  totaltxt.innerText = sum + modifier;
  console.log(sum);
  console.log(active + modifier + sum);
}
