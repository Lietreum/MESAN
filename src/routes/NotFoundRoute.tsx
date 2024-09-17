import { Routes, Route } from "react-router-dom";
import PageTitle from "../components/admin/PageTitle";
import NotFound from "../pages/NotFound";

export default function NotFoundRoute() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <PageTitle title="Login" />
            <NotFound />
          </>
        }
      />
    </Routes>
  );
}
