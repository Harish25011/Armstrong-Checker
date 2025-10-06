import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (number === "") {
      setResult("Please enter a number.");
      return;
    }

    const num = parseInt(number);
    const digits = number.split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);

    if (sum === num) {
      setResult(`${num} is an Armstrong number ✅`);
    } else {
      setResult(`${num} is NOT an Armstrong number ❌`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1>Armstrong Number Checker</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />
      <br /><br />
      <button
        onClick={checkArmstrong}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Check
      </button>
      <h2 style={{ marginTop: "20px" }}>{result}</h2>
    </div>
  );
}

export default App;
