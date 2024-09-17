import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./common/Loader";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Import route groups
import UserRoutes from "./routes/UserRoutes";
import PedagangRoutes from "./routes/PedagangRoutes";
import KasirRoutes from "./routes/KasirRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import NotFound from "./pages/NotFound";

function App() {
  // vercel analytics start
  inject();
  injectSpeedInsights();
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
        {/* Route groups */}
        <Route path="/" element={<UserRoutes />} />
        <Route path="/admin/*" element={<PedagangRoutes />} />
        <Route path="/kasir/*" element={<KasirRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
