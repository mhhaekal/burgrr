import RoundButton from "./RoundButton"
import axios from "axios"
import toast from "react-hot-toast"

const CartCard = (props) => {

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
                            <div className="flex items-center text-md">x {props.quantity}</div>
                            {/* <RoundButton onClick={ } text="+" /> */}
                            {props.button}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default CartCard