// sellectors
const loginBtn = document.getElementById("login-btn");
const loginArea = document.getElementById("login-area");
const transArea = document.getElementById("transaction-area");
const dipositAmount = document.getElementById("diposit");
const withdrawAmount = document.getElementById("withdraw");
const dipositCurrent = document.getElementById("diposit-current");
const withdrawCurrent = document.getElementById("withdraw-current");
const balanceCurrent = document.getElementById("balance-current");
const btnDiposit = document.getElementById("btnDiposit");
const btnWithdraw = document.getElementById("btnWithdraw");
// console.log(balanceCurrent);

//temp

// EventListener
loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  transArea.style.display = "block";
});
btnDiposit.addEventListener("click", () => {
  if (dipositAmount.value > 0) {
    updateDiposit();
  } else {
    dipositAmount.placeholder = "Please enter valid amount!";
    dipositAmount.value = "";
    dipositAmount.focus();
  }
});
btnWithdraw.addEventListener("click", function () {
  if (withdrawAmount.value > 0) {
    updateWithdraw();
  } else {
    withdrawAmount.placeholder = "Please enter valid amount!";
    withdrawAmount.value = "";
    withdrawAmount.focus();
  }
});

//functions
function updateDiposit() {
  // 1. get input from dipositAmount
  const getDiposit = parseFloat(dipositAmount.value);

  dipositCurrent.innerText = parseFloat(dipositCurrent.innerText) + getDiposit;
  balanceCurrent.innerText = parseFloat(balanceCurrent.innerText) + getDiposit;
  //add dipositAmount with dipositCurrent
  //add dipositCurrent with balanceCurrent
  //clear string of dipositAmount and keep focus;
  dipositAmount.value = "";
  dipositAmount.placeholder = "Diposit amount";

  dipositAmount.focus();
}
function updateWithdraw() {
  const getWithdraw = parseFloat(withdrawAmount.value);
  withdrawCurrent.innerText =
    parseFloat(withdrawCurrent.innerText) + getWithdraw;

  balanceCurrent.innerText = parseFloat(balanceCurrent.innerText) - getWithdraw;
  withdrawAmount.value = "";
  withdrawAmount.focus();
}
// init
