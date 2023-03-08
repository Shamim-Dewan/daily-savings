function calculateExpense(){
  const income = +document.getElementById("income").value;
  const food = +document.getElementById("food").value;
  const rent = +document.getElementById("rent").value;
  const clothes = +document.getElementById("clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
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
};

function calculateSavings(){
  // calculate saving amount
  const savePercentage = +document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
// calculat result of %
  const income = +document.getElementById("income").value;
  const balance = +document.getElementById("balance").innerText;
  const savingAmount = (savePercentage / 100) * balance;

  // calculate remaining balance
  const remainingBalance = balance - savingAmount;
console.log(remainingBalance);
 
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
    document.getElementById("remaining-balance").innerText = remainingBalance;
  
};
