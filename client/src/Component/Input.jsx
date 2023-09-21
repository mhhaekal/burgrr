const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.style}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
