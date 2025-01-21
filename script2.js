document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  const errorMessage = document.getElementById("error-message");

  if (data.success) {
    localStorage.setItem("loggedInUser", username); // Save the logged-in username
    window.location.href = "./dashboard.html";
  } else {
    errorMessage.textContent = data.message;
    errorMessage.style.color = "red";
  }
});