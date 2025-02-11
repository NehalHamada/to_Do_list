document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.querySelector(".submit-box");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("cpassword").value.trim();
    if (!fname && !lname && !email && !password && !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }
    if (password.length < 8 && confirmPassword.length < 8) {
      alert("Password must contains at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    let user = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password
    };
    localStorage.setItem("registeredUser", JSON.stringify(user)); // مش فاهمه السطر ده
    window.open("index.html", "_blank");
  });
});
document
  .querySelector(".submit-box")
  .addEventListener("touchstart", function (event) {
    event.preventDefault();
    this.click();
  });
document.getElementById("password").addEventListener("focus", function () {
  this.type = "password";
});
document.getElementById("cpassword").addEventListener("focus", function () {
  this.type = "password";
});
document.getElementById("password").style.webkitTextSecurity = "disc";
document.getElementById("cpassword").style.webkitTextSecurity = "disc";
