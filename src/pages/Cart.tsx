import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemsTotalPrice = cart?.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );

  const handleIncreaseQantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemoveCart = (productId) => {
    const updatedCart = cart?.filter((product) => product?._id !== productId);
    setCart(updatedCart);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item Removed!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    setCart([]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Order Pleaced Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="py-5 px-10 flex-1 justify-center">
      <p className="flex items-center gap-3">
        <Link to={"/"} className="opacity-75">
          Home
        </Link>{" "}
        <RiArrowRightSLine />
        Cart
      </p>

      <h1 className="text-xl md:text-2xl font-semibold border-b-2 border-b-slate-200 pt-6 pb-4">
        Product Cart
      </h1>

      {mounted ? (
        <div className="py-6 flex flex-col md:flex-row gap-8 md:gap-14">
          {/* cart items */}
          <div className="w-full md:w-8/12">
            <div>
              {cart?.length == 0 ? (
                <div className="text-center font-semibold py-5 text-black">
                  No Items Added
                </div>
              ) : (
                <div>
                  {cart?.map((product) => (
                    <div className="grid grid-cols-4 items-center gap-2 pt-6">
                      <div className="font-semibold">
                        <h3>product?.title</h3>
                        <p>
                          $product?.price{" "}
                          <span className="font-normal text-xs">
                            xproduct?.quantity
                          </span>{" "}
                        </p>
                        <p className="text-xs md:text-sm">
                          Subtotal: $product?.price * product?.quantity
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => handleDecreaseQantity(product?._id)}
                          className="bg-slate-200 text-base md:text-2xl p-1 md:p-3"
                          disabled={product?.quantity == 1}
                        >
                          <FiMinus />
                        </button>
                        <span className="px-4 py-[2px] md:py-[10px] border-y-2 border-y-slate-200">
                          {product?.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQantity(product?._id)}
                          className="bg-slate-200 text-base md:text-2xl p-1 md:p-3"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveCart(product?._id)}
                        className="text-red-600 text-3xl flex justify-center"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* checkout */}
          <div className="w-full md:w-4/12">
            <div className="flex justify-between items-center gap-3">
              <p className="opacity-75">2 Items</p>
              <p className="font-semibold">${itemsTotalPrice}</p>
            </div>
            <div className="flex justify-between items-center gap-3">
              <p className="opacity-75">Shipping</p>
              <p className="font-semibold">$10</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b-2 border-b-slate-200 py-3">
              <p className="opacity-75">Total (Tax Exclu.)</p>
              <p className="font-semibold">${itemsTotalPrice + 10}</p>
            </div>
            <div className="flex justify-between items-center gap-3 pt-3 font-semibold">
              <p className="opacity-75">Total(Tax Inclu.)</p>
              <p>${itemsTotalPrice + 10}</p>
            </div>
            <p className="font-semibold py-3">
              <span className="opacity-75 mr-2">Taxes:</span>$0
            </p>
            {/* modal */}
            <Link to={`/check-out`}>
              <button
                className="bg-secondary text-white w-full py-2 block my-5 font-semibold hover:bg-primary duration-200"
                disabled={cart?.length == 0}
              >
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
