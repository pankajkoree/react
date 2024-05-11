import { NavLink } from "react-router-dom";
import viteLogo from "../../public/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md pb-4">
      <img src={viteLogo} alt="logo" />
      <ul className="flex gap-2 md:gap-4">
        <li>
          {/* <NavLink to={Home}>Home</NavLink> */}
          {/* <NavLink
            className={({ isActive }) => {
              if (isActive) return "underline text-green-400";
            }}
            to="./Home"
          > */}
          <NavLink
            className={({ isActive }) => isActive && "underline text-green-400"}
            to="/Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* <NavLink to={About}>About</NavLink> */}

          {/* <NavLink
            className={({ isActive }) => {
              if (isActive) return "underline text-green-400";
            }}
            to="./About"
          > */}
          <NavLink
            className={({ isActive }) => isActive && "underline text-green-400"}
            to="/About"
          >
            About
          </NavLink>
        </li>
        <li>
          {/* <NavLink to={Contact}>Contact</NavLink> */}
          {/* <NavLink
            className={({ isActive }) => {
              if (isActive) return "underline text-green-400";
            }}
            to="./Contact"
          > */}
          <NavLink
            className={({ isActive }) => isActive && "underline text-green-400"}
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
