/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center ">
        <h1 className="text-3xl font-medium mb-4">
          Order Placed Successfully!
        </h1>
        <p className="mb-6 text-lg">
          Thank you for your order. Your items will be delivered soon.
        </p>
        <div>
          <Link to="/">
            <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
