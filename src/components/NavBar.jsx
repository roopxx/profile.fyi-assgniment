import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul className=" flex gap-10">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/store">STORE</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </ul>
    </>
  );
}

export default NavBar;
