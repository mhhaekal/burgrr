const Button = (props) => {
    return (
        <div>
            <button onClick={props.click} className={props.style}>{props.text}</button>
        </div>
    )
}

export default Button