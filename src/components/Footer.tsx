import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-transparent shadow-2xl shadow-gray-400">
      <div className="px-10 mx-auto footer p-10 flex flex-col md:flex-row justify-between items-center md:items-start ">
        <aside className="flex flex-col items-center md:items-start">
          <Link to={"/"} className="text-xl font-semibold">
            <img
              src="https://i.ibb.co/Jns4DFF/profit2.png"
              className="w-16 md:w-24"
              alt=" Logo"
            />
          </Link>
          <address className="not-italic">Dhaka, Bangladesh</address>
          <a href="tel:+7878788" className="hover:underline">
            +88017878787878
          </a>
          <p>fitpro@info.com</p>
        </aside>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Our Products</h6>
          <ul className="flex flex-row md:flex-col gap-2 footer-links">
            <li>
              <Link to={"/"}>Shoes</Link>
            </li>
            <li className="md:hidden">•</li>
            <li>
              <Link to={"/"}>Cloths</Link>
            </li>
            <li className="md:hidden">•</li>
            <li>
              <Link to={"/"}>Glasses</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Useful Links</h6>
          <ul className="flex flex-row md:flex-col gap-2 footer-links">
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li className="md:hidden">•</li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Social Links</h6>
          <ul className="flex flex-row gap-2 footer-links">
            <li>
              <Link to={"/"}>
                <FaLinkedin className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaFacebookSquare className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaInstagramSquare className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaTwitterSquare className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* copyright text */}
      <div className="text-center text-[12px] pb-4">
        @2024 • All Rights Reserved
      </div>
    </footer>
  );
}
