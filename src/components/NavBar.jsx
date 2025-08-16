import React, { useState } from "react";
function NavBar({ setSelectNav }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = ["Cappuccino", "Macchiato", "Latte", "Decaf"];

  return (
    <div className="bg-gray-100 h-fit w-full block pt-[195px]">
      <ul className="flex flex-row justify-around gap-1.5 *:pt-3 *:pb-3 *:pl-5  *:pr-5 *:rounded-md overflow-x-scroll no-scrollbar pr-5 pl-5 font-bold *:bg-white *:text-gray-500 *:cursor-grab">
        {items.map((item, i) => {
          return (
            <li
              onClick={() => {
                setActiveIndex(i);
                setSelectNav(item);
              }}
              className={`item ${
                i === activeIndex ? "active" : ""
              } scale-[0.7] sm:scale-100`}
              key={i}
            >
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
