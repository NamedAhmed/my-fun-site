let balance = 100;

function buyItem(cost) {
  if (balance >= cost) {
    balance -= cost;
    document.getElementById("balance").innerText = "Balance: $" + balance;
  } else {
    alert("Not enough money!");
  }
}
