import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import DefaultLayout from "./layouts/admin/DefaultLayout";
import UserLayout from "./layouts/user/UserLayout";
import ECommerce from "./pages/admin/Dashboard/Dashboard";
import UserDashboard from "./pages/user/userDashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/auth/Signup";

function App() {
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

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <DefaultLayout>
              <PageTitle title="Admin Dashboard | Koperasi" />
              <ECommerce />
            </DefaultLayout>
          }
        />

        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <PageTitle title="Profile" />
              <Profile />
            </DefaultLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <DefaultLayout>
              <PageTitle title="Settings" />
              <Settings />
            </DefaultLayout>
          }
        />

        {/* Authentication Route */}
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
              <PageTitle title="Login" />
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
