/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import Cards from "../card/Cards";

export default function FeatureProduct() {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(undefined, { pollingInterval: 30000 });

  if (isLoading) {
    return (
      <p className="text-2xl text-black flex justify-center items-center">
        Loading.....
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-2xl text-red-500 flex justify-center items-center">
        Error loading products. Please try again later.
      </p>
    );
  }

  return (
    <section className="container bg-background py-12 mt-5">
      <div className="w-2/4 mx-auto text-center space-y-3">
        <h1 className="text-4xl font-bold">Our Featured Products</h1>
        <p className="">
          Explore our top categories to quickly find the perfect products for
          you.
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center font-medium mb-6">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data?.map((product: { _id: any }) => (
            <Cards product={product} key={product._id}></Cards>
          ))}
        </div>
      </div>
    </section>
  );
}
