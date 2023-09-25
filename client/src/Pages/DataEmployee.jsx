import Button from "../Component/Button"
import NavAdmin from "../Component/NavAdmin"
import Pagination from "../Component/Pagination";
import ModalNewCashier from "../Component/Modals/ModalNewCashier";
import ModalEditCashier from "../Component/Modals/ModalEditCashier";

import { FiEdit } from 'react-icons/fi';
import { useState } from "react";

const DataEmployee = () => {

    const [status, setStatus] = useState("active")

    return (
        <div>
            <div className="flex h-screen">
                <NavAdmin />
                <div className=" border w-screen ">
                    <div className="flex gap-10 text-5xl font-black pl-10 pt-10 pb-10 w-full">Data Employee
                        <ModalNewCashier />
                    </div>
                    <div className="mx-10 h-[600px] ">
                        <table className="table table-sm">
                            <thead className="bg-green-600 text-white text-xl">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <th className="text-xl">1</th>
                                    <td className="text-xl">Andre</td>
                                    <td className="text-xl">adidu@gmail.com</td>
                                    <td>
                                        {status === "active" ? <Button click={() => setStatus("deactive")} text="deactivate" style="btn bg-red-600 text-white hover:bg-red-600 hover:text-white w-[120px]" /> :
                                            <Button click={() => setStatus("active")} text="active" style="btn bg-green-600 text-white hover:bg-green-600 hover:text-white w-[120px]" />}
                                    </td>
                                    <td><ModalEditCashier /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center">
                        <Pagination className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataEmployee