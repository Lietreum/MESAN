import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import LoginImage from "../../assets/data/onigiri.png";
import { FaCaravan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

type LoginFormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:3001/auth/login", {
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
        localStorage.setItem("token", result.accessToken); // Store token in local storage
        navigate("/"); // Or any route you want to navigate to after login
      } else {
        setError(result.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for arise effect
  const ariseVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={ariseVariant}
    >
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="imagelogin"
            src={LoginImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <motion.h1
              className="mt-6 text-3xl text-center font-extrabold text-black sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Welcome Back,
            </motion.h1>
            <motion.h2
              className="mt-4 text-xl leading-relaxed text-black/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Let's get you logged in!
            </motion.h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <motion.div
            className="max-w-xl lg:max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={ariseVariant}
          >
            <div className="relative -mt-16 block lg:hidden text-center">
              <motion.a
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-600"
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaCaravan size={40} />
              </motion.a>
              <motion.h1
                className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Welcome to Mesan 👋
              </motion.h1>
              <motion.p
                className="mt-4 text-gray-500 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                We help you order your favorite food from your school canteen,
                cooperation, or any other place you prefer.
              </motion.p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
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
            </motion.form>

            {/* Signup Link */}
            <motion.p
              className="mt-6 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </motion.p>
          </motion.div>
        </main>
      </div>
    </motion.section>
  );
};

export default Login;
