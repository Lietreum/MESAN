import React, { useState } from "react";
import LoginImage from "../../assets/data/onigiri.png";
import { FaCaravan } from "react-icons/fa";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fungsi untuk handle login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);
      window.location.href = '/'; // Redirect ke dashboard setelah login sukses

    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
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
            <h1 className="mt-6 text-2xl justify-center text-center font-bold text-black sm:text-3xl md:text-4xl">
              Enjoy your time,
            </h1>
            <h2 className="mt-4 leading-relaxed text-black/90">
              Enjoy your food 😋
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <FaCaravan size={40} />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Mesan 👋
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                We are a helper here to help you order your favorite food from your
                canteen, cooperation, or any other place you want to order from in school.
              </p>
            </div>

            {/* Form untuk login */}
            <form onSubmit={(e) => void handleSubmit(e)} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
                />
              </div>

              <div className="col-span-6">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>

              {error && (
                <div className="col-span-6">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
