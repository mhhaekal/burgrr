import Button from "../Button"
import Input from "../Input"

const ModalNewCat = () => {
    return (
        <div>
            {/* <button className="btn rounded-full text-3xl bg-green-600 text-white hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>+</button> */}
            <Button style={"btn bg-green-900 hover:bg-green-900 text-bold text-xl w-[180px] h-[80px] text-white rounded-full"} text={"Add new +"} onClick={() => document.getElementById('my_modal_3').showModal()} />

            <dialog id="my_modal_3" className="modal">

                <div className="modal-box bg-green-600 w-[400px] ">

                    <h3 className="font-bold text-4xl text-white">New Category</h3>

                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white pb-2"> Category Name</div>
                            <Input type={"text"} style={"input w-full"} />
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

export default ModalNewCat