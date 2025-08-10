import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SvgSpinnersPulseRings2 } from "../components/SvgSpinnersPulseRings2";
function WellcomePage() {
  const [isPending, setIspending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIspending(false);
      navigate("/start");
    }, 3000);
  });
  return (
    <div className="bg-emerald-500 h-dvh w-full flex flex-col gap-1.5 justify-center items-center">
      <svg className="size-[50px]">
        <use href="./sprite.svg#coffee" />
      </svg>
      <p className="text-white font-bold">Kopi Kap</p>
      {isPending && <SvgSpinnersPulseRings2 />}
    </div>
  );
}

export default WellcomePage;
