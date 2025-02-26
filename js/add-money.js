document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("input-amount").value;
    const convertAmount = parseFloat(amount);
    const accNumber = document.getElementById("account-number").value;
    const accPin = document.getElementById("pin-number").value;
    const convertAccPin = parseInt(accPin);
    let mainBalance = document.getElementById("main-balance");
    const convertaccbalance = parseFloat(mainBalance.innerText);

    if (accNumber.length === 11) {
      if (convertAccPin === 1234) {
        let sum = convertAmount + convertaccbalance;
        mainBalance.innerText = sum.toFixed(2);
        alert("Balance Successfully Updated");
      } else {
        alert("Enter Valid Pin Number");
      }
    } else {
      alert("Enter Valid Account Number");
    }
  });
