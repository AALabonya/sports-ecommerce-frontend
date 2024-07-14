import { Link } from "react-router-dom";

export default function ErrorHandler() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png"
          alt=""
          className="p-1"
        />

        <p className="mt-4 text-[#545454] mb-2">
          Sorry you hit the wrong page.
        </p>
        <Link to="/">
          <button className="px-4 py-2 bg-[#7ED957] text-white rounded-lg hover:bg-gray-500 transition-colors duration-300">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
