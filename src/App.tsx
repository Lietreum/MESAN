import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import ProtectedRoute from "./components/protect/Protected";
import { lazy, Suspense } from 'react';
//  if we dont want to use lazy loading we can use import statement and just copy it from the commit history
// or reset hard to this head 6db6258a6ad83f65703d8e7241b30f7b44560eb9
// sorry i trying to optimizing this to load like 0.2ms faster hehe
const PageTitle = lazy(() => import("./components/admin/PageTitle"));
const AdminLayout = lazy(() => import("./layouts/pedagang/AdminLayout"));
const UserLayout = lazy(() => import("./layouts/siswa/UserLayout"));
const ECommerce = lazy(() => import("./pages/admin/Dashboard/Dashboard"));
const UserDashboard = lazy(() => import("./pages/siswa/Homepage"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Login = lazy(() => import("./pages/auth/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const Product = lazy(() => import("./pages/admin/Product/ProductCard"));
const Messages = lazy(() => import("./components/admin/Messages/Messages"));
// const ProductList = lazy(() => import("./components/user/ProductList/ProductList"));
const TransactionHistory = lazy(() => import("./components/user/Header/TransactionHistory"));
const MessagesUser = lazy(() => import("./components/user/Header/Messages"));
const ShoppingCart = lazy(() => import("./components/user/Header/ShoppingCart"));
const Favorite = lazy(() => import("./components/user/Header/Favorite"));
const OverlayCard = lazy(() => import("./components/user/Header/OverlayCard"));
const IncomingOrders = lazy(() => import("./components/admin/Product/IncomingOrders"));
const StockNotification = lazy(() => import("./components/admin/Product/StockNotification"));
const QRAdmin = lazy(() => import("./components/admin/Product/QRAdmin"));
const Notification = lazy(() => import("./components/user/Notification/Notification"));
const PaymentOptions = lazy(() => import("./components/user/Header/PaymentOptions"));
const PaymentDetails = lazy(() => import("./components/user/Header/PaymentDetails"));
const KasirLayout = lazy(() => import("./layouts/kasir/KasirLayout"));
const HomeKasir = lazy(() => import("./pages/kasir/DashboardKasir"));
const KasirTopup = lazy(() => import("./pages/kasir/Topup/KasirTopup"));
const ManageAccount = lazy(() => import("./pages/admin/ManageAccount"));
const Withdrawal = lazy(() => import("./pages/kasir/Withdrawal/Withdrawal"));
const BalanceWithdrawal = lazy(() => import("./pages/kasir/Withdrawal/BalanceWithdrawal"));
const HistoryKasir = lazy(() => import("./pages/kasir/History/HistoryKasir"));
const AddProductPage = lazy(() => import("./pages/admin/Product/AddProduct"));
const ProfilePage = lazy(() => import("./components/user/Profile/Profile"));
const WalletSiswa = lazy(() => import("./pages/siswa/walletdashboard/WalletSiswa"));
const Order = lazy(() => import("./pages/siswa/orderstatus/Order"));
const OrderStatus = lazy(() => import("./pages/siswa/orderstatus/OrderStatus"));
const PaymentCountdownPage = lazy(() => import("./components/user/Header/PaymentCountdown"));
const OrderItem = lazy(() => import("./components/user/NotificationOrder/percobaannotifikasi"));
const NotAuthorized = lazy(() => import("./pages/auth/NotAuthorized"));
const KasirPageProducts = lazy(() => import("./pages/kasir/StoreKasir/KasirPageProducts"));
const StorePages = lazy(() => import("./components/user/ProductList/StorePages"));
import usePreventZoom from "./hooks/usePreventZoom";
import Loader from "./components/common/Loader";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  usePreventZoom();

  return (
    <>
        <Suspense fallback={<Loader/>}>

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
      </Suspense>

    </>
  );
}

export default App;
