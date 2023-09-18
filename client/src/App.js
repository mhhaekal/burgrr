//import Pages
import HomepageCashier from "./Pages/HomepageCashier";
import HomepageAdmin from "./Pages/HomepageAdmin";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";

//import router
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div data-theme="light">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cashier" element={<HomepageCashier />} />
        <Route path="/admin" element={<HomepageAdmin />} />
        <Route path="/cashier/checkout" element={<Checkout />} />
      </Routes>


    </div>
  );
}

export default App;
