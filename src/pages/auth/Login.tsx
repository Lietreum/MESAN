import React, { useState } from "react";
import LoginImage from "../../assets/data/onigiri.png";
import { FaCaravan } from "react-icons/fa";

type LoginFormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
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
  
    try {
      setLoading(true);
      console.log("Sending request to backend...");
  
      const response = await fetch("https://api-mesan.curaweda.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        const { Token } = result;
        console.log("Token:", Token);
  
        // Save tokens securely in localStorage
        localStorage.setItem("token", Token);
  
        alert("Login successful!");
        // Redirect user to the desired page
      } else {
        setError(result.message || "An error occurred while logging in.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="imagelogin"
            src={LoginImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h1 className="mt-6 text-3xl text-center font-extrabold text-black sm:text-4xl">
              Welcome Back,
            </h1>
            <h2 className="mt-4 text-xl leading-relaxed text-black/90">
              Let's get you logged in!
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden text-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-600"
                href="#"
              >
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

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              {/* Email */}
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  required
                />
              </div>

              {/* Password */}
              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-lg font-semibold text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </div>

              {error && <p className="col-span-6 text-red-500">{error}</p>}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
