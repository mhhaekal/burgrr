import Button from "../Button"
import Input from "../Input"

const ModalNewCashier = () => {
    return (
        <div className="text-base">
            <button className="btn rounded-full text-3xl bg-green-600 text-white hover:bg-green-600" onClick={() => document.getElementById('my_modal_5').showModal()}>+</button>
            <dialog id="my_modal_5" className="modal">

                <div className="modal-box bg-green-600 w-[400px] ">

                    <h3 className="font-bold text-4xl text-white">New Cashier</h3>

                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white pb-2"> Username</div>
                            <Input type={"text"} style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white pb-2">Email</div>
                            <Input type={"email"} style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white pb-2">Password</div>
                            <Input type={"password"} style={"input w-full"} />
                        </div>

                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Button text={"cancel"} style={"btn bg-black text-white border-black hover:bg-black hover:border-black"} />

                        </form>

                        <button className="btn bg">Submit</button>
                    </div>


                </div>

            </dialog>
        </div>
    )
}

export default ModalNewCashier