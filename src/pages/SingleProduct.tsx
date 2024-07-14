import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import { Star, StarIcon } from "lucide-react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import Swal from "sweetalert2";

const SingleProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const cartItem = cart.find((item) => item.productId === productId);

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

  const handleAddToCart = () => {
    if (cartItem) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Product already in cart",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (product) {
      dispatch(addToCart({ product: product.data }));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cart added successfully!",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError)
    return (
      <div className="text-center mt-8 text-red-500">
        Error fetching product.
      </div>
    );
  if (!product)
    return <div className="text-center mt-8">Product not found.</div>;

  const isButtonDisabled =
    cartItem && cartItem.quantity >= product.data.quantity;

  return (
    <>
      <section className="container lg:px-24 mt-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12">
          <img src={product.data.image} alt="" className=" w-2/4" />

          <div className="space-y-3">
            <div className="flex items-center gap-4 text-xs">
              {product?.stock > 40 ? (
                <p className="border-2 border-green-600 text-green-600 text-xs px-3 py-1 inline-block">
                  In Stock
                </p>
              ) : (
                <p className="border-2 border-red-600 text-red-600 text-xs px-3 py-1 inline-block">
                  Low Stock
                </p>
              )}
              <span>{product?.data?.quantity} Available Stock</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {product?.data?.name}
            </h2>
            Rating:
            <span className="flex gap-2">{Rating(product.data.rating)}</span>
            <p className=" items-center">
              Price:{" "}
              <span className="text-xl md:text-2xl font-semibold">
                ${product?.data?.price}
              </span>
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span>Sizes:</span>
              <div>
                <span className="underline">S</span>
                <span className="ml-1 underline">M</span>
                <span className="ml-1 underline">L</span>
                <span className="ml-1 underline">XL</span>
              </div>
            </div>
            <div className="font-normal space-y-3">
              <p className="flex gap-8">
                Category:{" "}
                <span className="uppercase">{product?.data?.category}</span>
              </p>
              <p className="flex gap-4">
                Description:
                <span className="text-justify">
                  {product.data.name}
                  {""}
                  {product.data.description}
                </span>
              </p>
              <div className="flex items-center gap-[60px]">
                <p>Share:</p>
                <div className="flex gap-2 text-xl">
                  <button>
                    <CiFacebook />
                  </button>
                  <button>
                    <CiInstagram />
                  </button>
                  <button>
                    <CiTwitter />
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className="px-4 py-2 bg-[#7ED957] text-white rounded-lg hover:bg-gray-500 transition-colors duration-300"
              >
                {isButtonDisabled ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
