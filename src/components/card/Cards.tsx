import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const Cards = ({ product }) => {
  return (
    <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.description}
        </p>

        <div className="flex justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Category: {product.category}
          </p>
          <div className="items-center">
            <Rating
              emptySymbol={
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27l5.18 3.73-1.64-6.81 5.22-4.4-6.82-.59L12 .98 9.06 8.2l-6.82.59 5.22 4.4L6.82 21z" />
                </svg>
              }
              fullSymbol={
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27l5.18 3.73-1.64-6.81 5.22-4.4-6.82-.59L12 .98 9.06 8.2l-6.82.59 5.22 4.4L6.82 21z" />
                </svg>
              }
              initialRating={product.rating}
              readonly
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.rating})
            </span>
          </div>
        </div>
      </div>
      <img
        width={400}
        height={300}
        className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="flex items-center justify-between mt-4">
        {" "}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.quantity > 0
            ? `${product.quantity} in stock`
            : "Out of stock"}
        </p>
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">
          $ {product.price}
        </h2>
      </div>

      <Link to={`/product/${product._id}`}>
        <button className="mt-2 w-full rounded-lg bg-[#545454] px-6 py-2 text-sm font-semibold text-white hover:bg-[#7ED957]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Cards;
