import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentWaitingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // Timer 1 jam (3600 detik)
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format waktu (jam:menit:detik)
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0'),
    };
  };

  const formattedTime = formatTime(timeLeft);

  // Fungsi untuk handle "Lanjutkan Pembayaran"
  const handleContinuePayment = () => {
    navigate('/payment-success');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-16 pb-8 px-4"> {/* Add padding on the sides */}
      {/* Bagian Countdown */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center border border-gray-300">
        <h1 className="text-2xl font-bold text-black mb-4">Waiting for Payment</h1>
        <p className="text-sm text-gray-600 mb-4">Complete the payment before the time runs out</p>

        {/* Timer */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="bg-gray-100 text-black rounded-lg py-3 px-4 text-center">
            <p className="text-4xl font-bold">{formattedTime.hours}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-gray-100 text-black rounded-lg py-3 px-4 text-center">
            <p className="text-4xl font-bold">{formattedTime.minutes}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="bg-gray-100 text-black rounded-lg py-3 px-4 text-center">
            <p className="text-4xl font-bold">{formattedTime.seconds}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>

        <p className="text-gray-600">To avoid order expiration</p>
      </div>

      {/* Bagian Opsi Pembayaran */}
      <div className="bg-white mt-6 p-4 rounded-lg shadow-md w-full max-w-md border border-gray-300">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png"
            alt="DANA"
            className="w-12 h-12 mr-4"
          />
          <div>
            <p className="text-gray-600 text-sm">E-Wallet</p>
            <p className="text-lg font-bold text-black">DANA</p>
          </div>
        </div>
      </div>

      {/* Tombol Lanjutkan */}
      <div className="mt-6 w-full max-w-md">
        <button
          onClick={handleContinuePayment}
          className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transition-all hover:shadow-lg hover:scale-105"
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentWaitingPage;
