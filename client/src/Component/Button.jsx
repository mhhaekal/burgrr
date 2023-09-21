const Button = (props) => {
    return (
        <div className="flex relative">
            <button onClick={props.click} className={props.style}>
                {props.text}
            </button>
            <div className="absolute -right-2">{props.item}</div>
        </div>
    )
}

export default Button