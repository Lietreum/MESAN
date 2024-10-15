import React, { useState } from "react";
import LoginImage from "../../assets/data/onigiri.png";
import { FaCaravan } from "react-icons/fa";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  confPassword: string;
};

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate passwords
    if (formData.password !== formData.confPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Ensure email validation according to backend logic
    if (!formData.email.endsWith('.siswa@smkn4bdg.sch.id')) {
      setError("You must use a valid school email.");
      return;
    }

    try {
      setLoading(true);
      console.log("Sending request...");

      const response = await fetch("https://api-mesan.curaweda.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // User registered successfully
        alert("Account created successfully! Please log in.");
      } else {
        setError(result.message || "An error occurred while creating the account.");
      }
    } catch (error) {
      console.error("Failed to connect to the backend:", error);
      setError("Failed to connect to the backend. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confPassword"
          value={formData.confPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
