import React from "react"

//import react icon
import { BiSearchAlt } from 'react-icons/bi';

//import component
import NavAdmin from "../Component/NavAdmin";
import CategoryCard from "../Component/CategoryCard"
import Searchbar from "../Component/Searchbar"
import SortButton from "../Component/SortButton";
import ProductCard from "../Component/ProductCard";
import Cart from "../Component/Cart";
import RoundButton from "../Component/RoundButton";
import Pagination from "../Component/Pagination";
import Button from "../Component/Button";


const HomepageAdmin = () => {
    return (
        <div>
            <div className="flex h-screen">

                <NavAdmin />

                <div className="w-[20%]">
                    <div className="flex justify-center text-4xl font-black my-5">Category</div>
                    <div></div>
                    <div className="flex flex-col gap-5 mt-5 overflow-auto h-[730px]">
                        <div className="flex justify-center">
                            <Button style="btn bg-green-900 hover:bg-green-900 text-bold text-xl w-[200px] h-[80px] text-white rounded-full" text="Add new +" />
                        </div>
                        <CategoryCard name="Burgrr" />
                        <CategoryCard name="Fries" />
                        <CategoryCard name="Chicken" />
                        <CategoryCard name="Fish" />
                        <CategoryCard name="Taco" />
                        <CategoryCard name="Snacks" />
                        <CategoryCard name="Beverages" />

                    </div>
                </div>

                <div className=" w-full border border-white border-l-green-600">

                    <div className=" flex gap-5 justify-between border border-white border-b-green-600 pt-5 pb-5 px-10">

                        <div>Logo</div>
                        <div className="flex gap-2">
                            <RoundButton text="+" />
                            <Searchbar />
                            <Button style="btn bg-green-600 hover:bg-green-600 text-white w-[80px]" text="Search" />
                            <SortButton className="border" />
                        </div>



                    </div>

                    <div className="grid grid-cols-4 gap-5 p-5 h-[600px] overflow-auto w-full">
                        <ProductCard name="Cheese Burgrr" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="Double Cheese Burgrr" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="Triple Cheese Burgrr" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="Hamburgrr" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="BIGBURGRR" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="DOUBLE BIGBURGRR" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="TRIPLE BIGBURGRR" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />
                        <ProductCard name="Just Burgrr" button={<Button style="btn bg-green-600 text-white hover:text-white hover:bg-green-600 rounded-full" text="edit" />} />

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

export default HomepageAdmin