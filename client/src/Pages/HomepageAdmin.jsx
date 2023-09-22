import React, { useEffect, useState } from "react";
import axios from "axios";
//import react icon
import { GrFormEdit } from "react-icons/gr";

//import component
import NavAdmin from "../Component/NavAdmin";
import CategoryCard from "../Component/CategoryCard";
import Searchbar from "../Component/Searchbar";
import SortButton from "../Component/SortButton";
import ProductCard from "../Component/ProductCard";
import Pagination from "../Component/Pagination";
import Button from "../Component/Button";
import ModalNew from "../Component/Modals/ModalNew";
import ModalEdit from "../Component/Modals/ModalEdit";
import ModalNewCat from "../Component/Modals/ModalNewCat";
import ModalEditCat from "../Component/Modals/ModalEditCat";

const HomepageAdmin = () => {
  const [catId, setCatId] = useState("");
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");

  const onGetCategory = async () => {
    try {
      const category = await axios.get(`${process.env.REACT_APP_URL}products/category`);
      console.log(category.data.data);
      setCategory(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   const onGetProduct = async () => {
  //     try {
  //       const res = await axios.get(`${process.env.REACT_APP_URL}products/all`);
  //       setProducts(res.data.data);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleChange = (event) => {
    try {
      console.log(event.target.value);
      setSort(event.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  const onFilterCat = async (id) => {
    try {
      console.log(">>>");
      console.log(id);
      setCatId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilteredProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}products/filtered?catId=${catId}&searchQuery=${searchQuery}&sort=${sort}`);
      console.log(response);
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };



  useEffect(() => {
    onGetCategory();
    // onFilterCat();
    // if (catId) {
    fetchFilteredProducts();
    // } else {
    //   onGetProduct();
    // }

    // console.log(products);
    console.log(catId);
    // onFilterProducts()
    console.log(searchQuery);
    console.log(sort);
  }, [catId, searchQuery, sort]);

  return (
    <div>
      <div className="flex h-screen">
        <NavAdmin />

        <div className="w-[20%]">
          <div className="flex justify-center text-4xl font-black my-5">Category</div>
          <div></div>
          <div className="flex flex-col gap-5 mt-5 overflow-auto h-[730px]">
            <div className="flex justify-center">
              <ModalNewCat />
            </div>
            <CategoryCard name={"Show All"} onClick={() => onFilterCat("")} />
            {category.map((value, index) => {
              return (
                <div key={index}>
                  <CategoryCard
                    onClick={() => onFilterCat(value.id)}
                    name={value.name}
                    item={<ModalEditCat />}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" w-full border border-white border-l-green-600">
          <div className=" flex gap-2 justify-between border border-white border-b-green-600 pt-5 pb-5 px-10">
            <img className="w-[150px] h-[50px]" src="./logoburgrr.png" alt="" />
            <div className="flex gap-2">
              <ModalNew />
              <Searchbar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <Button
                style={`btn bg-green-600 hover:bg-green-600 text-white w-[40px]`}
                text={"x"}
                onClick={() => setSearchQuery("")}
              />
            </div>
            <SortButton
              onChange={handleChange}
              value1={"ASC"}
              value2={"DESC"}
              //   value3={""}
              className="border"
            />
          </div>

          <div className="grid grid-cols-4 gap-5 p-5 h-[600px] overflow-auto w-full">
            {products.map((value, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    name={value.product_name}
                    button={<ModalEdit />}
                    image={value.product_image}
                    description={value.description}
                    price={value.price}
                  />
                </div>
              );
            })}
          </div>

          <div className="pt-4 border border-t-green-600">
            <div className="text-xl flex justify-center items-center ">8 Product(s)</div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAdmin;
