const express = require("express");
const path = require("path");
const users = require("./data/users.json");

const app = express();

// Middleware
app.use(express.json()); // Use built-in body-parser
app.use(express.static(path.join(__dirname, "../frontend")));

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials." });
  }
});

// Fetch user credit score
app.get("/credit-score/:username", (req, res) => {
  const { username } = req.params;
  const user = users.find((u) => u.username === username);

  if (user) {
    res.json({ creditScore: user.creditScore });
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

// Loan Calculation Route
app.post("/loan", (req, res) => {
  const { salary, collateral } = req.body;

  // Validate input
  if (!salary || !collateral) {
    return res
      .status(400)
      .json({ success: false, message: "Salary and collateral are required." });
  }

  const loanAmount = 0.4 * salary + 0.5 * collateral;
  const rangeDelta = loanAmount * 0.2;

  res.json({
    maxEligibleAmount: loanAmount + rangeDelta,
    message: `You are eligible for a loan ranging from ₹${(loanAmount - rangeDelta).toFixed(
      2
    )} to ₹${(loanAmount + rangeDelta).toFixed(2)}.`,
  });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
