/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useCreateOrderMutation } from "@/redux/api/baseApi";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { clearOrderedItems } from "@/redux/feature/cartSlice";
import Swal from "sweetalert2";

export type TOrder = {
  userName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  productId: string;
  quantity: number;
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
    const order: TOrder = {
      userName: userDetails.userName,
      email: userDetails.email,
      phone: userDetails.phone,
      deliveryAddress: userDetails.deliveryAddress,
      productId: cart[0].productId,
      quantity: cart[0].quantity,
      paymentMethod,
    };

    try {
      const { data } = await createOrder(order).unwrap();
      dispatch(clearOrderedItems(cart[0].productId));
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
    <div className="min-h-screen mb-5 rounded-2xl bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="userName"
          value={userDetails.userName}
          onChange={handleChange}
          placeholder="Name"
          className="input-field mb-4"
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-field mb-4"
        />
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="input-field mb-4"
        />
        <textarea
          name="deliveryAddress"
          value={userDetails.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          className="input-field mb-4"
        />
        <input
          type="text"
          // defaultValue={Cash On dDelivery}
          value={paymentMethod}
          onChange={(e) => setPaymentMethod("Cash On Delivery")}
          placeholder="Cash On Delivery"
          className="input-field mb-4"
        />
        <button
          onClick={handlePlaceOrder}
          className="px-4 py-2  bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
