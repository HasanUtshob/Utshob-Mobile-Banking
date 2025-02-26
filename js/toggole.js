document.getElementById("cashout-money").style.display = "none";

document.getElementById("addmoney-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cashout-money").style.display = "none";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cashout-money").style.display = "block";
});
