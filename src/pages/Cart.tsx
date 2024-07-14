import { Button } from "@/components/ui/button";
import { removeFromCart, updateQuantity } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  console.log("carttttt", cart);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "remove item!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "updated!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <>
      <div className="mb-16">
        <div className="bg-cover bg-about-us bg-center">
          <div className=" md:max-w-screen-2xl mx-auto p-24 justify-center">
            <h2 className="lg:text-6xl font-bold text-white/90 font-serif text-center">
              Cart Products
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
                Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen mb-5 flex rounded-2xl bg-gray-100  flex-col items-center py-10">
        <h1 className="text-3xl font-medium mb-8">Cart</h1>
        <div className=" flex flex-col md:flex-row pt-5 lg:justify-between max-w-7xl gap-24 rounded-lg shadow-lg p-6">
          {cart.length > 0 ? (
            <ul className="space-y-6 ">
              {cart.map((item) => (
                <li
                  key={item.productId}
                  className="flex  items-center bg-gray-50 p-4 rounded-lg shadow"
                >
                  <div className="flex ">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div className="flex ">
                      <h2 className="text-lg font-semibold mr-16">
                        {item.product.name}
                        <p className=" text-base">
                          Price: ${item.product.price.toFixed(2)}
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity <= 1}
                        className="px-2 py-1 bg-gray-300 rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>

                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity + 1
                          )
                        }
                        disabled={item.quantity >= item.product.quantity}
                        className="px-2 py-1 bg-gray-300 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-3">
                      Calculation: ${item.product?.price}{" "}
                      <span className="font-normal text-xs pt-2">
                        *{item.quantity}
                      </span>{" "}
                    </p>
                    <p className="text-xs md:text-sm">
                      Subtotal: ${item.product?.price * item.quantity}
                    </p>
                  </div>
                  <div className="mt-2 flex gap-2  ml-16">
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="text-red-600 text-3xl flex justify-center"
                    >
                      <AiFillDelete className="text-red-600 text-3xl flex justify-center" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          {cart.length > 0 && (
            <div className="space-y-8 flex flex-col p-10 border-2">
              <h2 className="text-2xl font-oswald tracking-wider">
                Cart Total
              </h2>
              <p className="opacity-75">
                {cart.length} item{cart.length > 1 ? "s" : ""} (Total Quantity:{" "}
                {cart.reduce((acc, item) => acc + item.quantity, 0)})
              </p>

              <p className="tracking-wider flex justify-between">
                <strong>Subtotal: </strong> <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="tracking-wider flex justify-between">
                <strong>VAT 15%: </strong> <span>${vat.toFixed(2)}</span>
              </p>

              <p className="tracking-wider flex justify-between">
                <strong>Total: </strong> <span>${total.toFixed(2)}</span>
              </p>

              <NavLink to={"/check-out"} className="w-full">
                <Button className="bg-[#7ED957] w-full">
                  PROCEED TO CHECKOUT
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
