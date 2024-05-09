import viteLogo from "../../public/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md pb-4">
      <img src={viteLogo} alt="logo" />
      <ul className="flex gap-4">
        <li>
          <a className="" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}
