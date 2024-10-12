import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/data/onigiri.png";
import { FaCaravan } from "react-icons/fa";
import axios from "axios";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password_confirmation } = formData;

    if (password !== password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("https://api-mesan.curaweda.com/auth/register", {
        name: `${first_name} ${last_name}`,
        email,
        password,
        role: "USER",
      });

      if (response.status === 200) {
        const { token, refreshToken } = response.data;

        // Store tokens in local storage or cookies
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Registration successful", token);
        console.log("Registration successful", refreshToken);

        // Redirect to the login page or dashboard
        navigate("/login");
      }
    } catch (err) {
      console.error("Registration error", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.error || "Failed to register. Please try again.");
      } else {
        setError("Failed to register. Please try again.");
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Image Section */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="imagelogin"
            src={LoginImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h1 className="mt-6 text-3xl text-center font-extrabold text-black sm:text-4xl">
              Enjoy your time,
            </h1>
            <h2 className="mt-4 text-xl leading-relaxed text-black/90">
              Enjoy your food 😋
            </h2>
          </div>
        </section>

        {/* Form Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Mobile View Header */}
            <div className="relative -mt-16 block lg:hidden text-center">
              <a className="inline-flex items-center justify-center rounded-full bg-white text-blue-600" href="#">
                <FaCaravan size={40} />
              </a>
              <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome to Mesan 👋
              </h1>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We help you order your favorite food from your school canteen,
                cooperation, or any other place you prefer.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-semibold text-gray-800">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-semibold text-gray-800">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>

              {/* Password */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>

              {/* Password Confirmation */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="col-span-6">
                  <p className="text-red-500">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-lg font-semibold text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
