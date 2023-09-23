import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Instance } from "../api/instance";
import { useDispatch } from "react-redux";
import { setUserName, setImage, setRole, setId, setEmail, setIsLogin } from "../redux/Features";

export default function Verify() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();
  const onVerify = async () => {
    try {
      console.log(token);
      // const verifData = await axios.get(`http://localhost:4000/users/verifyJWT/${token}`);
      const verifData = await Instance().get(`users/verifyJWT/${token}`);
      console.log(verifData);
      // console.log(">>>");
      if (verifData.data.isError) return alert("Verify Failed!");

      setTimeout(() => {
        setData(true);
        dispatch(setUserName(verifData.data.data.name));
        dispatch(setImage(verifData.data.data.image));
        dispatch(setRole(verifData.data.data.role));
        dispatch(setEmail(verifData.data.data.email));
        dispatch(setId(verifData.data.data.id));
        dispatch(setIsLogin(false));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const onNavigate = () => {
    navigate("/");
    localStorage.setItem("tokenLogin", token);
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
    <div className="container mx-auto h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="font-bold text-4xl">Your Account Has Been Verified!</div>
          <div className="">
            <BiSolidBadgeCheck className="w-60 h-60 text-green-600" />
          </div>
          <div className="mt-5 h-16">
            <div className="btn text-2xl text-white bg-black h-16" onClick={() => onNavigate()}>
              Go To Landing Page!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
