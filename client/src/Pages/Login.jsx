import Input from "../Component/Input";
import Button from "../Component/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onLoginAsync } from "../redux/Features";
import { Toaster } from "react-toastify";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.user);

  const handleLogin = (inputEmail, inputPassword) => {
    console.log(inputEmail);
    console.log(inputPassword);
    dispatch(onLoginAsync(inputEmail, inputPassword));
  };

  useEffect(() => {
    if (role && role === "admin") {
      navigate("/admin");
    } else if (role && role === "cashier") {
      navigate("/cashier");
    }
  }, [role]);

  return (
    <div>
      <div className="h-screen flex">
        <div className="bg-green-600 w-[60%]">
          <div className="grid place-items-center h-full gap-0  text-3xl text-white">
            <div className="w-[400px] flex flex-col gap-2">
              <div className="">WELCOME TO</div>
              <div className="font-black italic">BURGRR..</div>
              <div>MAY I TAKE YOUR</div>
              <div className="font-black italic">ORDRR...</div>
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          <div className="grid place-items-center h-full">
            <div className="w-[400px] flex flex-col gap-5">
              <div className="text-4xl font-black flex justify-center">Log In</div>

              <div>
                <div className="flex justify-start text-2xl font-medium">Email</div>
                <Input
                  type={"email"}
                  placeholder={"type here"}
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  style={`input input-bordered w-full bg-green-100`}
                />
              </div>
              <div>
                <div className="flex justify-start text-2xl font-medium">Password</div>
                <Input
                  type={"password"}
                  placeholder={"type here"}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  style={`input input-bordered w-full bg-green-100`}
                />
              </div>

              <div className="">
                <Button
                  text={"Login"}
                  onClick={() => handleLogin(inputEmail, inputPassword)}
                  style={`btn w-[400px] bg-green-600 hover:bg-green-600 text-white text-xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
