import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Main Section */}
      <main className="bg-[#150002] text-white min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
        <p className="mb-4">Browse the latest collection of products designed for your lifestyle.</p>

        {/* Code Block Section */}
        <section className="bg-black p-6 rounded-lg mb-6 text-white">
          <h2 className="text-2xl font-semibold mb-2">Special Offer</h2>
          <p className="text-lg">Use code <strong>SALE2024</strong> for 20% off!</p>
        </section>

        {/* Customer Review Section */}
        <section className="bg-gray-200 p-6 rounded-lg mb-6 text-black">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p>"Great service and quality!" - Alex</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p>"Loved the products!" - Jamie</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <p>"Will definitely shop again." - Casey</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#150002] text-white p-8">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
              <p className="text-lg">IDR 100,000/month</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
              <p className="text-lg">IDR 300,000/month</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-lg">IDR 500,000/month</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default HomePage;
