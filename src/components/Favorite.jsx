import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { Toaster, toast } from "react-hot-toast";
import { addToBasket, removeFromFavorites } from "./CoffeeSlice";
import Add from "./Add";
function Favorite() {
  const allfavProducts = useSelector((state) => state.coffee.favProducts);
  const dispatch = useDispatch();
  return (
    <>
      <Toaster position="top-right" />{" "}
      <Header title={"Favorites"} icon1={"back"} icon2={"beverage"} />
      <div className="no-scrollbar flex flex-col items-center justify-center min-h-dvh h-fit gap-4 w-[100%] max-w-[600px] left-0 right-0 m-auto p-3 overflow-y-scroll pt-[70px] pb-[110px] bg-gray-100">
        {allfavProducts === null || allfavProducts.length === 0 ? (
          <div className="flex flex-row  justify-center items-center gap-2.5 border border-gray-300 rounded-[10px] pt-1.5 pb-1.5 pl-3 pr-3 w-full">
            <svg className="size-7 text-gray-500">
              <use href="/sprite.svg#beverage" />
            </svg>
            <p className="text-gray-600">No Favorite Beverage.</p>
          </div>
        ) : (
          allfavProducts.map((item) => {
            return (
              <div
                key={item.id}
                className="no-scrollbar overflow-x-hidden flex flex-col  justify-between items-center gap-2.5 border border-gray-300 rounded-[10px] pt-1.5 pb-1.5 pl-3 pr-3  w-full p-4"
              >
                {/* img + product */}
                <div className="flex flex-row gap-3 items-center w-full">
                  <img className="size-13 rounded-full" src={item.src} alt="" />
                  {/* product info */}
                  <div className="flex flex-col ">
                    <p className="font-semibold text-emerald-600 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:whitespace-normal sm:overflow-visible sm:w-full ">
                      {item.name}
                    </p>
                    <div className="flex flex-col">
                      <p className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[210px] sm:whitespace-normal sm:overflow-visible sm:w-full mr-4">
                        {item.type}
                      </p>
                      <p className="text-black font-bold">
                        Price: {item.price}$
                      </p>
                    </div>
                  </div>
                </div>
                {/* add + delete */}
                <div className="flex flex-row w-full justify-between gap-4.5">
                  {/* add */}
                  <Add
                    dispatch={dispatch}
                    addToBasket={addToBasket}
                    item={item}
                  />

                  {/* delete button */}
                  <svg
                    onClick={() => {
                      dispatch(removeFromFavorites(item));
                      toast.success("removed from favorites!", { icon: "💔" });
                    }}
                    className="bg-zinc-300 w-[40px] h-[40px] p-0.5 rounded-[10px] text-white  flex justify-center items-center cursor-pointer"
                  >
                    <use href="/sprite.svg#delete" />
                  </svg>
                </div>
              </div>
            );
          })
        )}
        {/* beverage */}
      </div>
    </>
  );
}

export default Favorite;
