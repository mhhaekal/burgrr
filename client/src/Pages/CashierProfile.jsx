import Nav from "../Component/Nav";
import Button from "../Component/Button";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Component/Input";
import { Instance } from "../api/instance";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


const CashierProfile = () => {
  const { id, image, userName, email } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([])

  const inputImage = useRef(null);

  const onSelectImages = (event) => {
    try {
      const files = [...event.target.files]
      files.forEach(value => {
        if (value.size > 1000000 || value.type.split('/')[0] !== 'image') throw { message: `${value.name} Size Too Large / File Must be Image` }
      })

      setImages(files)
    } catch (error) {
      alert(error.message)
    }
  }

  const reqChangePic = async () => {
    try {
      // const image = (inputImage.current.files[0]);
      const fd = new FormData();
      console.log(image);
      // fd.append('data', JSON.stringify(image))
      // console.log(fd);
      images.forEach(value => {
        fd.append('images', value)
      })
      const response = await axios.patch(`${process.env.REACT_APP_URL}users/change-picture/${id}`, fd)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const reqChangePass = async () => {
    try {
      console.log(">>>>");
      console.log(email);
      const res = await Instance().post(`users/req`, { email });
      console.log(res);
      if (!res.data.isError) {
        toast.success(res.data.message);
      }
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  console.log(id);

  useEffect(() => {

  }, [isLoading]);
  return (
    <div>
      <div className="flex h-[screen]">
        <Nav />

        <div>
          <div className="text-5xl font-black p-10">Cashier Profile</div>

          <div className="pl-10  justify-between flex gap-10">
            <div className="w-[400px] h-[400px] border-2 rounded-full">
              <img
                src={`http://localhost:4000/${image.substring(6)}`}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-20 w-[800px] text-2xl">
              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>Username</div>
                <div>{userName}</div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>Email</div>
                <div>{email}</div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>profile image</div>
                <div className="flex gap-5">
                  {/* <Input ref={inputImage} type={"file"} style={`file-input border border-black w-52`} /> */}
                  <input type='file' onChange={(e) => onSelectImages(e)} className='flex mb-3 mt-1 px-3 py-2 bg-green-600 w-[230px] border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1' />
                  <Button onClick={reqChangePic} text="change image" style="btn mb-3" />
                </div >
              </div >

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>password</div>
                <Button onClick={reqChangePass} text="change password" style={`btn mb-3`} />
              </div>
            </div >
          </div >
        </div >
      </div >
    </div >
  );
};

export default CashierProfile;