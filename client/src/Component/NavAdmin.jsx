import React from "react"
import { Link } from "react-router-dom";
//react icon
import { TbLogout } from 'react-icons/tb';
import { LuClipboardEdit } from 'react-icons/lu';
import { BsFillPieChartFill } from 'react-icons/bs';
import { FaCircleUser } from 'react-icons/fa6';

const NavAdmin = () => {
    return (
        <div className="flex justify-center h-full">
            <div className="w-[100px] h-screen bg-green-600 flex flex-col justify-between">

                <div className="flex justify-center">
                    <Link to={'/admin/profile'}>
                        <div className=" mt-5 w-[80px] h-[80px] border rounded-full">
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col gap-10 items-center mb-10">

                    <div>
                        <BsFillPieChartFill className="text-5xl text-white" />
                    </div>

                    <Link to={'/admin'}>
                        <div>
                            <LuClipboardEdit className="text-5xl text-white" />
                        </div>
                    </Link>


                    <Link to={'/admin/employee'}>
                        <div>
                            <FaCircleUser className="text-5xl text-white" />
                        </div>
                    </Link>

                    <div>
                        <TbLogout className="text-5xl text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavAdmin