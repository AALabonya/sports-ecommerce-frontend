import { useDeleteProductMutation } from "@/redux/api/baseApi";
import UpdateProduct from "./UpdateProduct";

export type TProductCardProps = {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating: number;
  price: number;
  image: string;
};

const ManageProductTable = ({
  _id,
  name,
  description,
  category,
  brand,
  stockQuantity,
  rating,
  price,
  image,
}: TProductCardProps) => {
  const [deleteProduct] = useDeleteProductMutation();

  const removeProduct = () => {
    deleteProduct(_id);
    // toast.success("Product deleted successfully");
  };

  return (
    <>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt="Alexa Liras"
              className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
            />
            <div className="flex flex-col">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {name}
              </p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {description}
            </p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
              {price}
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {stockQuantity}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {category}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {brand}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="mt-4 flex justify-between items-center">
            <UpdateProduct productId={_id}></UpdateProduct>
            <button
              onClick={removeProduct}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ManageProductTable;
