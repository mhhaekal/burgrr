import RoundButton from "./RoundButton"

const CartCard = () => {

    return (
        <div>
            <div className="px-5">

                <div className="bg-white border rounded-3xl flex">
                    <div className="flex items-center p-5">
                        <img className="h-[100px] w-[100px] rounded-lg" src="https://bakeitwithlove.com/wp-content/uploads/2021/05/McDonalds-The-Travis-Scott-Burger-sq.jpg" alt="" />
                    </div>

                    <div className="">
                        <div className="mt-5">
                            <div className="font-black text-lg">Cheese Burgrr</div>
                            <div>Rp 40,000</div>
                        </div>
                        <div className="flex gap-5 mt-2">
                            <RoundButton text="-" />
                            <div className="flex items-center text-md">x 1</div>
                            <RoundButton text="+" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default CartCard