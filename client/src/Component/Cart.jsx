import CartCard from "./CartCard";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RoundButton from "./RoundButton";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  //   console.log(datas);
  const [datas, setDatas] = useState([]);
  const [cartId, setCartId] = useState([]);

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
  //   const addCart = async (id) => {
  //     try {
  //       setCartId(id);
  //       // console.log(`products/cart/${id}`)
  //       toast.success("Product Successfully Added to Cart");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  useEffect(() => {
    onGetCart();
  }, []);
  return (
    <div>
      <div className="bg-green-200 h-screen w-full">
        <div>
          <div className="pr-6 flex justify-end font-black text-4xl py-5">add to Cart</div>
          <div className="flex flex-col gap-5 py-5 overflow-auto h-[600px]">
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
                      // onClick={() => addCart(value.product_id)}
                    />
                  }
                />
              );
            })}
          </div>

          <div className="flex justify-center mt-10">
            <Link to={"/cashier/checkout"}>
              <Button
                style="btn bg-green-600 hover:bg-green-600 text-white text-3xl w-[300px] h-[50px] border-green-600"
                text="Checkout"
              />
            </Link>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Cart;
