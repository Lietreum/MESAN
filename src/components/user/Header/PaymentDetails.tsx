import React from "react";
import { Barcode, Clipboard } from "lucide-react";

const PaymentDetails: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Indomaret</h1>
      </header>

      {/* Huge Card for Saldo */}
      <div className="rounded-xl bg-black shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Jumlah Isi Saldo
        </h3>
        <div className="mb-4">
          <input
            type="text"
            value="Rp 20,000"
            readOnly
            className="w-full p-4 text-2xl font-bold text-gray-800 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>{" "}
        <div className="text-sm text-white">Biaya Admin: Rp 1,000</div>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Card 2 for Payment Details */}
      <div className="rounded-xl bg-black shadow-md p-6 mb-6 text-center">
        <h3 className="text-lg font-semibold text-white mb-4">
          You Will Pay For
        </h3>
        <div className="text-2xl font-bold text-white mb-4">Rp 21,000</div>
        <div className="text-sm text-white mb-4">
          Saldo Balance + Admin Biaya Fee
        </div>
        <div className="text-sm text-white mb-4">Show This Code</div>

        {/* QR Code */}
        <div className="bg-gray-100 h-32 w-full mb-4 flex items-center justify-center">
        <Barcode className="w-12 h-12 text-gray-800" />
        </div>

        {/* QR Code Number */}
        <div className="text-xl font-bold text-white mb-4">
          9999 9457 4682 5
        </div>

        {/* Copy Code Card */}
        <button className="bg-gray-800 text-white rounded-full flex justify-center overflow-hidden ">
          <Clipboard className="mr-2" />
          Copy Code
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
