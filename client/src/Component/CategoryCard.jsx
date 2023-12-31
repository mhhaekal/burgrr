import Button from "./Button";
import { GrFormEdit } from "react-icons/gr";

const CategoryCard = (props) => {
  return (
    <div>
      <div className="flex justify-center">
        <Button
          style={`btn bg-green-200 hover:bg-green-200 text-bold text-xl w-[180px] h-[80px] rounded-full`}
          onClick={props.onClick}
          text={props.name}
          item={props.item}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
