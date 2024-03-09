import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex w-full items-center justify-between p-8 text-3xl text-black">
        <h1>WallWonder</h1>
        <ul className="flex justify-end gap-20">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
          >
            STORE
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-700" : "")}
          >
            CONTACT
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
