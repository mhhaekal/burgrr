import { Link } from "react-router-dom";

const SortButton = (props) => {
  return (
    <div>
      <select
        className="select select-md btn bg-green-600 hover:bg-green-600 text-white"
        name=""
        onChange={props.onChange}
        id=""
      >
        <option value={props.value1}>A-Z</option>
        <option value={props.value2}>Z-A</option>
        {/* <option value={props.value3}>Sort</option> */}
      </select>
      {/* </div> */}
    </div>
  );
};

export default SortButton;
