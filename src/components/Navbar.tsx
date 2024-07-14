/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTypeAnimationVisible] = useState(true);
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);

  const cart = useAppSelector((state) => state.cart.items);
  console.log("carttttt", cart);

  useEffect(() => {
    setMounted(true);
  }, []);
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    // Start Header
    <header>
      {/* Navigation Menu Start */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2.5 shadow-md shadow-black/5  md:flex-wrap lg:py-2.5">
        <div className="flex w-full items-center justify-between md:px-10 mx-auto">
          {/* Collapse Button for Mobile Menu */}
          <button
            onClick={() => setCollapse(!collapse)}
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
            type="button"
          >
            {collapse ? (
              <AiOutlineClose size={25} />
            ) : (
              <FiAlignJustify size={25} />
            )}
          </button>
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link
              className="flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900  lg:mb-0 lg:mt-0"
              to="/"
            >
              <img
                src="https://i.ibb.co/Jns4DFF/profit2.png"
                className="w-16 md:w-24"
                alt=" Logo"
              />
            </Link>
          </div>
          {/* Main Menu Start */}
          <div
            className={`!visible ${
              collapse ? "block" : "hidden"
            } absolute md:static top-14 bg-white md:bg-transparent w-full md:w-auto border shadow-xl md:border-none md:shadow-none items-center px-3 lg:!flex lg:basis-auto z-50`}
          >
            <ul className="flex mx-auto flex-col pl-0 md:flex-row justify-center gap-5 py-3">
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
              <NavLink to="/all-product" className="navLink">
                All Products
              </NavLink>
              <NavLink to="/manage-product" className="navLink">
                Manage Product
              </NavLink>
              <NavLink to="/about" className="navLink">
                About Us
              </NavLink>
            </ul>
          </div>
          {/* Main Menu End */}

          <div className="relative flex items-center">
            {/* User Menu Start*/}
            <div className="navbar-end flex items-center gap-4 pr-3">
              <div className="relative">
                <button
                  className="text-[28px] mt-2 hover:text-primary duration-150"
                  onClick={() => setSearchBtnClicked(!searchBtnClicked)}
                >
                  {searchBtnClicked ? (
                    <HiOutlineXMark />
                  ) : (
                    <CiSearch className="text-[#7ED957]" />
                  )}
                </button>
                <form
                  className={`search-form w-60 z-50 flex absolute right-1/4 duration-200 text-[#7ED957] ${
                    searchBtnClicked
                      ? "-bottom-[90%] opacity-100"
                      : "-bottom-[130%] opacity-0 pointer-events-none"
                  }`}
                >
                  <input
                    onChange={(e) => handleSearchText(e)}
                    type="text"
                    name="text"
                    className="w-[80%] bg-white shadow-md border border-slate-100 px-3 py-1 rounded-l-sm outline-none"
                  />

                  <div
                    className={`${
                      isTypeAnimationVisible ? "" : "hidden"
                    } absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 border-gray-950 pointer-events-none text-base`}
                  >
                    <TypeAnimation
                      sequence={["", 1000, "Search Products...", 1000]}
                      wrapper="span"
                      speed={60}
                      cursor={true}
                      repeat={Infinity}
                    />
                  </div>

                  <button className="w-[20%]" type="submit">
                    <CiSearch className="text-xl p-2 w-full bg-[#7ED957] hover:bg-[#7ED957] bg-pri text-white h-10 duration-150  rounded-r-sm" />
                  </button>
                </form>
              </div>

              {/* cart */}
              <Link to={"/add-cart"} className="inline-block relative">
                <CiShoppingCart className="text-3xl" />
                <span className="w-5 h-5 bg-[#7ED957] text-white absolute font-bold -top-2 -right-2 text-[12px] text-center rounded-full">
                  {mounted ? cart?.length : 0}
                </span>
              </Link>

              {/* user */}
              <button>
                <CiUser className="text-2xl hidden" />
              </button>

              {/* add product btn */}
              <Link to={"/add-cart"} className="text-2xl hidden">
                <IoMdAddCircleOutline />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
