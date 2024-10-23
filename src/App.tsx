import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import ProtectedRoute from "./components/protect/Protected";
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
// import ProductList from "./components/user/ProductList/ProductList";
import TransactionHistory from "./components/user/Header/TransactionHistory";
import MessagesUser from "./components/user/Header/Messages";
import ShoppingCart from "./components/user/Header/ShoppingCart";
import Favorite from "./components/user/Header/Favorite";
import OverlayCard from "./components/user/Header/OverlayCard";
import IncomingOrders from "./components/admin/Product/IncomingOrders";
import StockNotification from "./components/admin/Product/StockNotification";
import QRAdmin from "./components/admin/Product/QRAdmin";
import Notification from "./components/user/Notification/Notification";
import PaymentOptions from "./components/user/Header/PaymentOptions";
import PaymentDetails from "./components/user/Header/PaymentDetails";
import KasirLayout from "./layouts/kasir/KasirLayout";
import HomeKasir from "./pages/kasir/DashboardKasir";
import KasirTopup from "./pages/kasir/Topup/KasirTopup";
import ManageAccount from "./pages/admin/ManageAccount";
import Withdrawal from "./pages/kasir/Withdrawal/Withdrawal";
import BalanceWithdrawal from "./pages/kasir/Withdrawal/BalanceWithdrawal";
import HistoryKasir from "./pages/kasir/History/HistoryKasir";
import AddProductPage from "./pages/admin/Product/AddProduct";
import ProfilePage from "./components/user/Profile/Profile";
import WalletSiswa from "./pages/siswa/walletdashboard/WalletSiswa";
import Order from "./pages/siswa/orderstatus/Order";
import OrderStatus from "./pages/siswa/orderstatus/OrderStatus";
import PaymentCountdownPage from "./components/user/Header/PaymentCountdown";
import OrderItem from "./components/user/NotificationOrder/percobaannotifikasi";
import NotAuthorized from "./pages/auth/NotAuthorized";
import KasirPageProducts from "./pages/kasir/StoreKasir/KasirPageProducts";
import StorePages from "./components/user/ProductList/StorePages";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            // <ProtectedRoute allowedRoles={["USER"]}>
              <UserLayout>
                <PageTitle title="User Dashboard" />
                <UserDashboard />
              </UserLayout>
            // </ProtectedRoute>
          }
        />

        <Route
          path="/product/type/:type"
          element={
            <UserLayout>
              <PageTitle title="Product List" />
              <StorePages />
            </UserLayout>
          }
        />

        <Route
          path="/kasir/product/type/:type"
          element={
            <KasirLayout>
              <PageTitle title="Product List" />
              <KasirPageProducts />
            </KasirLayout>
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
          path="/kasir/ManageAccounts"
          element={
            <KasirLayout>
              <PageTitle title="Manage Accounts | Kasir" />
              <ManageAccount />
            </KasirLayout>
          }
        />
        <Route
          path="/kasir/history"
          element={
            <KasirLayout>
              <PageTitle title="Transaction History | Kasir" />
              <HistoryKasir />
            </KasirLayout>
          }
        />
        <Route
          path="/kasir/withdrawal"
          element={
            <KasirLayout>
              <PageTitle title="Transaction History | Kasir" />
              <Withdrawal />
            </KasirLayout>
          }
        />

        <Route
          path="/kasir/balancewithdrawal/:id"
          element={
            <KasirLayout>
              <PageTitle title="Edit Withdrawal" />
              <BalanceWithdrawal />
            </KasirLayout>
          }
        />

        <Route
          path="/kasir/Topup"
          element={
            <KasirLayout>
              <PageTitle title="Topup" />
              <KasirTopup />
            </KasirLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <UserLayout>
              <PageTitle title="Carts" />
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
          path="/Countdown"
          element={
            <UserLayout>
              <PageTitle title=" Payment Countdown " />
              <PaymentCountdownPage />
            </UserLayout>
          }
        />
        <Route
          path="/PaymentDetailsPlchold"
          element={
            <UserLayout>
              <PageTitle title=" Payment Details " />
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
        <Route
          path="/profile-page"
          element={
            <UserLayout>
              <PageTitle title="ProfilePage" />
              <ProfilePage />
            </UserLayout>
          }
        />
        <Route
          path="/orders/:userId"
          element={
            <UserLayout>
              {<OrderItem />}
              <PageTitle title="User Orders" />
            </UserLayout>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/merchant"
          element={
            // <ProtectedRoute allowedRoles={['MERCHANT']}>
            <AdminLayout>
              <PageTitle title="Pedagang Dashboard | Koperasi" />
              <ECommerce />
            </AdminLayout>
            //  </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/pedagang/product"
          element={
            <AdminLayout>
              <PageTitle title="Product | Koperasi" />
              <Product />
            </AdminLayout>
          }
        />
        <Route
          path="/pedagang/incoming-orders"
          element={
            <AdminLayout>
              <PageTitle title="Incoming Orders | Koperasi" />
              <IncomingOrders />
            </AdminLayout>
          }
        />

        <Route
          path="/pedagang/stock-notification"
          element={
            <AdminLayout>
              <PageTitle title="Stock Notification | Koperasi" />
              <StockNotification />
            </AdminLayout>
          }
        />
        <Route
          path="/pedagang/qrscanplaceholder"
          element={
            <AdminLayout>
              <PageTitle title=" QRScan Admin | Koperasi" />
              <QRAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/pedagang/profile"
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
          path="/pedagang/messages"
          element={
            <AdminLayout>
              <PageTitle title="Messages | Pedagang" />
              <Messages />
            </AdminLayout>
          }
        />
        <Route
          path="/order"
          element={
            <UserLayout>
              <PageTitle title="Orders" />
              <Order />
            </UserLayout>
          }
        />

        <Route
          path="/order/orderstatus"
          element={
            <UserLayout>
              <PageTitle title="Order status | Koperasi" />
              <OrderStatus />
            </UserLayout>
          }
        />

        {/* AddProduct Routes */}
        <Route
          path="/pedagang/add-product"
          element={
            <AdminLayout>
              <PageTitle title="Add Product | Koperasi" />
              <AddProductPage
                show={false}
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </AdminLayout>
          }
        />

        <Route
          path="/pedagang/edit-product"
          element={
            <AdminLayout>
              <PageTitle title="Edit Product | Koperasi" />
              <AddProductPage
                show={false}
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </AdminLayout>
          }
        />
        {/* Authentication Routes */}
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login | Mesan" />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Signup | Mesan" />
              <Signup />
            </>
          }
        />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<NotAuthorized />} />

        <Route
          path="/walletsiswa"
          element={
            <UserLayout>
              <PageTitle title="Wallet Siswa | Koperasi" />
              <WalletSiswa />
            </UserLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
