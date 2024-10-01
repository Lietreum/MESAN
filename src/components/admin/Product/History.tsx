import React from 'react';

interface HistoryRecord {
  type: string;
  merchantName: string;
  withdrawnAmount: string;
  date: string;
  status: string;
}

const historyData: HistoryRecord[] = [
  { type: '', merchantName: 'Bu Kosim', withdrawnAmount: 'Rp. 75.000', date: '16 September 2024', status: 'Success' },
  { type: '', merchantName: 'Bu Kosim', withdrawnAmount: 'Rp. 75.000', date: '16 September 2024', status: 'Failed' },
  { type: '', merchantName: 'Bu Kosim', withdrawnAmount: 'Rp. 75.000', date: '16 September 2024', status: 'Pending' },
  // Add more data as needed
];

const History: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-md w-full shadow-lg">
      <div className="flex items-center justify-between pb-6 border-b-2 border-gray-300">
        <h2 className="text-gray-700 font-bold text-3xl">History</h2>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Merchant Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Withdrawn Amount</th>
                <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {historyData.map((record, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition duration-200 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap">{record.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.merchantName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.withdrawnAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full font-semibold text-sm ${
                        record.status === 'Success'
                          ? 'bg-green-100 text-green-800'
                          : record.status === 'Failed'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-gray-50 border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-600">Showing 1 to {historyData.length} of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-600 transition duration-150 hover:bg-indigo-100 border border-indigo-600 font-semibold py-2 px-4 rounded-l">Prev</button>
              <button className="text-sm text-indigo-600 transition duration-150 hover:bg-indigo-100 border border-indigo-600 font-semibold py-2 px-4 rounded-r">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
