const btn10 = document.getElementById("btn-10");
const btn15 = document.getElementById("btn-15");
const btn20 = document.getElementById("btn-20");
const tenInput = document.getElementById("10-input");
const fifteenInput = document.getElementById("15-input");
const twentyInput = document.getElementById("20-input");
const calcDiv = document.getElementById("calc");

// Button event listeners
btn10.addEventListener("click", calc10);
btn15.addEventListener("click", calc15);
btn20.addEventListener("click", calc20);

// Tip cost calculations
function calc10() {
  const cost10 = (tenInput.value * 0.1).toFixed(2);
  calcDiv.innerHTML = `${"$" + cost10}`;
}

function calc15() {
  const cost15 = (fifteenInput.value * 0.15).toFixed(2);
  calcDiv.innerHTML = `${"$" + cost15}`;
}

function calc20() {
  const cost20 = (twentyInput.value * 0.2).toFixed(2);
  calcDiv.innerHTML = `${"$" + cost20}`;
}
