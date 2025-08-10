import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Footer() {
  const allfavProducts = useSelector((state) => state.coffee.favProducts);
  const addedProducts = useSelector((state) => state.coffee.addedProducts);
  return (
    <div className="rounded-2xl fixed w-[90%] left-0 right-0 m-auto bottom-[10px] bg-white flex flex-row items-center justify-between sm:w-[600px] ">
      {/* home */}

      <div className="rounded-2xl ">
        <NavLink
          to="/kopikap"
          end
          className={({ isActive }) =>
            isActive ? "bg-emerald-500 text-white" : ""
          }
        >
          <svg className="size-[60px] p-[9px] bg-inherit text-inherit rounded-2xl">
            <use href="/sprite.svg#home" />
          </svg>
        </NavLink>
      </div>
      {/* heart */}
      <div className="rounded-2xl">
        <NavLink
          to="/kopikap/favorites"
          className={({ isActive }) =>
            isActive ? "bg-emerald-500 text-white" : ""
          }
        >
          <svg className="size-[60px] p-[9px] bg-inherit text-inherit rounded-2xl">
            <use
              href={
                allfavProducts.length > 0
                  ? "/sprite.svg#redHeart"
                  : "/sprite.svg#heart"
              }
            />
          </svg>
        </NavLink>
      </div>
      {/* beverage */}
      <div className="relative rounded-2xl">
        <p className="text-white bg-red-600/90 font-bold bg pl-2 pr-2 rounded-full  absolute bottom-0">
          {addedProducts.length === 0 ? null : addedProducts.length}
        </p>
        <div className="rounded-2xl">
          <NavLink
            to="/kopikap/beverages"
            className={({ isActive }) =>
              isActive ? "bg-emerald-500 text-white" : ""
            }
          >
            <svg className="size-[60px] p-[9px] bg-inherit text-inherit rounded-2xl">
              <use href="/sprite.svg#beverage" />
            </svg>
          </NavLink>
        </div>
      </div>

      {/* message */}
      <div className="rounded-2xl">
        <NavLink
          to="/kopikap/messages"
          className={({ isActive }) =>
            isActive ? "bg-emerald-500 text-white" : ""
          }
        >
          <svg className="size-[60px] p-[9px] bg-inherit text-inherit rounded-2xl">
            <use href="/sprite.svg#message" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
