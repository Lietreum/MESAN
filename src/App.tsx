import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./components/common/Loader";
import PageTitle from "./components/admin/PageTitle";
import AdminLayout from "./layouts/pedagang/AdminLayout";
import UserLayout from "./layouts/siswa/UserLayout";
import ECommerce from "./pages/admin/Dashboard/Dashboard";
import UserDashboard from "./pages/siswa/Homepage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/auth/Signup";
import Product from "./pages/admin/Product/ProductCard";
import Messages from "./components/admin/Messages/Messages";
import ProductList from "./components/user/ProductList/ProductList";
import TransactionHistory from "./components/user/Header/TransactionHistory";
import MessagesUser from "./components/user/Header/Messages";
import ShoppingCart from "./components/user/Header/ShoppingCart";
import Favorite from "./components/user/Header/Favorite";
import OverlayCard from "./components/user/Header/OverlayCard";
import IncomingOrders from "./components/admin/Product/IncomingOrders";
import StockNotification from "./components/admin/Product/StockNotification";
import QRAdmin from "./components/admin/Product/QRAdmin";
import Notification from "./components/user/Notification/OrderNotification";
import PaymentOptions from "./components/user/Header/PaymentOptions";
import PaymentDetails from "./components/user/Header/PaymentDetails";
import KasirLayout from "./layouts/kasir/KasirLayout";
import HomeKasir from "./pages/kasir/DashboardKasir";

function App() {
  // vercel analytics start
  // inject();
  // injectSpeedInsights();
  // vercel analytics end

  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/kasir"
          element={
            <KasirLayout>
              <PageTitle title="Kasir Dashboard" />
              <HomeKasir />
            </KasirLayout>
          }
        />
        {/* Public Routes - User Dashboard */}
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
              <PageTitle title="User Notification" />
              <PaymentOptions />
            </UserLayout>
          }
        />
        <Route
          path="/PaymentDetailsPlchold"
          element={
            <UserLayout>
              <PageTitle title="User Notification" />
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
              <PageTitle title="qrscanplaceholder" />
              <OverlayCard />
            </UserLayout>
          }
        />
        <Route
          path="/messages"
          element={
            <UserLayout>
              <PageTitle title="messages" />
              <MessagesUser />
            </UserLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <PageTitle title="Admin Dashboard | Koperasi" />
              <ECommerce />
            </AdminLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/product"
          element={
            <AdminLayout>
              <PageTitle title="Product | Koperasi" />
              <Product />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/incoming-orders"
          element={
            <AdminLayout>
              <PageTitle title="Incoming Orders | Koperasi" />
              <IncomingOrders />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/stock-notification"
          element={
            <AdminLayout>
              <PageTitle title="Stock Notification | Koperasi" />
              <StockNotification />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/qrscanplaceholder"
          element={
            <AdminLayout>
              <PageTitle title=" QRScan Admin | Koperasi" />
              <QRAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <AdminLayout>
              <PageTitle title="Profile" />
              <Profile />
            </AdminLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <AdminLayout>
              <PageTitle title="Settings" />
              <Settings />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <AdminLayout>
              <PageTitle title="Admin Dashboard | Koperasi" />
              <Messages />
            </AdminLayout>
          }
        />
        {/* Authentication Routes */}
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login" />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <Signup />
            </>
          }
        />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
