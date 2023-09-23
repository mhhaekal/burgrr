import { Route } from "react-router-dom";

//import pages
import HomepageCashier from "../Pages/HomepageCashier";
import Login from "../Pages/Login";
import HomepageAdmin from "../Pages/HomepageAdmin";
import Checkout from "../Pages/Checkout";
import CashierProfile from "../Pages/CashierProfile";
import AdminProfile from "../Pages/AdminProfile";
import DataEmployee from "../Pages/DataEmployee";
import Protected from "./protected";

const route = [
  <Route
    path="/"
    element={
      <Protected>
        <Login />
      </Protected>
    }
  />,

  <Route
    path="/cashier"
    element={
      <Protected cashierPage={true}>
        <HomepageCashier />
      </Protected>
    }
  />,

  <Route
    path="/admin"
    element={
      <Protected adminPage={true}>
        <HomepageAdmin />
      </Protected>
    }
  />,

  <Route
    path="/cashier/checkout"
    element={
      <Protected cashierPage={true}>
        <Checkout />
      </Protected>
    }
  />,

  <Route
    path="/cashier/profile"
    element={
      <Protected cashierPage={true}>
        <CashierProfile />
      </Protected>
    }
  />,

  <Route
    path="/admin/profile"
    element={
      <Protected adminPage={true}>
        <AdminProfile />
      </Protected>
    }
  />,

  <Route
    path="/admin/data"
    element={
      <Protected adminPage={true}>
        <DataEmployee />
      </Protected>
    }
  />,
];

export default route;
