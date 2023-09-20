const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.style}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
