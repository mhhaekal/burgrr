import toast from "react-hot-toast"
import Button from "../Button"
import Input from "../Input"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
const ModalNew = () => {
    const inputProductName = useRef()
    const inputPrice = useRef()
    const inputDescription = useRef()
    const inputCategory = useRef()
    const [image, setImage] = useState([])
    const [data, setData] = useState([])
    const [category, setCategory] = useState([]);
    const onGetCategory = async () => {
        try {
            const category = await axios.get(`${process.env.REACT_APP_URL}products/category`);
            setCategory(category.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const onSelectImages = (product) => {
        try {
            const files = [...product.target.files]
            files.forEach(value => {
                if (value.size > 1000000 || value.type.split('/')[0] !== 'image') throw { message: `${value.name} Size Too Large / File Must be Image` }
            })
            setImage(files)
        } catch (error) {
            alert(error.message)
        }
    }
    const onCreateProduct = async () => {
        try {
            const inputs = {
                product_name: inputProductName.current.value,
                price: inputPrice.current.value,
                description: inputDescription.current.value,
                category_id: Number(inputCategory.current.value),
            }
            const fd = new FormData()
            fd.append('data', JSON.stringify(inputs))
            image.forEach(value => {
                fd.append('images', value)
            })
            if (
                inputs.product_name === "" ||
                inputs.price === "" ||
                inputs.description === "" ||
                inputs.category_id === "" ||
                inputs.image === ""
            ) {
                toast.error("Please Fill All Data")
            } else {
                const data = await axios.post(`${process.env.REACT_APP_URL}products/add`, fd)
                toast.success('Create Products Success')
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        onGetCategory();
    }, []);
    return (
        <div>
            <button className="btn rounded-full text-3xl bg-green-600 text-white hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>+</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-green-600 w-[400px] ">
                    <h3 className="font-bold text-4xl text-white">New Product</h3>
                    <div className="flex flex-col gap-5 mt-5">
                        <div>
                            <div className="text-white pb-2"> Product Name</div>
                            <Input
                                ref={inputProductName}
                                type={"text"}
                                style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white pb-2">Product Image</div>
                            <Input
                                onChange={(e) => onSelectImages(e)}
                                type={"file"}
                                style={"file-input w-full"} />
                        </div>
                        <div>
                            <div className="text-white pb-2">Product Price</div>
                            <Input
                                ref={inputPrice}
                                type={"currency"}
                                style={"input w-full"} />
                        </div>
                        <div>
                            <div className="text-white pb-2">Product Category</div>
                            <select
                                ref={inputCategory}
                                className="select select-bordered w-full">
                                <option disabled selected></option>
                                {
                                    category.map((value, index) => {
                                        return (
                                            <option value={value.id}>{value.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <div className="text-white pb-2">Description</div>
                            <div><textarea ref={inputDescription} className="w-full pl-4 pt-2" cols="30" rows="5"></textarea></div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div className="flex gap-5">
                                <Button text={"cancel"} style={"btn bg-black text-white border-black hover:bg-black hover:border-black"} />
                                <button onClick={onCreateProduct} className="btn bg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default ModalNew