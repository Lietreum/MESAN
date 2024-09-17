import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/user/UserLayout";
import UserDashboard from "../pages/user/Homepage";
import ProductList from "../components/user/ProductList/ProductList";
import TransactionHistory from "../components/user/Header/TransactionHistory";
import { Favorite } from "@mui/icons-material";
import { ShoppingCart } from "lucide-react";
import PageTitle from "../components/admin/PageTitle";
import OverlayCard from "../components/user/Header/OverlayCard";
import PaymentDetails from "../components/user/Header/PaymentDetails";
import PaymentOptions from "../components/user/Header/PaymentOptions";
import Notification from "../components/user/Header/Notification";

const UserRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <UserLayout>
          <PageTitle title="User Dashboard" />
          <UserDashboard />
        </UserLayout>
      }
    />
    <Route
      path="/product/type/:type"
      element={
        <UserLayout>
          <PageTitle title="Product List" />
          <ProductList />
        </UserLayout>
      }
    />
    <Route
      path="/transactionhistory"
      element={
        <UserLayout>
          <PageTitle title="Transaction History" />
          <TransactionHistory />
        </UserLayout>
      }
    />
    <Route
      path="/cart"
      element={
        <UserLayout>
          <PageTitle title="Cart" />
          <ShoppingCart />
        </UserLayout>
      }
    />
    <Route
      path="/notifications"
      element={
        <UserLayout>
          <PageTitle title="User Notification" />
          <Notification />
        </UserLayout>
      }
    />
    <Route
      path="/TopupPlacehold"
      element={
        <UserLayout>
          <PageTitle title="Payment Options" />
          <PaymentOptions />
        </UserLayout>
      }
    />
    <Route
      path="/PaymentDetailsPlchold"
      element={
        <UserLayout>
          <PageTitle title="Payment Details" />
          <PaymentDetails />
        </UserLayout>
      }
    />
    <Route
      path="/Favorites"
      element={
        <UserLayout>
          <PageTitle title="Favorite" />
          <Favorite />
        </UserLayout>
      }
    />
    <Route
      path="/qrscanplaceholder"
      element={
        <UserLayout>
          <PageTitle title="QR Scan" />
          <OverlayCard />
        </UserLayout>
      }
    />
  </Routes>
);

export default UserRoutes;
