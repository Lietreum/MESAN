// src/components/ProductOrderTable.tsx

import React from 'react';

// Define the type for the product order
interface ProductOrder {
  name: string;
  products: string;
  createdAt: string;
  qrT: number;
  status: 'Active' | 'Suspended' | 'Inactive';
}

// Example data
const productOrders: ProductOrder[] = [
  {
    name: 'Vera Carpenter',
    products: 'Admin',
    createdAt: 'Jan 21, 2020',
    qrT: 43,
    status: 'Active',
  },
  {
    name: 'Blake Bowman',
    products: 'Editor',
    createdAt: 'Jan 01, 2020',
    qrT: 77,
    status: 'Active',
  },
  {
    name: 'Dana Moore',
    products: 'Editor',
    createdAt: 'Jan 10, 2020',
    qrT: 64,
    status: 'Suspended',
  },
  {
    name: 'Alonzo Cox',
    products: 'Admin',
    createdAt: 'Jan 18, 2020',
    qrT: 70,
    status: 'Inactive',
  },
];

const IncomingOrders: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Products Order</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input className="bg-gray-50 outline-none ml-1 block" type="text" placeholder="search..." />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
          </div>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Products</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">QRT</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {productOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        {/* Replace with your image or dynamic data */}
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt={order.name} />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{order.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{order.products}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{order.createdAt}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{order.qrT}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className={`relative inline-block px-3 py-1 font-semibold text-${order.status === 'Active' ? 'green' : order.status === 'Suspended' ? 'orange' : 'red'}-900 leading-tight`}>
                      <span aria-hidden className={`absolute inset-0 bg-${order.status === 'Active' ? 'green' : order.status === 'Suspended' ? 'orange' : 'red'}-200 opacity-50 rounded-full`}></span>
                      <span className="relative">{order.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">Prev</button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingOrders;
