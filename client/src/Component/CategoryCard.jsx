import Button from "./Button"

const CategoryCard = (props) => {
    return (

        <div>

            <div className="flex justify-center">
                <Button style="btn bg-green-200 hover:bg-green-200 text-bold text-xl w-[180px] h-[80px] rounded-full" text={props.name} />
                <div className="relative">{props.edit}</div>
            </div>



        </div>
    )
}

export default CategoryCard