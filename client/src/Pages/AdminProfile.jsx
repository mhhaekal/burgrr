import Button from "../Component/Button";
import NavAdmin from "../Component/NavAdmin";
import Input from "../Component/Input";
import { useDispatch, useSelector } from "react-redux";
import { Instance } from "../api/instance";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const AdminProfile = () => {
  const { image, userName, email } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);

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
  useEffect(() => {}, [isLoading]);
  return (
    <div>
      <Toaster />
      <div className="flex h-screen">
        <NavAdmin />

        <div>
          <div className="text-5xl font-black p-10">Admin Profile</div>

          <div className="pl-10 w-[1200px] justify-between flex">
            <div className="w-[400px] h-[400px] border bg-green-200 rounded-full">
              <img
                src={`http://localhost:4000/${image.substring(6)}`}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-20 w-[700px] text-2xl">
              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>Username</div>
                <div className="mb-3">{userName}</div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>Email</div>
                <div className="mb-3">{email}</div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div className="flex items-center">profile image</div>
                <div className="mb-3">
                  <Input type={"file"} style={`file-input border border-black`} />
                </div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div className="flex items-center">password</div>
                {/* <Button
                  text={
                    isLoading ? (
                      <span class="loading loading-ring loading-xs"></span>
                    ) : (
                      "change password"
                    )
                  }
                  style={`btn mb-3`}
                  onClick={reqChangePass}
                /> */}
                <button onClick={reqChangePass} className={`btn mb-3`}>
                  {isLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    "change password"
                  )}
                  {/* <span className="loading loading-spinner loading-xs"></span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
