import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Instance } from "../api/instance";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { onUpdatePassword } from "../redux/Features";
// import logoburgrr from "./../../";
// import { useDispatch } from "react-redux";
// import { setFirstName } from "../../redux/Features";

export default function ChangePass() {
  const [data, setData] = useState(null);
  const [oldPassword, setOldPasword] = useState("");
  const [newPassword, setNewPasword] = useState("");
  const [conPassword, setConPasword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();

  const onVerify = async () => {
    try {
      console.log(token);
      // const verifData = await axios.get(`http://localhost:4000/users/verif/${token}`);
      // const verifData = await Instance(token).get("users/verif");
      // console.log(verifData);
      // console.log(">>>");
      // if (verifData.data.isError) return alert("Verify Failed!");
      if (!token) return toast.error;
      setTimeout(() => {
        setData(true);
        // dispatch(setFirstName(verifData.data.data));
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const onNavigate = async () => {
    try {
      const checklOldPassword = await Instance(token, oldPassword, newPassword, conPassword).get(
        `users/changepass`
      );
      console.log(checklOldPassword.data);
      if (!checklOldPassword.data.isError)
        setTimeout(() => {
          navigate("/");
        }, 2500);
      localStorage.removeItem("tokenLogin", token);
      toast.success(checklOldPassword.data.message);
    } catch (error) {
      if (error.response.data.isError) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
    // try {
    //   dispatch(onUpdatePassword(token, oldPassword, newPassword, conPassword));
    //   setTimeout(() => {
    //     navigate("/");
    //   }, []);
    //   localStorage.removeItem("tokenLogin", token);
    // } catch (error) {}
  };

  useEffect(() => {
    onVerify();
  }, []);

  if (!data)
    return (
      <div className="h-screen flex justify-center items-center duration-300 transition-all ease-in-out">
        {/* <span className="loading loading-ball loading-lg text-success"></span> */}

        <PacmanLoader color="#16a34a" size={80} cssOverride={{}} />
      </div>
    );

  return (
    <>
      <Toaster />
      <div className="container mx-auto h-screen bg-green-600">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center">
            <div className="font-bold text-4xl w-96 text-white">
              Hi plase complete the from below to change your password
            </div>
            <div className="w-[400px] flex flex-col shadow-xl h-[400px] rounded-lg backdrop-blur-sm bg-white/30 mt-10 pt-5">
              {/* <BiSolidBadgeCheck className="w-60 h-60 text-green-600" /> */}
              <div className="flex justify-center">
                <img
                  className="w-[150px] h-[50px] rounded-md"
                  src="https://i.postimg.cc/nch1D535/logoburgrr.png"
                  alt="logo-burgrr"
                />
              </div>
              <div className="w-[80%] mx-auto">
                <form action="">
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text font-bold">Old Password</span>
                    </label>
                    <input
                      type="text"
                      value={oldPassword}
                      onChange={(e) => setOldPasword(e.target.value)}
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text font-bold">New Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      value={newPassword}
                      onChange={(e) => setNewPasword(e.target.value)}
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text font-bold">Confirm New Passowrd</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      value={conPassword}
                      onChange={(e) => setConPasword(e.target.value)}
                      class="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5 h-16">
              <div
                className="btn border-none text-xl text-white bg-black h-16"
                onClick={() => onNavigate()}
              >
                Go To Dashboard!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
