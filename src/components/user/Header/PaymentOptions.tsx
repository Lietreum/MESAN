import React from 'react';
import { Plus, ChevronDown, Wallet, CreditCard, ShoppingCart, DollarSign } from 'lucide-react';

const PaymentOptions: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Topup</h1>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">Kartu Pembayaran Saya</h3>
      </header>

      {/* Card Section */}
      <div className="rounded-xl bg-white shadow-md p-4 mb-6 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Plus className="text-gray-800" />
            </div>
            <h3 className="text-gray-800 text-lg font-bold">Kartu Baru</h3>
          </div>
          <ChevronDown className="text-gray-500" />
        </div>
      </div>

      {/* E-Wallet Section */}
      <div className="rounded-xl bg-white shadow-md p-4 mb-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-4">E - Wallet</h4>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Wallet className="text-gray-800 h-8 w-8" />
            <span className="text-gray-800">Gopay</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="text-gray-800 h-8 w-8" />
            <span className="text-gray-800">OVO</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="text-gray-800 h-8 w-8" />
            <span className="text-gray-800">Dana</span>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div className="rounded-xl bg-white shadow-md p-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-4">AGEN</h4>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="text-gray-800 h-8 w-8" />
            <span className="text-gray-800">Indomaret</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="text-gray-800 h-8 w-8" />
            <span className="text-gray-800">Alfamart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
