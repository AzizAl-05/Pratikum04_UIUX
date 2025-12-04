const VALID_USERNAME = "ahmad2017";
const VALID_PASSWORD = "integrity";

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");

function handleLogin() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (username === "" || password === "") {
    alert("Username dan password tidak boleh kosong.");
    return;
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    alert("Login sukses!");
    window.location.href = "sukses.html";
  } else {
    alert("Login gagal: username atau password salah.");
    passwordInput.value = "";
    passwordInput.focus();
  }
}

btnLogin.addEventListener("click", handleLogin);
passwordInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    handleLogin();
  }
});
