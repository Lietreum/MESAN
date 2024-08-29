// import { Slide } from "@mui/material";
// import axios from "axios";
// import { forwardRef, Ref } from "react";
// import { NavigateFunction } from 'react-router-dom';

// interface SetState<T> {
//   (value: T): void;
// }

// interface Product {
//   _id: string;
//   name: string;
//   // Add other fields as necessary
// }

// interface Cart {
//   // Define the structure of Cart items
// }

// interface WishlistItem {
//   // Define the structure of Wishlist items
// }

// interface HandleLogOutParams {
//   setProceed: boolean;
//   toast: typeof toast;
//   navigate: NavigateFunction;
//   setOpenAlert: SetState<boolean>;
// }

// const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// const getCart = async (
//   setProceed: boolean,
//   setCart: SetState<Cart[]>,
//   authToken: string
// ) => {
//   if (setProceed) {
//     const { data } = await axios.get<Cart[]>(
//       `${API_BASE_URL}/cart`,
//       {
//         headers: {
//           'Authorization': authToken,
//         },
//       }
//     );
//     setCart(data);
//   }
// };

// const getWishList = async (
//   setProceed: boolean,
//   setWishlistData: SetState<WishlistItem[]>,
//   authToken: string
// ) => {
//   if (setProceed) {
//     const { data } = await axios.get<WishlistItem[]>(
//       `${API_BASE_URL}/wishlist`,
//       {
//         headers: {
//           'Authorization': authToken,
//         },
//       }
//     );
//     setWishlistData(data);
//   }
// };

// const handleLogOut = (
//   { setProceed, toast, navigate, setOpenAlert }: HandleLogOutParams
// ) => {
//   if (setProceed) {
//     localStorage.removeItem('Authorization');
//     toast.success("Logout Successfully", { autoClose: 500, theme: 'colored' });
//     navigate('/');
//     setOpenAlert(false);
//   } else {
//     toast.error("User is already logged off", { autoClose: 500, theme: 'colored' });
//   }
// };

// const handleClickOpen = (setOpenAlert: SetState<boolean>) => {
//   setOpenAlert(true);
// };

// const handleClose = (setOpenAlert: SetState<boolean>) => {
//   setOpenAlert(false);
// };

// const getAllProducts = async (setData: SetState<Product[]>) => {
//   try {
//     const { data } = await axios.get<Product[]>(`${API_BASE_URL}/products`);
//     setData(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getSingleProduct = async (
//   setProduct: SetState<Product>,
//   id: string,
//   setLoading: SetState<boolean>
// ) => {
//   const { data } = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
//   setProduct(data);
//   setLoading(false);
// };

// const Transition = forwardRef(function Transition(
//   props: any, 
//   ref: Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export { getCart, getWishList, handleClickOpen, handleClose, handleLogOut, getAllProducts, getSingleProduct, Transition };
