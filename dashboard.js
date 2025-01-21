let currentLoan = null;
let creditScore = 750; // Mock initial credit score

// Fetch user credit score
document.addEventListener("DOMContentLoaded", async () => {
  const username = localStorage.getItem("loggedInUser");
  const creditScoreElement = document.getElementById("credit-score");

  try {
    const response = await fetch(`http://localhost:5000/credit-score/${username}`);
    const data = await response.json();

    if (response.ok) {
      creditScore = data.creditScore;
      creditScoreElement.innerHTML = `
        <p>Your Credit Score: <strong>${data.creditScore}</strong></p>
      `;
    } else {
      creditScoreElement.innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    console.error("Error fetching credit score:", error);
    creditScoreElement.innerHTML = `<p>Unable to load credit score. Try again later.</p>`;
  }
});

// Handle loan eligibility and schemes
document.getElementById("loan-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const salary = document.getElementById("salary").value;
  const collateral = document.getElementById("collateral").value;

  try {
    const response = await fetch("http://localhost:5000/loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ salary, collateral }),
    });

    const data = await response.json();
    console.log("Loan response:", data); // Debugging
    document.getElementById("loan-result").innerText = data.message;

    // Display loan schemes
    const loanSchemesDiv = document.getElementById("loan-schemes");
    loanSchemesDiv.innerHTML = `
      <h3>Loan Schemes</h3>
      <p>Select a scheme and enter loan amount:</p>
      <select id="loan-category">
        <option value="home-loan">Home Loan - 7% interest</option>
        <option value="personal-loan">Personal Loan - 10% interest</option>
        <option value="car-loan">Car Loan - 8% interest</option>
      </select>
      <label for="loan-amount">Enter Loan Amount:</label>
      <input type="number" id="loan-amount" required>
      <button id="apply-loan">Apply for Loan</button>
      <p id="loan-status"></p>
    `;

    // Handle loan application
    document.getElementById("apply-loan").addEventListener("click", () => {
      const loanAmount = parseFloat(document.getElementById("loan-amount").value);
      const loanCategory = document.getElementById("loan-category").value;
      const maxEligibleAmount = data.maxEligibleAmount;

      if (loanAmount > maxEligibleAmount) {
        document.getElementById("loan-status").innerText = "Error: Loan amount exceeds eligibility.";
        return;
      }

      currentLoan = {
        amount: loanAmount,
        interestRate: loanCategory === "home-loan" ? 0.07 : loanCategory === "personal-loan" ? 0.1 : 0.08,
        paidBack: 0,
        status: "Active",
      };

      const emi = (loanAmount * (1 + currentLoan.interestRate)) / 12;
      document.getElementById("loan-status").innerHTML = `
        Loan Approved! Your EMI: ₹${emi.toFixed(2)}/month.
      `;

      updateTracker();
    });
  } catch (error) {
    console.error("Error calculating loan:", error);
    document.getElementById("loan-result").innerText = "Error calculating loan.";
  }
});

// Update loan tracker
function updateTracker() {
  const trackerDiv = document.getElementById("loan-history");

  if (currentLoan) {
    trackerDiv.innerHTML = `
      <p>Loan Taken: ₹${currentLoan.amount.toFixed(2)}</p>
      <p>Paid Back: ₹${currentLoan.paidBack.toFixed(2)}</p>
      <p>Pending Amount: ₹${(currentLoan.amount - currentLoan.paidBack).toFixed(2)}</p>
    `;
  }
}
