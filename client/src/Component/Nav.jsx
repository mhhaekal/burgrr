import React from "react";
import { Link } from "react-router-dom";

//react icon
import { TbLogout } from "react-icons/tb";
import { MdRestaurantMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../redux/Features";

const Nav = () => {
  const { image } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center h-full">
      <div className="w-[100px] h-screen bg-green-600 flex flex-col justify-between">
        <div className="flex justify-center">
          <Link to={"/cashier/profile"}>
            <div className=" mt-5 w-[80px] h-[80px] border rounded-full">
              <img
                src={`http://localhost:4000/${image.substring(6)}`}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-10 items-center mb-10">
          <Link to={"/cashier"}>
            <div>
              <MdRestaurantMenu className="text-5xl text-white" />
            </div>
          </Link>

          <Link to={"/login"}>
            <div>
              <TbLogout onClick={() => dispatch(onLogout())} className="text-5xl text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
