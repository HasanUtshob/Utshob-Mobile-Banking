document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("cashout-amount").value;
    const convertAmount = parseFloat(amount);
    const accNumber = document.getElementById("acc-number").value;
    const accPin = document.getElementById("accpin-number").value;
    const convertAccPin = parseInt(accPin);
    let mainBalance = document.getElementById("main-balance");
    const convertaccbalance = parseFloat(mainBalance.innerText);

    if (accNumber.length === 11) {
      if (convertAccPin === 1234) {
        let sub = convertaccbalance - convertAmount;
        mainBalance.innerText = sub.toFixed(2);
        alert("Balance Successfully Updated");
      } else {
        alert("Enter Valid Pin Number");
      }
    } else {
      alert("Enter Valid Account Number");
    }
  });
