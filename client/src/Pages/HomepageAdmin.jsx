//import react icon
import { GrFormEdit } from 'react-icons/gr';

//import component
import NavAdmin from "../Component/NavAdmin";
import CategoryCard from "../Component/CategoryCard"
import Searchbar from "../Component/Searchbar"
import SortButton from "../Component/SortButton";
import ProductCard from "../Component/ProductCard";
import Pagination from "../Component/Pagination";
import Button from "../Component/Button";
import ModalNew from "../Component/ModalNew";
import ModalEdit from "../Component/ModalEdit";


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
                            <Button style={"btn bg-green-900 hover:bg-green-900 text-bold text-xl w-[180px] h-[80px] text-white rounded-full"} text={"Add new +"} />
                        </div>
                        <CategoryCard name={"Burgrr"} edit={<GrFormEdit className='text-3xl' />} />
                        <CategoryCard name={"Fries"} />
                        <CategoryCard name={"Chicken"} />
                        <CategoryCard name={"Fish"} />
                        <CategoryCard name={"Taco"} />
                        <CategoryCard name={"Snacks"} />
                        <CategoryCard name={"Beverages"} />

                    </div>
                </div>

                <div className=" w-full border border-white border-l-green-600">

                    <div className=" flex gap-2 justify-between border border-white border-b-green-600 pt-5 pb-5 px-10">

                        <img className="w-[120px] h-[50px]" src="./logoburgrr.png" alt="" />
                        <div className="flex gap-2">
                            <ModalNew />
                            <Searchbar />
                            <Button style={"btn bg-green-600 hover:bg-green-600 text-white w-[80px]"} text={"Search"} />

                        </div>
                        <SortButton className="border" />


                    </div>

                    <div className="grid grid-cols-4 gap-5 p-5 h-[600px] overflow-auto w-full">
                        <ProductCard name={"Cheese Burgrr"} button={<ModalEdit />} />
                        <ProductCard name={"Double Cheese Burgrr"} button={<ModalEdit />} />
                        <ProductCard name={"Triple Cheese Burgrr"} button={<ModalEdit />} />
                        <ProductCard name={"Hamburgrr"} button={<ModalEdit />} />
                        <ProductCard name={"BIGBURGRR"} button={<ModalEdit />} />
                        <ProductCard name={"DOUBLE BIGBURGRR"} button={<ModalEdit />} />
                        <ProductCard name={"TRIPLE BIGBURGRR"} button={<ModalEdit />} />
                        <ProductCard name={"Just Burgrr"} button={<ModalEdit />} />
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