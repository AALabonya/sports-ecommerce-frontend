import { useState } from "react";
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
  const [isTypeAnimationVisible, setIsTypeAnimationVisible] = useState(true);
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleSearchText = (e) => {
    const searchText = e.target.value;

    if (searchText.length > 0) {
      fetch(
        `https://bazar-zone-server.vercel.app/products/search/${searchText}`
      )
        .then((res) => res.json())
        .then((data) => setSearchedProducts(data));
    } else {
      setSearchedProducts([]);
    }

    if (searchText.length > 0) {
      setIsTypeAnimationVisible(false);
    } else {
      setIsTypeAnimationVisible(true);
    }
  };

  //submit search
  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.text.value;
  };

  const handleSearchResultClicked = () => {
    setSearchBtnClicked(false);
    setSearchedProducts([]);
  };

  return (
    // Start Header
    <header>
      {/* Navigation Menu Start */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2.5 shadow-md shadow-black/5  md:flex-wrap lg:py-2.5">
        <div className="flex w-full items-center justify-between md:max-w-7xl mx-auto">
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
              <NavLink to="/blog" className="navLink">
                All Products
              </NavLink>
              <NavLink to="/manage-product" className="navLink">
                Manage Product
              </NavLink>
              <NavLink to="/about-us" className="navLink">
                About Us
              </NavLink>
              <NavLink to="/contact-us" className="navLink">
                Contact Us
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
                  {searchBtnClicked ? <HiOutlineXMark /> : <CiSearch />}
                </button>
                <form
                  onSubmit={handleSearch}
                  className={`search-form w-60 z-50 flex absolute right-1/4 duration-200 ${
                    searchBtnClicked
                      ? "-bottom-[90%] opacity-100"
                      : "-bottom-[130%] opacity-0 pointer-events-none"
                  }`}
                >
                  <input
                    onChange={(e) => handleSearchText(e)}
                    type="text"
                    name="text"
                    className="w-[80%] bg-[color:var(--bg-primary)] shadow-md border border-slate-100 px-3 py-1 rounded-l-sm outline-none"
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
                    <CiSearch className="text-xl p-2 w-full bg-secondary hover:bg-primary text-white h-10 duration-150  rounded-r-sm" />
                  </button>
                </form>
              </div>

              {/* cart */}
              <Link to={"/cart"} className="inline-block relative">
                <CiShoppingCart className="text-2xl" />
                <span className="w-4 h-4 bg-primary text-white absolute -top-2 -right-2 text-[10px] text-center rounded-full">
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
