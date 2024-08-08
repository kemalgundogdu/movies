import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomRoutes from "./components/Navbar/routes";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container mx-auto px-4">
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/*" element={<CustomRoutes />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
