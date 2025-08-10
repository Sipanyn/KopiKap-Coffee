import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";
function Add({ dispatch, addToBasket, item }) {
  const addedProducts = useSelector((state) => state.coffee.addedProducts);
  const handleClick = () => {
    dispatch(addToBasket(item));
    {
      addedProducts.some((addeditem) => addeditem.id === item.id)
        ? toast.success("Removed from your beverages!", { icon: "❌" })
        : toast.success("Added to your beverages!");
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      {addedProducts.some((addeditem) => addeditem.id === item.id) ? (
        <div
          onClick={handleClick}
          className=" w-[80%] p-1.5 bg-red-400 rounded-md text-white cursor-pointer flex justify-center items-center gap-2"
        >
          <p className="font-bold">Remove</p>
          <svg className="size-[25px]">
            <use href="/sprite.svg#beverage" />
          </svg>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className=" w-[80%] p-1.5 bg-emerald-400 rounded-md text-white cursor-pointer flex justify-center items-center gap-2"
        >
          <p className="font-bold">Add</p>
          <svg className="size-[25px]">
            <use href="/sprite.svg#beverage" />
          </svg>
        </div>
      )}
    </>
  );
}

export default Add;
