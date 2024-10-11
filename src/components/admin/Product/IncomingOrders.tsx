import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Order = {
  orderNo: string;
  customerName: string;
  products: { name: string; quantity: number; price: number }[];
  notes: string[];
  status: 'Coming Order' | 'In Progress' | 'Waiting To Pick Up' | 'Done';
};

const incomingOrdersData: Order[] = [
  {
    orderNo: '88213',
    customerName: 'Azka D.A',
    products: [
      { name: 'Nasi Kuning', quantity: 1, price: 6000 },
      { name: 'Kopi', quantity: 2, price: 6000 },
    ],
    notes: ['jangan pakai sambal', 'Kapal api dan good day'],
    status: 'Coming Order',
  },
];

const IncomingOrders: React.FC = () => {
  const [incomingOrders, setIncomingOrders] = useState(incomingOrdersData);
  const [selectedTab, setSelectedTab] = useState<'Coming Order' | 'In Progress' | 'Waiting To Pick Up' | 'Done'>(
    'Coming Order'
  );
  const navigate = useNavigate();

  const handleConfirm = (orderNo: string) => {
    setIncomingOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.orderNo === orderNo) {
          if (order.status === 'Coming Order') {
            setSelectedTab('In Progress');
            return { ...order, status: 'In Progress' };
          }
          if (order.status === 'In Progress') {
            setSelectedTab('Waiting To Pick Up');
            return { ...order, status: 'Waiting To Pick Up' };
          }
          if (order.status === 'Waiting To Pick Up') {
            setSelectedTab('Done');
            return { ...order, status: 'Done' };
          }
        }
        return order;
      })
    );
  };

  const handleDoneClick = (orderNo: string) => {
    setIncomingOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.orderNo === orderNo && order.status === 'Done') {
          navigate('/pedagang/qrscanplaceholder');
        }
        return order;
      })
    );
  };

  return (
    <div className="bg-[#0e1726] p-8 rounded-md w-full text-white">
      <div className="pb-6">
        <h2 className="text-white font-semibold text-lg">Incoming Orders</h2>
      </div>
      <div className="flex space-x-4 mb-4">
        {['Coming Order', 'In Progress', 'Waiting To Pick Up', 'Done'].map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab as Order['status'])}
            className={`${
              selectedTab === tab ? 'text-black bg-white' : 'text-white'
            } px-4 py-2 rounded-md font-semibold`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-[#1a2230] rounded-lg overflow-hidden shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="p-4">No. Order</th>
              <th className="p-4">Name Customer</th>
              <th className="p-4">Product</th>
              <th className="p-4">Subtotal</th>
              <th className="p-4">Notes</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {incomingOrders
              .filter((order) => order.status === selectedTab)
              .map((order) => {
                const subtotal = order.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
                return (
                  <tr key={order.orderNo} className="border-t border-gray-700">
                    <td className="p-4">{order.orderNo}</td>
                    <td className="p-4">{order.customerName}</td>
                    <td className="p-4">
                      {order.products.map((product, index) => (
                        <div key={index}>
                          {product.name} {product.quantity}x
                        </div>
                      ))}
                    </td>
                    <td className="p-4">Rp.{subtotal.toLocaleString('id-ID')}</td>
                    <td className="p-4">
                      {order.notes.map((note, index) => (
                        <div key={index}>{note}</div>
                      ))}
                    </td>
                    <td className="p-4">
                      {order.status !== 'Done' ? (
                        <button
                          onClick={() => handleConfirm(order.orderNo)}
                          className="bg-blue-500 px-4 py-2 rounded text-white transform transition-transform duration-200 ease-in-out hover:scale-110"
                        >
                          Confirm
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDoneClick(order.orderNo)}
                          className="bg-green-500 px-4 py-2 rounded text-white transform transition-transform duration-200 ease-in-out hover:scale-110"
                        >
                          Done
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            {incomingOrders.filter((order) => order.status === selectedTab).length > 0 && (
              <tr className="border-t border-gray-700">
                <td colSpan={3} className="p-4 font-semibold text-right">
                  Total :
                </td>
                <td className="p-4 font-semibold">
                  Rp.
                  {incomingOrders
                    .filter((order) => order.status === selectedTab)
                    .reduce(
                      (acc, order) =>
                        acc + order.products.reduce((sum, product) => sum + product.price * product.quantity, 0),
                      0
                    )
                    .toLocaleString('id-ID')}
                </td>
                <td colSpan={2}></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomingOrders;
