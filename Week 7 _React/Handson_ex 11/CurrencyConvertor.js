// src/CurrencyConvertor.js
import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    const euroValue = parseFloat(rupees) / 90; // Example: 1 Euro = ₹90
    setEuro(euroValue.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>

      {euro !== null && (
        <p>Converted Amount in Euro: <strong>€{euro}</strong></p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
