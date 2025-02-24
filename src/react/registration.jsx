import { useState } from "react";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    console.log("Form Data:", formData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "8px" }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
