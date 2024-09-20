import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import PageTitle from "../components/admin/PageTitle";

export default function AuthRoutes() {
  return (
    <Routes>
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
    </Routes>
  );
}
