/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star, StarIcon } from "lucide-react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Cards = ({ product }: any) => {
  const Rating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <Star key={i} className="text-yellow-500 p-1 fill-yellow-500" />
        ) : (
          <StarIcon key={i} className="text-gray-500 p-1" />
        )
      );
    }
    return stars;
  };
  return (
    <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-2 shadow-lg dark:bg-[#18181B]">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl md:text-xl font-bold text-gray-900">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500">
          {product.description}
        </p>
        <p className="text-xs uppercase md:text-sm text-gray-500 dark:text-gray-400">
          {product.category}
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-xs uppercase md:text-sm text-black rounded-xl bg-[#d2ecc6] font-medium px-2 roun">
            {product.brand}
          </p>
          <div className="flex items-center">
            <span className="flex">{Rating(product?.rating)}</span>
            <span className="text-xs md:text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>
        </div>
      </div>
      <Zoom>
        <img
          className="h-40 scale-120 sm:h-52 md:h-64 w-full rounded-lg bg-gray-600 object-cover"
          src={product.image}
          alt={product.name}
        />
      </Zoom>
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {product.quantity > 0
            ? `${product.quantity} in stock`
            : "Out of stock"}
        </p>
        <h2 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
          ${product.price}
        </h2>
      </div>

      <Link to={`/product/${product._id}`}>
        <button className="mt-2 w-full rounded-lg hover:bg-[#545454] px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#7ED957]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Cards;
