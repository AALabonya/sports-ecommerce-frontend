/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Cards = ({ product }: any) => {
  const Rating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <Star key={i} className="text-yellow-500 fill-yellow-500 " />
        ) : (
          <StarIcon key={i} className="text-gray-500" />
        )
      );
    }
    return stars;
  };
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
            <span className="flex gap-2">{Rating(product.data.rating)}</span>
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
        <button className="mt-2 w-full rounded-lg hover:bg-[#545454] px-6 py-2 text-sm font-semibold text-white bg-[#7ED957]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Cards;
