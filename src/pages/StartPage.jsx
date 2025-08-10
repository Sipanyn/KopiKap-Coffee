import { useNavigate } from "react-router";
import useProduct from "../components/useProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../components/CoffeeSlice";
function StartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPending, isError, isSuccess, data } = useProduct();
  const allProducts = useSelector((state) => state.coffee.allProducts);
  const [isReady, setIsReady] = useState(false);
  // useEffect(() => {
  //   if (isSuccess) {
  //     let flatArray = Object.values(data).flat();
  //     dispatch(addAllProducts(flatArray));
  //     // localStorage.setItem("AllProducts", JSON.stringify(flatArray));
  //   }
  // }, [data, dispatch, isSuccess]);
  useEffect(() => {
    if (isSuccess) {
      let flatArray = Object.values(data).flat();
      dispatch(addAllProducts(flatArray));
      localStorage.setItem("localProducts", JSON.stringify(flatArray));
      // setIsReady(true); // mark ready once data is dispatched
    }
  }, [data, dispatch, isSuccess]);
  useEffect(() => {
    if (isSuccess && allProducts?.length > 0) {
      setTimeout(() => {
        setIsReady(true);
      }, 3000);
    }
  }, [isSuccess, allProducts]);

  return (
    // img + text
    <div className="flex flex-col h-dvh max-h-fit w-full  relative text-white bg-white">
      {/* image */}
      <div className="h-[70%] w-full bg-[url(/images/unsplash_c2Y16tC3yO8.jpeg)] bg-cover bg sm:bg-[url(/images/731c28532cc8d3c5e26e87d1c5aa0da6.jpg)] sm:bg-contain bg-center bg-no-repeat"></div>
      {/* text */}
      <div className="h-[30%] flex flex-col justify-between items-center gap-1.5  w-full bg-gradient-to-b from-emerald-700/90 via-emerald-800 to-emerald-950 pb-2.5 pt-2.5  bottom-0">
        <p className="font-semibold text-2xl text-center">
          Elevate your coffee<br></br> experience at<br></br> Kopi Kap
        </p>

        <p className="text-sm text-center">Where coffee meets comfort</p>

        <button
          onClick={() => isReady && navigate("/kopikap")}
          disabled={!isReady}
          className="bg-white rounded-2xl text-black w-[80%] max-w-[500px] p-4 cursor-pointer hover:bg-emerald-100"
        >
          {!isReady ? "Please Wait..." : "Get Started"}
          {isError && "some error happpens :("}
        </button>
      </div>
    </div>
  );
}

export default StartPage;
