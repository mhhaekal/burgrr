import { GrFormEdit } from "react-icons/gr";
import Button from "../Button";
import Input from "../Input";

const ModalEditCat = () => {
  return (
    <div>
      {/* <button className="btn rounded-full text-3xl bg-green-600 text-white hover:bg-green-600" onClick={() => document.getElementById('my_modal_1').showModal()}>+</button> */}
      {/* <GrFormEdit size={45} className='btn bg-slate-200  p-0 rounded-full' onClick={() => document.getElementById('my_modal_4').showModal()} /> */}

      {/* <Button style={"btn bg-green-900 hover:bg-green-900 text-bold text-xl w-[180px] h-[80px] text-white rounded-full"} text={"Add new +"} click={() => document.getElementById('my_modal_4').showModal()} /> */}

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
              {/* if there is a button in form, it will close the modal */}
              <Button
                text={"cancel"}
                style={"btn bg-black text-white border-black hover:bg-black hover:border-black"}
              />
            </form>

            <Button
              text="Delete"
              style="btn bg-red-600 text-white border-red-600 hover:bg-red-600 hover:border-black"
            />
            <Button
              text="Submit"
              style="btn bg-white text-black border-white hover:bg-white hover:border-white"
            />
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default ModalEditCat;
