import { removeFromCart, updateQuantity } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  console.log("carttttt", cart);

  const navigate = useNavigate();

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

  const calculateTotal = () => {
    return (
      cart.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0) * 1.15
    ); // Including 15% VAT
  };

  const handleCheckout = (productId?: string) => {
    if (productId) {
      navigate(`/check-out?productId=${productId}`);
    } else {
      if (cart.every((item) => item.product.quantity >= item.quantity)) {
        navigate("/check-out");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Some items are out of stock!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

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
      <div className="min-h-screen mb-5 rounded-2xl bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-3xl font-medium mb-8">Cart</h1>
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          {cart.length > 0 ? (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li
                  key={item.productId}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
                >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.product.name}
                    </h2>
                    <p>Price: ${item.product.price.toFixed(2)}</p>
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
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => handleRemove(item.productId)}
                        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => handleCheckout(item.productId)}
                        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                      >
                        Order This Item
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          {cart.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-medium">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button
                onClick={() => handleCheckout()}
                disabled={cart.some(
                  (item) => item.product.quantity < item.quantity
                )}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
