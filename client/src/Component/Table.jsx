import Button from "./Button"
import RoundButton from "./RoundButton";

import { FiEdit } from 'react-icons/fi';



const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto pl-10">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
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
    )
}

export default Table