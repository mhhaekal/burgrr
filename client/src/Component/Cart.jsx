import CartCard from "./CartCard"
import Button from "./Button"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Cart = ({ datas }) => {
    console.log(datas)

    return (
        <div>
            <div className="bg-green-200 h-screen w-full">
                <div>
                    <div className="pr-6 flex justify-end font-black text-4xl py-5">add to Cart</div>
                    <div className="flex flex-col gap-5 py-5 overflow-auto h-[600px]">
                        {
                            datas.map((value) => {
                                return <CartCard
                                    product_name={value.product.product_name}
                                    image={value.product.product_image}
                                    price={value.product.price}
                                />
                            })
                        }

                    </div>

                    <div className="flex justify-center mt-10">
                        <Button style="btn bg-green-600 hover:bg-green-600 text-white text-3xl w-[300px] h-[50px] border-green-600" text="Checkout" />
                    </div>
                </div>

                <div></div>

            </div>
        </div>
    )

}

export default Cart