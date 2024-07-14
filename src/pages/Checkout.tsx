/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useCreateOrderMutation } from "@/redux/api/baseApi";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import { clearOrderedItems } from "@/redux/feature/cartSlice";
import Swal from "sweetalert2";

export type TOrder = {
  userName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  products: {
    productId: string;
    quantity: number;
  }[];

  paymentMethod: string;
};

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    phone: "",
    deliveryAddress: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();

  if (!cart || cart.length === 0 || !cart[0]?.productId) {
    return <p>Cart is empty</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    const products = cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
    const order: TOrder = {
      userName: userDetails.userName,
      email: userDetails.email,
      phone: userDetails.phone,
      deliveryAddress: userDetails.deliveryAddress,
      products,
      paymentMethod,
    };
    try {
      await createOrder(order).unwrap();
      dispatch(clearOrderedItems());
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Order Placed successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/success-page");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error placing order",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error placing order:", error);
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-cover bg-about-us bg-center">
          <div className=" md:max-w-screen-2xl mx-auto p-24 justify-center">
            <h2 className="lg:text-6xl font-bold text-white/90 font-serif text-center">
              CheckOut
            </h2>
            <div className="mt-2 text-center">
              <NavLink
                to="/"
                className=" relative font-medium text-base text-white/90 mx-3"
              >
                Home /
              </NavLink>
              <NavLink
                to="/"
                className="relative font-medium text-base text-white/90"
              >
                Checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 rounded-2xl bg-gray-100 grid grid-cols-1 md:grid-cols-2  items-center py-5">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold text-gray-900">
            Delivery Details
          </h2>
          <input
            type="text"
            name="userName"
            value={userDetails.userName}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
          />
          <textarea
            name="deliveryAddress"
            value={userDetails.deliveryAddress}
            onChange={handleChange}
            placeholder="Delivery Address"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
          />
        </div>
        <div>
          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="space-y-4">
              <h3 className="text-xl text-center font-semibold text-gray-900">
                Payment
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg border p-4 px-4">
                  <div className=" gap-2">
                    <input
                      type="text"
                      value={paymentMethod}
                      onChange={() => setPaymentMethod("Cash On Delivery")}
                      placeholder="Cash On Delivery"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-[#7ED957] rounded-lg"
                    />
                  </div>
                  <p className="mt-1 text-xs font-normal text-gray-500">
                    You can use bKash or Nagad
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-[#7ED957] text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handlePlaceOrder}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
