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
      console.log("Sending request to backend...");

      const response = await fetch("https://api-mesan.curaweda.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: 'USER'  // Setting role as 'USER'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        const { token, refreshToken } = result;
        console.log("Token:", token);
        console.log("Refresh Token:", refreshToken);

        // Save tokens (consider secure storage or HttpOnly cookies)
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);

        alert("Account created successfully! Please log in.");
      } else {
        setError(result.error || "An error occurred while creating the account.");
      }
    } catch (error) {
      console.error("Failed to connect to the backend:", error);
      setError("Failed to connect to the backend. Please try again later.");
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
              Enjoy your time,
            </h1>
            <h2 className="mt-4 text-xl leading-relaxed text-black/90">
              Enjoy your food 😋
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
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white text-lg text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  required
                />
              </div>

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
              <div className="col-span-6 sm:col-span-3">
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

              {/* Password Confirmation */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="confPassword"
                  value={formData.confPassword}
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
                  {loading ? "Signing up..." : "Create an account"}
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

export default Signup;
