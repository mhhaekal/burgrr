import Button from "../Component/Button"
import NavAdmin from "../Component/NavAdmin"
import RoundButton from "../Component/RoundButton"
import { FiEdit } from 'react-icons/fi';

const DataEmployee = () => {




    return (
        <div>
            <div className="flex h-[screen]">
                <NavAdmin />


                <div>
                    <div className="text-5xl font-black p-10">Data Employee</div>

                    <div className="overflow-x-auto pl-10">
                        <table className="table">
                            <thead className="bg-green-600 text-white text-lg">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Andre</td>
                                    <td>adidu@gmail.com</td>
                                    <td><Button text="deactivate" style="btn bg-black text-white hover:bg-black hover:text-white" /></td>
                                    <td><FiEdit className="text-4xl" />  </td>
                                    <td> <RoundButton text="X" style="bg-red-600 hover:bg-red-600" /> </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="relative">
                    <div class="flex items-center justify-center text-4xl text-white bg-green-600 rounded-full w-[80px] h-[80px] fixed bottom-10 right-10">
                        <Button text="+" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataEmployee