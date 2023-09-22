import RoundButton from "./RoundButton"
import axios from "axios"
import toast from "react-hot-toast"

const CartCard = (props) => {
    const addCart = async (id) => {
        try {
            // setProductId(id)
            // console.log(`products/cart/${id}`)
            const cart = await axios.post(`${process.env.REACT_APP_URL}products/cart/${id}`)
            toast.success('Product Successfully Added to Cart')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="px-5">

                <div className="bg-white shadow-lg rounded-3xl flex">
                    <div className="flex items-center p-5">
                        <img className="h-[100px] w-[100px] rounded-lg" src={`http://localhost:4000/${props.image.substring(7)}`} alt="" />
                    </div>

                    <div className="">
                        <div className="mt-5">
                            <div className="font-black text-lg">{props.product_name}</div>
                            <div>Rp. {props.price.toLocaleString()}</div>
                        </div>
                        <div className="flex gap-5 mt-2">
                            <RoundButton text="-" />
                            <div className="flex items-center text-md">x 1</div>
                            {/* <RoundButton onClick={ } text="+" /> */}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default CartCard