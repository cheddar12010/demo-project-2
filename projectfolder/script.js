
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created!");
    window.location.href = "login.html";
  });
}


const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong username or password");
    }
  });
}


const userDisplay = document.getElementById("userDisplay");
if (userDisplay) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  } else {
    userDisplay.textContent =
      "Logged in as " + localStorage.getItem("username");
  }
}


function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
