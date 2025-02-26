document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let accountNumber = document.getElementById("account-number").value;
    let pinNumber = document.getElementById("pin-number").value;
    let convertedAccNum = parseInt(accountNumber);
    let convertedAccPin = parseInt(pinNumber);

    if (accountNumber.length === 11) {
      if (convertedAccPin === 1234) {
        window.location.href = "main.html";
      } else {
        alert("Enter Valid Pin");
      }
    } else {
      alert("Enter Valid Account Number");
    }
  });
