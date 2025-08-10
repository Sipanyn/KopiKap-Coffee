import { useEffect, useRef, useState } from "react";
import { decreaseCount, increaseCountfun } from "./CoffeeSlice";

function Operations({ dispatch, removeFromBasket, toast, item }) {
  const [count, setCount] = useState(1);
  const countRef = useRef(1);
  useEffect(() => {
    setCount(item.count);
    countRef.current = item.count;
  }, [item.count]);
  return (
    <div className="flex flex-row gap-1.5">
      <div className="flex flex-row gap-2 items-center">
        <p
          onClick={() => {
            {
              count > 1 && setCount((count) => count - 1);
              countRef.current > 1 && countRef.current--;
              {
                count > 1 && dispatch(decreaseCount({ item, countRef }));
              }
            }
          }}
          className="text-white size-8 rounded-[10px] bg-red-500 flex justify-center items-center font-bold select-none"
        >
          -
        </p>
        <p> {count}</p>
        <p
          onClick={() => {
            setCount((count) => count + 1);
            countRef.current++;
            dispatch(increaseCountfun({ item, countRef }));
          }}
          className="text-white size-8 rounded-[10px] bg-emerald-500 flex justify-center items-center font-bold select-none"
        >
          +
        </p>
      </div>

      {/* delete button */}
      <svg
        onClick={() => {
          dispatch(removeFromBasket(item));
          toast.success("removed from your beverages!", {
            icon: "❌",
          });
        }}
        className="bg-zinc-300 w-[40px] h-[40px] p-0.5 rounded-[10px] text-white  flex justify-center items-center"
      >
        <use href="/sprite.svg#delete" />
      </svg>
    </div>
  );
}

export default Operations;
