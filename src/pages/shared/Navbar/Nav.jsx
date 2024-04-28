import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = ({ themes, handleThemeToggle }) => {
  const { user, navLoader, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/addCraftItem"}>Add Craft Item</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/allArt&CraftItems"}>All Art & craft Items</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/myArt&CraftList"}>My Art & Craft List</NavLink>
        </li>
      )}

      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar max-w-[1490px] mx-auto bg-[#ECEDF1]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-11 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn md:hidden mt-2 block bg-[#30424E] hover:bg-[#435b6b] text-white"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-2 items-center mt-3">
                  <Link to={"/signIn"}>
                    <button className="btn block bg-[#5C8392] hover:bg-[#587987] text-white md:hidden">
                      Sign In
                    </button>
                  </Link>
                  <Link to={"/signUp"}>
                    <button className="btn block bg-[#30424E]  text-white md:hidden">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>

          <a className="btn btn-ghost md:text-3xl text-black text-xl font-bold">
            Crafty Corner
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold menu-horizontal text-black">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div
            onClick={handleThemeToggle}
            className="mr-4 text-3xl cursor-pointer"
          >
            {themes === "light" && (
              <div className="border rounded-full pr-8 px-2 py-1 border-black">
                <MdOutlineLightMode className="size-5"/>
              </div>
            )}
            {themes === "dark" && (
              <div className="border rounded-full pl-8 pr-2 py-1 border-black">
              <MdDarkMode className="size-5 text-black"/>
              </div>
            )}
          </div>
          {!navLoader ? (
            <>
              {user && (
                <div
                  className=" tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="size-12 cursor-pointer rounded-full md:mr-5"
                    src={
                      (user?.photoURL && user?.photoURL) ||
                      "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
                    }
                    alt=""
                  />
                </div>
              )}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn hidden md:block bg-[#30424E] hover:bg-[#435b6b] text-white"
                >
                  Sign Out
                </button>
              ) : (
                <div className="md:flex gap-2 items-center">
                  <Link to={"/signIn"}>
                    <button className="btn hidden bg-[#5C8392] hover:bg-[#587987] text-white md:block">
                      Sign In
                    </button>
                  </Link>
                  <Link to={"/signUp"}>
                    <button className="btn hidden bg-[#30424E] hover:bg-[#435b6b] text-white md:block">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <span className="loading loading-spinner loading-lg mr-10"></span>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
