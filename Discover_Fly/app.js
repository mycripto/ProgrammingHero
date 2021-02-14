// DOM selectors
const inputFirstCls = document.querySelector("#input-first");
const btnPlus_FirstCls = document.querySelector("#btnPlusFirstCls");
const btnMinus_Firstcls = document.querySelector("#btnMinusFirstcls");
const inputEconomy = document.querySelector("#input-economy");
const btnPlus_economy = document.querySelector("#btnPlusEconomy");
const btnMinus_economy = document.querySelector("#btnMinusEconomy ");
const subtotal = document.querySelector("#subtotal");
const vat = document.querySelector("#vat");
const total = document.querySelector("#total");

// init
inputFirstCls.value = 0;
inputEconomy.value = 0;
subtotal.innerText = 0;
vat.innerText = 0;
total.innerText = 0;

//Price calculator
function update() {
  //   ticket Price
  subtotal.innerText =
    parseFloat(inputFirstCls.value) * 150 +
    parseFloat(inputEconomy.value) * 100;

  //vat
  newSubtotal = parseFloat(subtotal.innerText);
  vat.innerText = newSubtotal * 0.1; // vat 10%

  //Grand Total
  total.innerText = parseFloat(subtotal.innerText) + parseFloat(vat.innerText);
}

//First Class event handler
btnPlus_FirstCls.addEventListener("click", function () {
  inputFirstCls.value++;
  update();
});
btnMinus_Firstcls.addEventListener("click", function () {
  if (inputFirstCls.value > 0) {
    inputFirstCls.value--;
    update();
  }
});
inputFirstCls.addEventListener("input", update);

inputFirstCls.addEventListener("change", update);

//Economy class event handler

btnPlus_economy.addEventListener("click", function () {
  inputEconomy.value++;
  update();
});
btnMinus_economy.addEventListener("click", function () {
  if (inputEconomy.value > 0) {
    inputEconomy.value--;
    update();
  }
});
// inputEconomy.addEventListener("input", update);
inputEconomy.addEventListener("input", function () {
  if (inputEconomy.value > 0 && !isNaN(inputEconomy.value)) {
    update();
  }
});

inputEconomy.addEventListener("change", update);
