import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="max-w-72 group">
      <div className="max-h-80 relative">
        <Link to={`/products/$product?._id`}></Link>
        {/* <img src={product?.img1} className='w-full h-full object-cover ' alt="" /> */}
        {/* favourite btn */}
        <button className="absolute right-3 top-3 text-xl bg-white px-2 py-2 rounded-full hover:bg-secondary hover:text-white duration-200">
          button
        </button>
        {/* add to cart btn */}
        <button className="absolute left-0 -bottom-5 bg-secondary text-white text-center font-semibold py-3 w-full uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-0 hover:bg-primary duration-200">
          + add to cart
        </button>
      </div>
      {/* title & price */}
      <div className="flex flex-col items-center py-5">
        <Link to={`/products/$product?._id`}>
          <h2 className="text-base font-semibold mb-1 hover:text-primary duration-150">
            product?.title
          </h2>
        </Link>
        <p>$product?.price</p>
      </div>
    </div>
  );
}
