import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { calTotalPrice, removeFromBasket } from "./CoffeeSlice";
import { Toaster, toast } from "react-hot-toast";
import Operations from "./Operations";
import { Fragment, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Beverage() {
  const addedProducts = useSelector((state) => state.coffee.addedProducts);
  const allProducts = useSelector((state) => state.coffee.allProducts);
  const totalPrice = useSelector((state) => state.coffee.totalPrice);
  const ResultRef = useRef(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (addedProducts && addedProducts.length > 0) {
      ResultRef.current = 0;
      addedProducts.forEach((item) => {
        if (addedProducts.length > 1) {
          ResultRef.current += item.price * item.count;
        }
        if (addedProducts.length === 1) {
          ResultRef.current = item.price * item.count;
        }
      });
      dispatch(calTotalPrice(ResultRef.current));
    }
  }, [dispatch, allProducts]);
  return (
    <>
      <Toaster position="top-right" />{" "}
      <Header title={"Beverages"} icon1={"back"} icon2={"beverage"} />
      <div className="flex flex-col items-center justify-center min-h-dvh h-fit gap-4 w-[100%] max-w-[600px] left-0 right-0 m-auto p-3 overflow-y-scroll pt-[70px] pb-[110px] bg-gray-100">
        {addedProducts === null || addedProducts.length === 0 ? (
          <div className="flex flex-row  justify-center items-center gap-2.5 border border-gray-300 rounded-[10px] pt-1.5 pb-1.5 pl-3 pr-3 w-full">
            <svg className="size-7 text-gray-500">
              <use href="/sprite.svg#beverage" />
            </svg>
            <p className="text-gray-600">No Selected Beverage.</p>
          </div>
        ) : (
          addedProducts.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className="flex flex-row  justify-between items-center gap-2.5 border border-gray-300 rounded-[10px] pt-1.5 pb-1.5 pl-3 pr-3  w-full p-4">
                  {/* img + product */}
                  <div className="flex flex-row gap-3 items-center grow-1">
                    <LazyLoadImage
                      className="size-13 rounded-full"
                      src={item.src}
                      placeholderSrc="/small.jpg"
                    />
                    {/* <img
                      className="size-13 rounded-full"
                      src={item.src}
                      alt=""
                    /> */}
                    {/* product info */}
                    <div className="flex flex-col">
                      <p className="font-semibold text-emerald-600 whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] sm:whitespace-normal sm:overflow-visible sm:w-full sm:text-center">
                        {item.name}
                      </p>
                      <div className="flex flex-col">
                        <p className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] sm:whitespace-normal sm:overflow-visible sm:w-full sm:text-center mr-4">
                          {item.type}
                        </p>
                        <p className="text-black font-bold">
                          Price: {item.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* count + delete */}
                  <Operations
                    dispatch={dispatch}
                    removeFromBasket={removeFromBasket}
                    toast={toast}
                    item={item}
                  />
                </div>
              </Fragment>
            );
          })
        )}
        {addedProducts.length === 0 ? null : (
          <div className="flex flex-row  justify-center items-center bg-emerald-500 pt-1.5 pb-1.5 pl-3 pr-3 rounded-[10px] text-2xl gap-1.5">
            <p className="text-white font-bold">Total:</p>
            <div className="text-white font-bold  flex flex-row items-center gap-1">
              <p>{totalPrice.toFixed(1)}</p>
              <svg className="size-9 text-white">
                <use href="/sprite.svg#coin" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Beverage;
