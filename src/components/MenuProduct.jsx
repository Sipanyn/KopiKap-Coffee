import { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Detail from "./Detail";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "./CoffeeSlice";
import ProgressiveImg from "./ProgressiveImg";

function MenuProduct() {
  const [selectNav, setSelectNav] = useState("Cappuccino");
  const [productInfo, setProductInfo] = useState(null);
  const [detailClose, setDetailClose] = useState(true);
  const allProducts = useSelector((state) => state.coffee.allProducts);
  const dispatch = useDispatch();

  return (
    <div className="overflow-y-hidden">
      <Header title={"Kopi Kap"} icon1={"seed"} icon2={"coffee"} />
      <div className="flex flex-col items-center  h-dvh max-h-fit gap-4 w-[100%] max-w-[600px] left-0 right-0 m-auto p-3 pt-[70px] bg-gray-100">
        {/* banner */}
        <div className="fixed top-[70px] w-[75%] max-w-[310px] h-[150px]">
          <img
            className="h-full w-full"
            src="/images/88ea1ca2dd6dde0d8ff58a96b7e4f98d.jpg"
            alt="banner"
          />
        </div>
        {/* navbar */}
        <NavBar setSelectNav={setSelectNav} />
        {/* products */}
        <div className="flex flex-wrap gap-4 mt-3 justify-center overflow-y-scroll no-scrollbar pb-[80px]">
          {allProducts?.map((item) =>
            item.name === selectNav ? (
              <div
                key={item.id}
                className="flex flex-col p-3 bg-white rounded-[10px] w-[160px]"
              >
                {/* Image + rating */}
                <div className="p-3 relative">
                  <p className="absolute left-[12px] top-[12px] flex flex-row gap-1.5 pl-2 pr-4 bg-gray-500/50 backdrop-blur-xs rounded-tl-[10px] rounded-br-[10px] text-white">
                    <img src="/images/furnitur-icon.svg" alt="" />
                    {item.rate}
                  </p>
                  {/* <img className="rounded-xs" src={item.src} alt="img" /> */}
                  <ProgressiveImg
                    key={item.id}
                    lowSrc={"/images/panda.jpeg"}
                    highSrc={item.src}
                  />
                </div>
                {/* Title */}
                <p className="font-semibold">{item.name}</p>
                {/* Type */}
                <p className="text-gray-500">{item.type}</p>
                {/* Price + buttons */}
                <div className="flex flex-row justify-between items-center">
                  <p className="font-semibold">$ {item.price}</p>
                  <div className="flex flex-row items-center gap-1.5">
                    <svg
                      onClick={() => {
                        setProductInfo((pre) => item),
                          setDetailClose((pre) => !pre);
                      }}
                      className="size-[50px] p-[9px] bg-inherit rounded-2xl text-emerald-500 cursor-pointer"
                    >
                      <use href="/sprite.svg#open" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      {productInfo && !detailClose && (
        <Detail item={productInfo} setDetailClose={setDetailClose} />
      )}
    </div>
  );
}

export default MenuProduct;
