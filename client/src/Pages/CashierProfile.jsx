import Nav from "../Component/Nav";
import Button from "../Component/Button";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Component/Input";
import { Instance } from "../api/instance";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const CashierProfile = () => {
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
      <div className="flex h-[screen]">
        <Nav />

        <div>
          <div className="text-5xl font-black p-10">Cashier Profile</div>

          <div className="pl-10 w-[1000px] justify-between flex">
            <div className="w-[400px] h-[400px] border-2 rounded-full">
              <img
                src={`http://localhost:4000/${image.substring(6)}`}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-20 w-[500px] text-2xl">
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
                  <Input type={"file"} style={`file-input border border-black w-52`} />
                  <Button text="change image" style="btn mb-3" />
                </div>
              </div>

              <div className="flex justify-between border-4 border-white border-b-green-600">
                <div>password</div>
                <Button onClick={reqChangePass} text="change password" style={`btn mb-3`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierProfile;
