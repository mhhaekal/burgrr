import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrFormEdit } from "react-icons/gr";
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
import Input from "./../Component/Input";

const HomepageAdmin = () => {
  const [catId, setCatId] = useState("");
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(8);
  const [modal, setModal] = useState(false);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  const [inputCat, setInputCat] = useState("");
  const [cat_id, setCat_id] = useState("");

  const onGetCategory = async () => {
    try {
      const category = await axios.get(`${process.env.REACT_APP_URL}products/category`);
      console.log(category.data.data);
      setCategory(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    try {
      console.log(event.target.value);
      setSort(event.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveCat = async () => {
    try {
      //   console.log(cat_id);
      const res = await axios.patch(`${process.env.REACT_APP_URL}products/saveCat`, {
        inputCat,
        id: cat_id,
      });
      console.log(res);
      setModal(!modal);
      onGetCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const onFilterCat = async (id) => {
    try {
      setCurrentPage(1);
      setCatId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCategory = async (cateId) => {
    try {
      console.log(cateId);
      setCat_id(cateId);
      const res = await axios.get(`${process.env.REACT_APP_URL}products/getOneCat/${cateId}`);
      setInputCat(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilteredProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}products/filtered?catId=${catId}&searchQuery=${searchQuery}&sort=${sort}`
      );
      console.log(response);
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  useEffect(() => {
    onGetCategory();
    fetchFilteredProducts();
    console.log(cat_id);
  }, [catId, searchQuery, sort, cat_id]);

  return (
    <div className="">
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
                <div className="relative" key={index}>
                  <CategoryCard
                    onClick={() => onFilterCat(value.id)}
                    name={value.name}
                    // item={<ModalEditCat />}
                  />
                  <div className="absolute right-3 top-0 ">
                    {/* <ModalEditCat /> */}
                    <GrFormEdit
                      size={40}
                      className=" rounded-full bg-slate-200 hover:bg-slate-300 active:scale-90"
                      onClick={() => {
                        setModal(true);
                        handleEditCategory(value.id);
                      }}
                    />
                  </div>
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
                style={`btn bg-green-600 hover:bg-green-600 text-white w-[70px]`}
                text={"Reset"}
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
            {/* {products.map((value, index) => {
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
            })} */}
            {currentPosts.map((value, index) => {
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
            <div className="text-xl flex justify-center items-center ">
              {currentPosts.length} Product(s)
            </div>
            <Pagination
              totalPost={products.length}
              postsPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      {/* <div className={modal ? "h-screen backdrop-blur-sm bg-black/30 absolute z-50" : null}></div> */}
      {modal ? (
        <div
          //   onClick={() => setNav(!nav)}
          className="fixed backdrop-blur-md bg-black/80 h-screen w-full z-10 top-0 right-0 duration-600 ease-in"
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          modal
            ? `fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-10 bg-green-600 rounded-md `
            : `hidden`
        }
      >
        <h3 className="font-bold text-4xl text-white">Edit Category</h3>

        <div className="flex flex-col gap-5 mt-5">
          <div>
            <div className="text-white pb-2"> Category Name</div>
            <Input
              type={"text"}
              value={inputCat}
              style={`input w-full`}
              onChange={(e) => setInputCat(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog" onSubmit={handleSaveCat}>
            {/* if there is a button in form, it will close the modal */}
            <Button
              text="Submit"
              style={`btn bg-white text-black border-white hover:bg-white hover:border-white`}
            />
          </form>
          <Button
            text={"cancel"}
            style={`btn bg-black text-white border-black hover:bg-black hover:border-black`}
            onClick={() => setModal(!modal)}
          />
          <Button
            text="Delete"
            style={`btn bg-red-600 text-white border-red-600 hover:bg-red-600 hover:border-black`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageAdmin;
