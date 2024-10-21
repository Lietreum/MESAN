// import React, { useState } from "react";

// interface FeeModalProps {
//   fee: { nominal: number };
//   onSave: (fee: { nominal: number }) => void;
//   onClose: () => void;
// }

// const FeeModal: React.FC<FeeModalProps> = ({ fee, onSave, onClose }) => {
//   const [nominal, setNominal] = useState(fee.nominal);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave({ nominal });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//         <h2 className="text-xl font-semibold mb-4">Add/Edit Fee</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Nominal</label>
//             <input
//               type="number"
//               value={nominal}
//               onChange={(e) => setNominal(Number(e.target.value))}
//               className="border border-gray-300 rounded px-3 py-2 w-full"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeeModal;
