function calculateExpense(){
  const income = +document.getElementById("income").value;
  const food = +document.getElementById("food").value;
  const rent = +document.getElementById("rent").value;
  const clothes = +document.getElementById("clothes").value;
// cheacking income value
  if (
    income < 1 ||
    income == NaN ||
    income == ""
  ) {
    alert("Inputs must be positive numbers");
    return document.getElementById("income").value = "";
  }
  // checking food,rent and clothes value
  if (
    food < 1 || rent < 1 || clothes < 1) {
    alert("Inputs must be positive numbers");
    document.getElementById("food").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("clothes").value = "";

  }
  else{
// calculate expense
const expense = food + rent + clothes;
// calculate balance
const balance = income - expense;
//   validate income
if (expense > income) {
  alert("Expenses cannot be more than income");
} else {
  // view total expense and balance
  document.getElementById("total-expense").innerText = expense;
  document.getElementById("balance").innerText = balance;
}
  }
  
};

function calculateSavings(){
  // calculate saving amount
  const savePercentage = +document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage <= 0 || savePercentage > 100) {
    alert("Provide positive saving value");
    document.getElementById("save").value = "";
  }
  else{
// calculat result of %
const income = +document.getElementById("income").value;
const balance = +document.getElementById("balance").innerText;
const savingAmount = (savePercentage / 100) * balance;

// calculate remaining balance
const remainingBalance = balance - savingAmount;

  // view saving amount and remaining balance
  document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
  document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
