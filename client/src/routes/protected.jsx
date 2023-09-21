import PacmanLoader from "react-spinners/PacmanLoader";
const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { useNavigate } = require("react-router-dom");

const Protected = ({ children, adminPage, cashierPage }) => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.user);
  console.log(role);
  useEffect(() => {
    if (role === "cashier" && adminPage)
      return (
        setTimeout(() => {
          setLoading(false);
        }, 1500),
        nav("/cashier")
      );
    if (role === "admin" && cashierPage)
      return (
        setTimeout(() => {
          setLoading(false);
        }, 1500),
        nav("/admin")
      );
    // setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [role, children]);

  return (
    <div className="">
      {loading ? (
        <div className="h-screen flex justify-center items-center duration-300 transition-all ease-in-out">
          <PacmanLoader color="#16a34a" size={80} cssOverride={{}} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Protected;
