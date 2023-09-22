const ProductCard = (props) => {
  return (
    <div>
      <div className="w-[250px] border p-5 flex flex-col gap-5 border-green-600 rounded-3xl shadow-xl my-5">
        <div className="rounded-xl w-full h-[200px]">
          <img className="w-full h-auto " src={`http://localhost:4000/${props.image.substring(7)}`} alt="Product" />
        </div>
        <div className="font-black text-lg h-[50px]">{props.name}</div>

        <div className="text-sm">{props.description}</div>

        <div className="flex justify-between">
          <div className="flex items-center text-2xl">Rp. {props.price.toLocaleString()}</div>
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
