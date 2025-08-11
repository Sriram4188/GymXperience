import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", formData);
      alert("Registration successful!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <div className="container">
      <h1>Register for SRKR GYM</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
