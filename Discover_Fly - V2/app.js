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
inputFirstCls.addEventListener("input", function () {
  if (inputFirstCls.value > 0) {
    update();
  }
});

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
  if (inputEconomy.value > 0) {
    update();
  }
});

inputEconomy.addEventListener("change", update);

//Summary Section;
//selectors:
let departFrom = document.querySelector("#depart_flfrom");
let departTo = document.querySelector("#depart_flTo");
let returnFrom = document.querySelector("#return_flfrom");
let returntTo = document.querySelector("#return_flTo");
let departDate = document.querySelector("#departDate");
let returnDate = document.querySelector("#returnDate");
let fClsQtty = document.querySelector("#fClsNum");
let eClsQtty = document.querySelector("#eClsNum");
let fClsPrice = document.querySelector("#fClsPrice");
let eClsPrice = document.querySelector("#eClsPrice");
let summarySub = document.querySelector("#summarySub");
let summaryVat = document.querySelector("#summaryVat");
let summaryTotal = document.querySelector("#summaryTotal");
let flyFrom = document.querySelector("#fly-from");
let flyTo = document.querySelector("#fly-to");

departTo.innerText = flyTo.placeholder;
departFrom.innerText = flyFrom.placeholder;
returnFrom.innerText = flyTo.placeholder;
returntTo.innerText = flyFrom.placeholder;
departDate.innerText = `Monday, 28 March 2021`;

//first Class

document.querySelector("#btnBook").addEventListener("click", function () {
  fClsQtty.innerText = inputFirstCls.value;
  fClsPrice.innerText = parseFloat(inputFirstCls.value) * 150;
  eClsQtty.innerText = inputEconomy.value;
  eClsPrice.innerText = parseFloat(inputEconomy.value) * 100;
  summarySub.innerText = subtotal.innerText;
  summaryVat.innerText = vat.innerText;
  summaryTotal.innerText = total.innerText;
});
