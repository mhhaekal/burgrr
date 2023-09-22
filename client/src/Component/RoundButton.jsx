const RoundButton = (props) => {
    return (
        <div>

            <button onClick={props.onClick} className={`btn w-[50px] font-black rounded-full text-4xl text-white bg-green-600 hover:bg-green-600 ${props.style}`}>{props.text}</button>

        </div>
    )
}

export default RoundButton