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
            <button className="px-4 py-2 bg-[#7ED957] text-white font-bold text-2xl rounded-lg hover:bg-[#7ED957] transition-colors duration-300">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
