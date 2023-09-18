import Button from "./Button"

const CategoryCard = (props) => {
    return (

        <div>

            <div className="flex justify-center">
                <Button style="btn bg-green-200 hover:bg-green-200 text-bold text-xl w-[200px] h-[80px] rounded-full" text={props.name} />
            </div>
            {/* 
            <div className="flex justify-center py-5 mx-5 rounded-3xl bg-green-200 text-l font-bold">
                {props.name}
            </div> */}
        </div>
    )
}

export default CategoryCard