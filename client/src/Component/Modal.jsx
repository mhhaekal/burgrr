import Button from "./Button"
import Input from "./Input"

const Modal = () => {
    return (
        <div>
            <button className="btn rounded-full text-3xl bg-green-600 text-white hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>+</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box bg-green-600 w-[400px] ">

                    <h3 className="font-bold text-4xl text-white">New Product</h3>

                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white"> Product Name</div>
                            <Input type={"text"} style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white">Product Image</div>
                            <Input type={"file"} style={"file-input w-full"} />
                        </div>
                        <div>
                            <div className="text-white">Product Price</div>
                            <Input type={"currency"} style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white">Product Category</div>
                            <select className="select select-bordered w-full">
                                <option disabled selected></option>
                                <option>Burgrr</option>
                                <option>Fries</option>
                                <option>Chicken</option>
                                <option>Fish</option>
                                <option>Snacks</option>
                            </select>
                        </div>
                        <div>
                            <div className="text-white">Description</div>
                            <div><textarea className="w-full pl-4 pt-2" cols="30" rows="5"></textarea></div>
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

export default Modal