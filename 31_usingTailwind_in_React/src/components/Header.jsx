import viteLogo from "../../public/vite.svg";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md pb-4">
      <img src={viteLogo} alt="logo" />
      <ul className="flex gap-2 md:gap-4">
        <li>
          <NavLink to={Home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={About}>About</NavLink>
        </li>
        <li>
          <NavLink to={Contact}>Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}
