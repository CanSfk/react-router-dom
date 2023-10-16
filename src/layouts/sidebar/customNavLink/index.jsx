import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function CustomNavLink({ title, icon, to }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={classNames(
            "px-2 py-3 font-bold text-[22px] transition duration-[250ms] hover:bg-slate-800 hover:text-slate-300 flex gap-5 items-center",
            {
              "bg-slate-800 text-slate-200": isActive,
            }
          )}
        >
          {icon}
          <span href="#">{title}</span>
        </div>
      )}
    </NavLink>
  );
}
