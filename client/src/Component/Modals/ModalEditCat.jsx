import { GrFormEdit } from 'react-icons/gr';
import Button from "../Button"
import Input from "../Input"

const ModalEditCat = (props) => {
    const { klik } = props
    console.log(klik);
    return (
        <div onClick={() => props.klik(props.id)}>
            <GrFormEdit size={45} className='btn bg-slate-200  p-0 rounded-full' onClick={() => document.getElementById('my_modal_4').showModal()} />
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-green-600 w-[400px] ">
                    <h3 className="font-bold text-4xl text-white">Edit Category</h3>
                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white pb-2"> Category Name</div>
                            <Input type={"text"} style={"input w-full"} />
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <Button text={"cancel"} style={"btn bg-black text-white border-black hover:bg-black hover:border-black"} />
                        </form>
                        <Button text="Delete" style="btn bg-red-600 text-white border-red-600 hover:bg-red-600 hover:border-black" />
                        <Button text="Submit" style="btn bg-white text-black border-white hover:bg-white hover:border-white" />
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default ModalEditCat