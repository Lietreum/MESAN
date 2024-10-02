// src/routes/AdminRoutes.tsx
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/pedagang/AdminLayout";
import ECommerce from "../pages/admin/Dashboard/Dashboard";
import Product from "../pages/admin/Product/ProductCard";
import IncomingOrders from "../components/admin/Product/History";
import StockNotification from "../components/admin/Product/StockNotification";
import QRAdmin from "../components/admin/Product/QRAdmin";
import PageTitle from "../components/admin/PageTitle";
import Messages from "../components/admin/Messages/Messages";

export default function PedagangRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <PageTitle title="Admin Dashboard | Koperasi" />
            <ECommerce />
          </AdminLayout>
        }
      />
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
            <PageTitle title="QR Scan Admin | Koperasi" />
            <QRAdmin />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <AdminLayout>
            <PageTitle title="Admin Messages | Koperasi" />
            <Messages />
          </AdminLayout>
        }
      />
    </Routes>
  );
}
