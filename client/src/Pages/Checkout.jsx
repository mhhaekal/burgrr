import { useRef, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

//import component
import CartCard from "../Component/CartCard"
import Button from "../Component/Button"
import Input from "../Component/Input"
import RoundButton from "../Component/RoundButton"

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState(false)
    const payment = useRef()
    const [cart, setCart] = useState([])
    const [cartId, setCartId] = useState([])
    const [total, setTotal] = useState([])


    const onConfirm = async () => {
        try {
            console.log(payment.current.value);
            setPaymentMethod(payment.current.value)
            console.log(paymentMethod);
        } catch (error) {
            console.log(error);
        }
    }

    const getCart = async () => {
        try {
            const input = await axios.get(`${process.env.REACT_APP_URL}products/allcart`)
            console.log(input.data.data)
            console.log(input.data.data[0].product.price);
            setCart(input.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addCart = async (id) => {
        try {
            setCartId(id)
            // console.log(`products/cart/${id}`)
            const cart1 = await axios.post(`${process.env.REACT_APP_URL}products/cart/${id}`)
            console.log(cart1);
            toast.success('Product Successfully Added to Cart')
        } catch (error) {
            console.log(error)
        }
    }

    // const onGetCart = async () => {
    //     try {
    //         console.log(">>>");
    //         const cart1 = await axios.post(`${process.env.REACT_APP_URL}products/cart/${cartId}`)
    //         console.log("2>>>");
    //         console.log(cart1)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getTotal = async () => {
        try {
            const total = await axios.get(`${process.env.REACT_APP_URL}products/total`)
            console.log(total.data.data);
            setTotal(total.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        onConfirm()
        getCart()
        getTotal()
        addCart()
        // onGetCart()
    }, [])

    return (
        <div className="h-screen flex">
            <div className="bg-white w-[60%] pt-10 p-10">
                <div className="text-4xl font-black">Checkout Transaction</div>

                <div className="py-5 text-xl font-semibold">Items</div>
                <div className="flex flex-col gap-3 h-[400px] overflow-auto mb-5">
                    {
                        cart.map((value, index) => {
                            return (
                                <div key={index}>
                                    <CartCard
                                        product_name={value.product.product_name}
                                        image={value.product.product_image}
                                        price={value.product.price}
                                        quantity={value.quantity}
                                        button={<RoundButton text="+" onClick={() => addCart(value.product_id)} />}
                                        total={`Rp ${(value.product.price * value.quantity).toLocaleString()}`}
                                    />
                                </div>

                            )
                        })
                    }
                </div>

                <div className="py-5 flex text-xl font-semibold justify-between border border-x-white border-y-green-600">
                    <div>Subtotal</div>
                    <div>Rp. {total.toLocaleString()}</div>
                </div>

                <div className="mt-5 text-xl font-semibold">
                    <div>Payment Method
                    </div>

                    <div className="flex pt-5 gap-5">
                        <div className="">
                            <select ref={payment} className="select select-bordered w-full max-w-xs bg-green-600 text-white hover:text-white">
                                <option disabled selected>Please choose your payment method</option>
                                <option value={"cash"}>Cash</option>
                                <option value={"gopay"}>Gopay</option>
                                <option value={"ovo"}>OVO</option>
                                <option value={"card"}>Card</option>
                            </select>
                        </div>

                        <div className=""><Button onClick={() => onConfirm()} text="Confirm" style="btn" /> </div>
                    </div>
                </div>

            </div>

            <div className="bg-green-600 w-[40%]">

                <div className="flex justify-end m-5 p-5 text-4xl font-black text-white">Transaction Summary</div>
                <div className="bg-green-900 text-white m-5 p-5 flex flex-col gap-5">
                    <div className="flex justify-between">
                        <div>Subtotal</div>
                        <div>Rp. {total.toLocaleString()}</div>
                    </div>

                    <div className="flex justify-between">
                        <div>Tax 10%</div>
                        <div>Rp. {(total * 10 / 100).toLocaleString()}</div>
                    </div>

                    <div className="w-[full] bg-white h-[3px]"></div>

                    <div className="flex justify-between">
                        <div className="font-bold text-xl">TOTAL</div>
                        <div className="font-bold text-xl">Rp. {(total + (total * 10 / 100)).toLocaleString()}</div>
                    </div>
                </div>

                {
                    paymentMethod === "cash" ?
                        <div>
                            <div className="flex flex-col justify-center mx-5 gap-3">
                                <div className="flex justify-end text-2xl font-semibold text-white">Input Amount</div>
                                <Input type="number" placeholder="Rp" style="input input-bordered w-full mr-5" />
                            </div>

                            <div className="flex flex-col justify-center mx-5 my-5 pb-10 gap-3">
                                <div className="flex justify-end text-2xl font-semibold text-white">Changes</div>
                                <div className="flex justify-end text-white text-lg">Rp ... </div>
                            </div>
                        </div> : null
                }

                <div className="flex flex-col justify-center items-center gap-5">
                    <Button style="btn hover:bg-white bg-white text-green-600 flex justify-center rounded-xl text-3xl font-extrabold w-[500px] h-[50px] flex items-center" text="Process Payment" />
                    <Link to={'/cashier'}>
                        <Button style="btn hover:bg-black hover:border-black bg-black text-white flex justify-center rounded-xl text-3xl border-black font-extrabold w-[500px] h-[50px] flex items-center" text="Cancel" />
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Checkout