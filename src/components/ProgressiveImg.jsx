import useProgressiveImg from "./useProgressiveImg";
function ProgressiveImg({ lowSrc, highSrc }) {
  const [src, blur] = useProgressiveImg(lowSrc, highSrc);

  return (
    <img
      src={src}
      alt=""
      style={{
        width: "104.85",
        height: "112",
        filter: blur ? "blur(10px)" : "none",
        transition: "filter 0.3s ease-out",
      }}
    />
  );
}
export default ProgressiveImg;
