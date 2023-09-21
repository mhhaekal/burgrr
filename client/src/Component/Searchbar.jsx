const Searchbar = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.onChange}
        placeholder="Search here"
        className="input bg-green-900 w-[500px] text-white placeholder:text-white"
        value={props.value}
      />
    </div>
  );
};

export default Searchbar;
