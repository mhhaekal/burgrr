import { Link } from "react-router-dom";

const SortButton = (props) => {
  return (
    <div>
      {/* <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn bg-green-600 hover:bg-green-600 text-white">
          Sort
        </label> */}
      {/* <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          onChange={props.onChange}
        >
          <li value={props.value1}>
            <a>A - Z</a>
          </li>
          <li value={props.value2}>Z - A</li>
        </ul> */}
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
