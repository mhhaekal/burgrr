import Button from "../Button"
import Input from "../Input"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
import toast from "react-hot-toast"
const ModalNewCat = () => {
    const inputCategoryName = useRef()
    const [category, setCategory] = useState([]);
    const onCreateCategory = async () => {
        try {
            const inputs = {
                name: inputCategoryName.current.value
            }
            if (inputs.name === "") {
                toast.error("Please Fill All Data")
            } else {
                console.log(inputs);
                const data = await axios.post(`${process.env.REACT_APP_URL}products/addcategory`, inputs)
                toast.success('Create Category Success')
                console.log(data);
                onGetCategory()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onGetCategory = async () => {
        try {
            const category = await axios.get(`${process.env.REACT_APP_URL}products/category`);
            setCategory(category.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Button style={"btn bg-green-900 hover:bg-green-900 text-bold text-xl w-[180px] h-[80px] text-white rounded-full"} text={"Add new +"} onClick={() => document.getElementById('my_modal_3').showModal()} />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-green-600 w-[400px] ">
                    <h3 className="font-bold text-4xl text-white">New Category</h3>
                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white pb-2"> Category Name</div>
                            <Input
                                ref={inputCategoryName}
                                type={"text"}
                                style={"input w-full"} />
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div className="flex gap-5">
                                <Button text={"cancel"} style={"btn bg-black text-white border-black hover:bg-black hover:border-black"} />
                                <button onClick={onCreateCategory} className="btn bg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default ModalNewCat