document.addEventListener("DOMContentLoaded", function () {
  let loginButton = document.querySelector(".login-button");
  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    let userName = document.querySelector("[name='username']").value.trim();
    let password = document.querySelector("[name='password']").value.trim();
    if (!userName && !password) {
      alert("Please fill out all fields");
      return;
    }
    let registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    window.open("home.html", "_blank");
  });
});
document
  .querySelector(".login-button")
  .addEventListener("touchstart", function (event) {
    event.preventDefault();
    this.click();
  });
