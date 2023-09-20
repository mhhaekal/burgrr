//import Pages
import HomepageCashier from "./Pages/HomepageCashier";
import HomepageAdmin from "./Pages/HomepageAdmin";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import CashierProfile from "./Pages/CashierProfile";
import AdminProfile from "./Pages/AdminProfile";
import DataEmployee from "./Pages/DataEmployee";
import Verify from "./Pages/verify";
import { Toaster } from "react-hot-toast";
//import router
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onCheckislogin } from "./redux/Features";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("verify/")) return;
    if (location.pathname === "/login") return;
    dispatch(onCheckislogin());
  }, []);
  return (
    <div data-theme="light">
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cashier" element={<HomepageCashier />} />
        <Route path="/admin" element={<HomepageAdmin />} />
        <Route path="/cashier/checkout" element={<Checkout />} />
        <Route path="/cashier/profile" element={<CashierProfile />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/data" element={<DataEmployee />} />
        <Route path="/verify/:token" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
