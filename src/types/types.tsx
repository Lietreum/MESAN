import { ReactNode } from "react";

export interface BreadcrumbProps {
  pageName: string;
}
// Notifiaion
export interface PesananProps  {
  PesananList ?: {
  storeName: string;
  imageUrl: string;
  foodName: string;
  price: string;
  quantity: string;
  orderId: number;
  userId: number;
  storeId: number;
  
  }[];
}

//   C:\Users\User\Desktop\allcode\s\src\components\admin\Product\IncomingOrders.tsx
export interface IncomingOrdersProducts {
  name: string;
  products: string;
  createdAt: string;
  qrT: number;
  status: "Active" | "Suspended" | "Inactive";
}

//   C:\Users\User\Desktop\allcode\s\src\components\admin\Product\Products.tsx
export interface ProductProps {
  sellerName: string;
  productName: string;
  price: string;
  imageUrl: string;
  inStock: boolean;
  onEdit: () => void; // callback function for the Edit button
}

export interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

// C:\Users\User\Desktop\allcode\s\src\components\user\Carousel\Carousel.tsx
export interface BannerItem {
  img: string;
  name: string;
}

export interface CategoryCardProps {
  data: {
    name: string;
    img: string;
  };
}

//  C:\Users\User\Desktop\allcode\s\src\components\user\Header\Favorite.tsx
export interface ProductCardProps {
  image: string;
  productName: string;
  price: number;
}

export interface OrderVerificationProps {
  orderId: string;
  phoneNumber: string;
  totalOrder: number;
  tax: number;
  total: number;
}

// C:\Users\User\Desktop\allcode\s\src\components\user\Header\ShoppingCart.tsx
export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }

  export interface OrderItem {
    id: number;
    image: string;
    title: string;
    color: string;
    price: string;
    quantity: number;
    deliveryDate: string;
    topUpHistory: string[];
  }

//   C:\Users\User\Desktop\allcode\s\src\components\user\ProductList\Card.tsx
 export interface ProductListCard {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
    altText: string;
    type: string;
  }

  export interface SearchBarProps {
    _id: string;
    name: string;
    type: string;
    brand?: string;
    category?: string;
    author?: string;
    description?: string;
    gender?: string;
    image: string;
    className?: string; 

}

export interface AnimatedTextProps {
    text: string;
    variant?: string; // Optional, for different style variants
    style?: React.CSSProperties; // Optional inline styles
    loopCount?: number; // Number of times to loop the animation
  }

  // src/types/types.tsx
export interface ProductCardProps {
  image: string;
  productName: string;
  price: number; // Ubah dari string ke number
}

// Notification 
export interface NotificationProps  {
  PesananList ?: {
  storeName: string;
  imageUrl: string;
  foodName: string;
  price: string;
  quantity: string;
  orderId: number;
  userId: number;
  storeId: number;
  }[];
}

// types.ts
export interface Notification {
  id: number;
  title: string;
  message: string;
  imageUrl?: string; // Gambar opsional
  timestamp: string;
  actions?: NotificationAction[]; // Array action opsional
}

export interface NotificationAction {
  label: string;
  onClick: () => void;
}

export interface NotificationProps {
  notifications: Notification[]; // Array notifikasi
}
