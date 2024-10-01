// import Breadcrumb from '../components/admin/Breadcrumbs/Breadcrumb';
// import userThree from '../assets/admin/images/user/user-03.png';

// const Profile = () => {
//   return (
//     <>
//       <div className="mx-auto max-w-screen-lg p-6">
//         <Breadcrumb pageName="Profile" />

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
//           {/* Left Side: Personal Information Form */}
//           <div className="lg:col-span-3 bg-white dark:bg-boxdark border border-stroke dark:border-strokedark rounded-lg shadow p-6">
//             <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
//               Personal Information
//             </h3>
//             <form action="#">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     id="fullName"
//                     className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-meta-4 dark:text-white"
//                     defaultValue="Devid Jhon"
//                   />
//                 </div>
//                 {/* Phone Number */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     id="phoneNumber"
//                     className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-meta-4 dark:text-white"
//                     defaultValue="+990 3343 7865"
//                   />
//                 </div>
//               </div>

//               {/* Email Address */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="emailAddress"
//                   id="emailAddress"
//                   className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-meta-4 dark:text-white"
//                   defaultValue="devidjond45@gmail.com"
//                 />
//               </div>

//               {/* Username */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-meta-4 dark:text-white"
//                   defaultValue="devidjhon24"
//                 />
//               </div>

//               {/* Bio */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                   Bio
//                 </label>
//                 <textarea
//                   name="bio"
//                   id="bio"
//                   rows={6}
//                   className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-meta-4 dark:text-white"
//                   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
//                 ></textarea>
//               </div>

//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   className="py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:shadow-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Side: Profile Picture and Upload */}
//           <div className="lg:col-span-2 bg-white dark:bg-boxdark border border-stroke dark:border-strokedark rounded-lg shadow p-6">
//             <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
//               Your Photo
//             </h3>
//             <div className="flex items-center gap-4 mb-6">
//               <img
//                 src={userThree}
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full object-cover"
//               />
//               <div>
//                 <button className="text-sm text-primary hover:underline">
//                   Update
//                 </button>
//                 <button className="ml-4 text-sm text-red-500 hover:underline">
//                   Delete
//                 </button>
//               </div>
//             </div>

//             <div
//               id="FileUpload"
//               className="relative mb-6 border-2 border-dashed border-primary rounded-lg p-4 cursor-pointer bg-gray-50 dark:bg-meta-4"
//             >
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//               <div className="flex flex-col items-center">
//                 <span className="inline-block bg-white dark:bg-boxdark p-2 rounded-full border border-gray-300 dark:border-strokedark">
//                   {/* SVG Icon */}
//                 </span>
//                 <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
//                   Drag and drop or click to upload
//                 </p>
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                   PNG, JPG, GIF up to 10MB
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 type="button"
//                 className="py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:shadow-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;
