import React from "react";
import "./App.css"; // For external styling

function App() {
  // Single object example (optional - just for practice)
  const office = {
    name: "Sky Tower Office",
    rent: 75000,
    address: "MG Road, Bangalore"
  };

  // List of office spaces
  const officeSpaces = [
    {
      id: 1,
      name: "Tech Park One",
      rent: 55000,
      address: "Electronic City, Bangalore",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Skyline Hub",
      rent: 65000,
      address: "Hinjewadi, Pune",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Corporate Heights",
      rent: 90000,
      address: "Cyber City, Gurgaon",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="App">
      {/* JSX Heading */}
      <h1>🏢 Office Space Rental App</h1>

      {/* Single Office Object (optional display) */}
      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: office.rent > 60000 ? "green" : "red" }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      {/* Displaying List */}
      <h2>Available Office Spaces:</h2>
      {officeSpaces.map((item) => (
        <div key={item.id} className="office-card">
          <img src={item.image} alt={item.name} width="150" height="100" />
          <p><strong>Name:</strong> {item.name}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: item.rent > 60000 ? "green" : "red" }}>
              ₹{item.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {item.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
