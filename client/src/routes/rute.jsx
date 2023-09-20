import { Route } from "react-router-dom";

//import pages
import HomepageCashier from "../Pages/HomepageCashier";
import Login from "../Pages/Login";
import HomepageAdmin from "../Pages/HomepageAdmin";
import Checkout from "../Pages/Checkout";
import CashierProfile from "../Pages/CashierProfile";
import AdminProfile from "../Pages/AdminProfile";
import DataEmployee from "../Pages/DataEmployee";

import Proteksi from "./proteksi";

const rute = [

    <Route path="/login" element={<Login />} />,

    <Route path="/" element={
        <Proteksi cashierPage={true}>
            <HomepageCashier />
        </Proteksi>
    } />,


    <Route path="/admin" element={
        <Proteksi adminPage={true}>
            <HomepageAdmin />
        </Proteksi>
    } />,

    <Route path="/checkout" element={
        <Proteksi cashierPage={true}>
            <Checkout />
        </Proteksi>

    } />,

    <Route path="/profile" element={
        <Proteksi cashierPage={true}>
            <CashierProfile />
        </Proteksi>

    } />,

    <Route path="/admin/profile" element={
        <Proteksi adminPage={true} >
            <AdminProfile />
        </Proteksi>

    } />,

    <Route path="/admin/employee" element={
        <Proteksi adminPage={true}>
            <DataEmployee />
        </Proteksi>
    } />,

]

export default rute