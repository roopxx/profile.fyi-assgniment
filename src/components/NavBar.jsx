import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white px-5 py-3 text-black shadow md:px-10 md:py-6">
        <nav className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <h2 className="text-3xl font-bold tracking-wider md:text-4xl">
                <span className="text-red-700">W</span>all
                <span className="text-red-700">W</span>onder
              </h2>
            </NavLink>
            <button
              className="md:hidden"
              onClick={() => {
                setShow(!show);
                document.querySelector(".menu").classList.toggle("hidden");
              }}
            >
              {show ? (
                <div className="m-0 p-0 transition-transform hover:rotate-180 hover:duration-300 hover:ease-linear">
                  <svg
                    fill="#000000"
                    width="28px"
                    height="28px"
                    viewBox="0 -2 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00028"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.11200000000000002"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="m0 0h27.65v5.219h-27.65z"></path>
                      <path d="m0 9.39h27.65v5.219h-27.65z"></path>
                      <path d="m0 18.781h27.65v5.219h-27.65z"></path>
                    </g>
                  </svg>
                </div>
              ) : (
                <div className="m-0 p-0 transition-transform hover:rotate-180 hover:duration-300 hover:ease-linear">
                  <svg
                    fill="#000000"
                    width="28px"
                    height="28px"
                    viewBox="0 0 16.00 16.00"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.8"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.8"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
              )}
            </button>
          </div>
          <div>
            <ul className="menu hidden gap-8 space-y-2 text-right text-xl md:flex md:space-y-0 md:text-2xl">
              <li className="mt-2 md:mt-0">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/store"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  STORE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-red-700" : "")}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
