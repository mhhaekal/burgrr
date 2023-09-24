import NavAdmin from "../Component/NavAdmin"
import React, { PureComponent, useState, useEffect } from 'react';
import BarChartComponent from "../Component/BarChartComponent";
import LineChartComponent from "../Component/LineChartComponent";
import { useRef } from "react";
import { current } from "@reduxjs/toolkit";
import axios from "axios";


const AdminDash = () => {
    const date = useRef()
    const [total, setTotal] = useState([])
    const [totalFinal, setTotalFinal] = useState([])

    const onGetDate = async () => {
        try {
            const input = date.current.value
            console.log(input);
            setTotal(input)
        } catch (error) {
            console.log(error);
        }
    }
    const onGetTotal = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_URL}transaction/total`, { createdAt: total })
            console.log(res.data.data.total);
            setTotalFinal(res)
        } catch (error) {
            console.log(error);
        }
    }

    // const data = [
    //     {
    //         name: "Today Sales",
    //         burgrrr: 4000,
    //         Fries: 2400,
    //         Shake: 2400,
    //     }
    // ];
    useEffect(() => {
        onGetTotal()
    }, [onGetTotal])

    return (
        <div>
            <div className="flex h-screen">

                <NavAdmin />

                <div className="w-screen h-screen overflow-auto">


                    <div className="text-5xl font-black pl-10 pt-10 pb-10 w-full">Sales Report</div>

                    <div className=" mx-10 mb-20">

                        <div className="flex justify-between h-[100px] px-10 mb-5 bg-green-200">
                            <div className="flex items-center text-3xl font-bold">Daily Report</div>
                            <div className="flex gap-5">
                                <div className="flex items-center text-xl">
                                    <div>
                                        <input ref={date} type="date" className="px-5 py-2 border rounded-full bg-green-600 text-white border-white" /></div>
                                </div>
                                <div className="flex items-center">
                                    <div className="btn " onClick={onGetDate}>
                                        Confirm
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="flex justify-between mb-10">
                            <div className="border h-[400px] w-[38%] flex flex-col justify-between rounded-2xl p-5 shadow-xl">
                                <div className="text-2xl">Total Sales by Today</div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-3xl">IDR</div>
                                    <div className="text-6xl">{totalFinal}</div>
                                </div>
                            </div>
                            <div className="border w-[60%] rounded-2xl p-5 shadow-xl text-2xl flex">

                                <div className="grid place-items-center">
                                    <BarChartComponent />

                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="mx-10 mb-20">
                        <div className="flex justify-between h-[100px] px-10 mb-5 bg-green-200">
                            <div className="flex items-center text-3xl font-bold">Transaction Report</div>
                            <div className="flex items-center text-xl"><input type="date" className="px-5 py-2 border rounded-full bg-green-600 text-white border-white" /></div>
                        </div>

                        <div className=" ">
                            <table className="table table-sm">
                                <thead className="bg-green-600 text-white text-xl">
                                    <tr>
                                        <th className="pl-10">No</th>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="h-[150px]">
                                        <th className="pl-10 text-xl">1</th>
                                        <td className="text-xl">
                                            <div className="w-[100px] h-[100px] border rounded-full"></div>
                                        </td>
                                        <td className="text-xl">Burgrr</td>
                                        <td className="text-xl">2</td>
                                        <td className="text-xl">Rp 40,000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between bg-green-800 text-white">
                            <div className="h-[80px] flex items-center pl-10 text-2xl font-black">Total</div>
                            <div className="flex items-center font-black pr-32 text-3xl">Rp 120,000</div>
                        </div>
                    </div>


                    <div className="mx-10 mb-10">
                        <div className="flex justify-between h-[100px] px-10 mb-5 bg-green-200">
                            <div className="flex items-center text-3xl font-bold">Sales Report</div>
                            <div className="flex gap-10">
                                <div className="flex items-center text-xl"><input type="date" className="px-5 py-2 border rounded-full bg-green-600 text-white border-white" /></div>
                                <div className="flex items-center text-xl"><input type="date" className="px-5 py-2 border rounded-full bg-green-600 text-white border-white" /></div>
                            </div>

                        </div>

                        <div className="border h-[500px] rounded-2xl p-5 shadow-xl text-2xl">
                            <div className="flex justify-center items-center mt-10">
                                <LineChartComponent />
                            </div>

                        </div>


                    </div>


                </div>

            </div>
        </div>
    )
}

export default AdminDash