import { useNavigate } from "react-router";

function Header({ icon1, icon2, title }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (icon1 === "back") {
      navigate(-1);
    }
  };
  return (
    <div className="flex flex-row justify-between items-center bg-emerald-600 text-white p-4 w-full fixed ">
      <svg className="size-5" onClick={handleClick}>
        {" "}
        <use href={`/sprite.svg#${icon1}`} />
      </svg>
      <p className="font-bold">{title}</p>

      <svg className="size-8">
        <use href={`/sprite.svg#${icon2}`} />
      </svg>
    </div>
  );
}

export default Header;
