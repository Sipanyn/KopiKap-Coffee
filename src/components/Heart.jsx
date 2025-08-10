import { useEffect, useState } from "react";
import AddMessage from "./AddMessage";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
function Heart({ dispatch, addToFavorites, item }) {
  const allfavProducts = useSelector((state) => state.coffee.favProducts);
  // const [wasFavorited, setWasFavorited] = useState(false);

  const handleClick = () => {
    dispatch(addToFavorites(item));
    {
      allfavProducts.some((favitem) => favitem.id === item.id)
        ? toast.success("removed from favorites!", {
            icon: "💔",
          })
        : toast.success("Added to favorites!", {
            icon: "❤️",
          });
    }
  };

  return (
    <>
      <svg
        onClick={handleClick}
        className="size-[45px] p-[9px] w-[20%] text-black rounded-md cursor-pointer"
      >
        <use
          href={
            allfavProducts.some((favitem) => favitem.id === item.id)
              ? "/sprite.svg#redHeart"
              : "/sprite.svg#heart"
          }
        />
      </svg>
    </>
  );
}

export default Heart;
