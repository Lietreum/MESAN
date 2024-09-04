import React, { useState } from 'react';
import QRCode from 'qrcode';

type OrderVerificationProps = {
  orderId: string;
  phoneNumber: string;
  totalOrder: number;
  tax: number;
  total: number;
};

const OrderVerification: React.FC<OrderVerificationProps> = ({ orderId, phoneNumber, totalOrder, tax, total }) => {
  const [src, setSrc] = useState<string>('');

  const generate = () => {
    const qrData = `Order ID: ${orderId}\nPhone Number: ${phoneNumber}\nTotal Order: ${totalOrder}\nTax: ${tax}\nTotal: ${total}`;
    QRCode.toDataURL(qrData).then(setSrc);
  };

  React.useEffect(() => {
    generate(); 
  }, [orderId, phoneNumber, totalOrder, tax, total]);

  return (
    <div className="order-verification">
      {src && <img src={src} alt="QR Code" />}
    </div>
  );
};

export default OrderVerification;

// you can use this code to test the component for fetching data
// import QRCode from 'qrcode';
// import axios from 'axios';

// const OrderVerification: React.FC = () => {
//   const [orderId, setOrderId] = useState<string>('');
//   const [phoneNumber, setPhoneNumber] = useState<string>('');
//   const [totalOrder, setTotalOrder] = useState<number>(0);
//   const [tax, setTax] = useState<number>(0);
//   const [total, setTotal] = useState<number>(0);
//   const [src, setSrc] = useState<string>('');

//   // Function to fetch order details from an API
//   const fetchOrderDetails = async () => {
//     try {
//       const response = await axios.get('/api/order-details'); // Replace with your API endpoint
//       const data = response.data;

//       // Update state with fetched data
//       setOrderId(data.orderId);
//       setPhoneNumber(data.phoneNumber);
//       setTotalOrder(data.totalOrder);
//       setTax(data.tax);
//       setTotal(data.total);
//     } catch (error) {
//       console.error('Error fetching order details:', error);
//     }
//   };

//   // Function to generate QR code based on current order details
//   const generateQRCode = () => {
//     const qrData = `Order ID: ${orderId}\nPhone Number: ${phoneNumber}\nTotal Order: ${totalOrder}\nTax: ${tax}\nTotal: ${total}`;
//     QRCode.toDataURL(qrData).then(setSrc);
//   };

//   // Fetch order details and generate QR code when component mounts
//   useEffect(() => {
//     fetchOrderDetails();
//   }, []);

//   // Regenerate QR code when order details change
//   useEffect(() => {
//     if (orderId && phoneNumber && totalOrder >= 0 && tax >= 0 && total >= 0) {
//       generateQRCode();
//     }
//   }, [orderId, phoneNumber, totalOrder, tax, total]);

//   return (
//     <div className="order-verification">
//       <div className="order-details">
//         <p>Order ID: {orderId}</p>
//         <p>Phone Number: {phoneNumber}</p>
//         <p>Total Order: ${totalOrder.toFixed(2)}</p>
//         <p>Tax: ${tax.toFixed(2)}</p>
//         <p>Total: ${total.toFixed(2)}</p>
//       </div>
//       {src && <img src={src} alt="QR Code" />}
//     </div>
//   );
// };

// export default OrderVerification;
