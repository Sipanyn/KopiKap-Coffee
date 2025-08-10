import { useDispatch } from "react-redux";
import { addToFavorites } from "./CoffeeSlice";
import Heart from "./Heart";
import { addToBasket } from "./CoffeeSlice";
import Add from "./Add";

function Detail({ item, setDetailClose }) {
  const dispatch = useDispatch();
  console.log({ item });

  return (
    <>
      createPortal(
      <div
        onClick={(event) => {
          if (
            event.target.id !== "detailBox" &&
            !event.target.closest("#detailBox")
          ) {
            setDetailClose(true);
          }
        }}
        id="detailContainer"
      >
        <div
          id="detailBox"
          className="w-[80%] max-w-[280px] p-3.5 border border-black rounded-[10px] bg-white"
        >
          <img className="m-auto size-25 mb-2" src={item.src} alt="" />
          {/* info */}
          <div>
            <p className="font-bold">{item.name}</p>
            {/* type + price */}
            <div className="flex flex-row *:text-gray-500 w-full justify-between">
              <p>{item.type}</p>
              <p>price:{item.price}$</p>
            </div>
            {/* description */}
            <div className="flex flex-col w-full">
              <h3 className="font-bold">description:</h3>
              <p className="w-full text-left text-gray-500">
                Lorem ipsum dolor sit amet adipisicing consectetur adipisicing
                elit. Vel, boro blanditiis
              </p>
            </div>
            {/* addbtn + favbtn */}
            <div className="flex flex-row items-center justify-between">
              <Heart
                item={item}
                addToFavorites={addToFavorites}
                dispatch={dispatch}
              />
              <Add dispatch={dispatch} addToBasket={addToBasket} item={item} />
            </div>
          </div>
        </div>
      </div>
      , document.getElementById("detail") );
    </>
  );
}

export default Detail;
