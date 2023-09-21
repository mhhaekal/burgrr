import React, { useEffect, useState } from "react"
import axios from "axios"
//import react icon
import { BiSearchAlt } from 'react-icons/bi';

//import component
import Nav from "../Component/Nav"
import CategoryCard from "../Component/CategoryCard"
import Searchbar from "../Component/Searchbar"
import SortButton from "../Component/SortButton";
import ProductCard from "../Component/ProductCard";
import Cart from "../Component/Cart";
import RoundButton from "../Component/RoundButton";
import Pagination from "../Component/Pagination";
import Button from "../Component/Button";


const HomepageCashier = () => {

    const [catId, setCatId] = useState([])
    const [category, setCategory] = useState([])

    const onGetCategory = async () => {
        try {
            const category = await axios.get(`${process.env.REACT_APP_URL}products/category`)
            console.log(category.data.data);
            setCategory(category.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    // const onFilterCat = async (id) => {
    //     try {
    //         setCatId(id)
    //         const filter = await axios.get(`${process.env.REACT_APP_URL}products/all/${catId}`)

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const onFilterProducts = async () => {
    //     try {

    //         console.log(filter);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     onGetCategory()
    //     onFilterCat()
    //     onFilterProducts()
    // }, [])

    return (
        <div>
            <div className="flex h-screen">

                <Nav />

                <div className="w-[20%]">
                    <div className="flex justify-center text-4xl font-black my-5">Category</div>
                    <div className="flex flex-col mt-5 gap-5 overflow-auto h-[730px]">

                        {category.map((value, index) => {
                            return (
                                <div key={index}>
                                    <CategoryCard name={value.name} />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className=" w-full border border-white border-l-green-600">

                    <div className=" flex gap-5 justify-between border border-white border-b-green-600 pt-5 pb-5 px-10">

                        <img className="w-[150px] h-[50px]" src="./logoburgrr.png" alt="" />
                        <div className="flex gap-2">
                            <Searchbar />
                            <Button style="btn bg-green-600 hover:bg-green-600 text-white w-[80px]" text="Search" />
                            <SortButton className="border" />
                        </div>

                        <div className="drawer-end">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="btn bg-green-600 text-white hover:bg-green-600 drawer-button"> Cart</label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <ul className="menu w-96 min-h-full bg-green-200 text-base-content">
                                    <div>
                                        <Cart />
                                    </div>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-4 gap-5 p-5 h-[600px] overflow-auto w-full">
                        <ProductCard name="Cheese Burgrr" button={<RoundButton text="+" />} />
                        <ProductCard name="Double Cheese Burgrr" button={<RoundButton text="+" />} />
                        <ProductCard name="Triple Cheese Burgrr" button={<RoundButton text="+" />} />
                        <ProductCard name="Hamburgrr" button={<RoundButton text="+" />} />
                        <ProductCard name="BIGBURGRR" button={<RoundButton text="+" />} />
                        <ProductCard name="DOUBLE BIGBURGRR" button={<RoundButton text="+" />} />
                        <ProductCard name="TRIPLE BIGBURGRR" button={<RoundButton text="+" />} />
                        <ProductCard name="Just Burgrr" button={<RoundButton text="+" />} />
                    </div>

                    <div className="pt-4 border border-t-green-600">
                        <div className="text-xl flex justify-center items-center ">8 Product(s)</div>
                        <Pagination />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomepageCashier