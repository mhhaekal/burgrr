import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
//import react icon
import { BiSearchAlt } from "react-icons/bi";

//import component
import Nav from "../Component/Nav";
import CategoryCard from "../Component/CategoryCard";
import Searchbar from "../Component/Searchbar";
import SortButton from "../Component/SortButton";
import ProductCard from "../Component/ProductCard";
import Cart from "../Component/Cart";
import RoundButton from "../Component/RoundButton";
import Pagination from "../Component/Pagination";
import Button from "../Component/Button";
import { useSelector } from "react-redux";
import CartCard from "../Component/CartCard";
import { Link } from "react-router-dom";

const HomepageCashier = () => {
  const { id } = useSelector((state) => state.user);
  const [catId, setCatId] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  const [cart, setCart] = useState([]);
  const [datas, setDatas] = useState([]);
  const [cartId1, setCartId1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  const onGetCategory = async () => {
    try {
      const category = await axios.get(`${process.env.REACT_APP_URL}products/category`);
      console.log(category.data.data);
      setCategory(category.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onGetCart = async () => {
    try {
      const cart = await axios.get(`${process.env.REACT_APP_URL}products/getDataCart`);
      console.log(cart.data);
      setDatas(cart.data);
      console.log(">>>");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlusQty = async (pId) => {
    try {
      console.log(pId);
      const qty = await axios.get(
        `${process.env.REACT_APP_URL}products/addqty?pId=${pId}&id=${id}`
      );

      console.log(qty.data.isError);
      onGetCart();
      if (!qty.data.isError) return toast.success(qty.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinusQty = async (pId) => {
    try {
      console.log(pId);
      const qty = await axios.get(
        `${process.env.REACT_APP_URL}products/minusqty?pId=${pId}&id=${id}`
      );

      console.log(qty.data.isError);
      if (qty.data.isError) {
        onGetCart();
        return toast.error(qty.data.message);
      } else if (!qty.data.isError) {
        onGetCart();
        return toast.success(qty.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addQuantity = async (product_id) => {
    try {
      console.log(product_id);
      setCartId1(product_id);
      console.log(">>>");
      const cart = await axios.post(`${process.env.REACT_APP_URL}products/addProduct`, {
        product_id: product_id,
        user_id: id,
      });
      console.log(cart);
      onGetCart();
      toast.success(`Product Successfully Added to Cart`);
    } catch (error) {
      console.log(error);
    }
  };
  //   const addCart = async () => {
  //     try {
  //       // setProductId(id)
  //       // console.log(`products/cart/${id}`)
  //       console.log("1>>>");
  //       // console.log(`${process.env.REACT_APP_URL}products/cart/${cartId}`);
  //       const cart = await axios.post(`${process.env.REACT_APP_URL}products/cart/${cartId1}`);
  //       console.log("2>>>");
  //       // toast.success('Product Successfully Added to Cart')
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const onFilterCat = async (id) => {
    try {
      setCurrentPage(1);
      setCatId(id);
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
  //   const getCart = async () => {
  //     try {
  //       const input = await axios.get(`${process.env.REACT_APP_URL}products/allcart`);
  //       console.log(input.data.data);
  //       setCart(input.data.data);
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

  console.log(cartId1);
  useEffect(() => {
    // addCart();
    onGetCategory();
    fetchFilteredProducts();
    onGetCart();
    // getCart();
  }, [catId, searchQuery, sort]);

  return (
    <div>
      <div className="flex h-screen">
        <Nav />
        <div className="w-[20%]">
          <div className="flex justify-center text-4xl font-black my-5">Category</div>
          <div className="flex flex-col mt-5 gap-5 overflow-auto h-[730px]">
            <CategoryCard name={"Show All"} onClick={() => onFilterCat("")} />
            {category.map((value, index) => {
              return (
                <div key={index}>
                  <CategoryCard onClick={() => onFilterCat(value.id)} name={value.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full border border-white border-l-green-600">
          <div className=" flex gap-5 justify-between border border-white border-b-green-600 pt-5 pb-5 px-10">
            <img className="w-[150px] h-[50px]" src="./logoburgrr.png" alt="" />
            <div className="flex gap-2">
              <Searchbar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <Button
                style={`btn bg-green-600 hover:bg-green-600 text-white w-[100px]`}
                text={"Reset"}
                onClick={() => setSearchQuery("")}
              />
              <SortButton
                onChange={handleChange}
                value1={"ASC"}
                value2={"DESC"}
                //   value3={""}
                className="border"
              />
            </div>
            <div className="drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn bg-green-600 text-white hover:bg-green-600 drawer-button"
                >
                  {" "}
                  Cart
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="bg-green-200 h-screen w-96">
                  <div>
                    <div className="pr-6 flex justify-end font-black text-4xl py-5">
                      add to Cart
                    </div>
                    <ul className="flex flex-col gap-5 py-5 overflow-auto h-[600px]">
                      {datas.map((value) => {
                        return (
                          <CartCard
                            product_name={value.product.product_name}
                            image={value.product.product_image}
                            price={value.product.price}
                            quantity={value.quantity}
                            button={
                              <RoundButton
                                text="+"
                                onClick={() => handlePlusQty(value.product_id)}
                              />
                            }
                            button1={
                              <RoundButton
                                text="-"
                                onClick={() => handleMinusQty(value.product_id)}
                              />
                            }
                          />
                        );
                      })}
                    </ul>

                    <div className="flex justify-center mt-10">
                      <Link to={"/cashier/checkout"}>
                        <Button
                          style={`btn bg-green-600 hover:bg-green-600 text-white text-3xl w-[300px] h-[50px] border-green-600`}
                          text="Checkout"
                        />
                      </Link>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 p-5 h-[600px] overflow-auto w-full">
            {currentPosts.map((value, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    name={value.product_name}
                    button={<RoundButton onClick={() => addQuantity(value.id)} text={"+"} />}
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
            <Pagination
              totalPost={products.length}
              postsPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCashier;
