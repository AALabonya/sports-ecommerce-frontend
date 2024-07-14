/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  description: string;
  category: string;
  brand: string;
  quantity: string;
  rating: string;
  price: string;
  image: string;
};

type UpdatedProductData = {
  name?: string;
  description?: string;
  category?: string;
  brand?: string;
  quantity?: number;
  rating?: number;
  price?: number;
  image?: string;
};

const UpdateProduct = ({ productId }: { productId: string }) => {
  const { data: productData } = useGetProductByIdQuery(productId);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  console.log(isLoading);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    category: "",
    brand: "",
    quantity: "",
    rating: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name || "",
        description: productData.description || "",
        category: productData.category || "",
        brand: productData.brand || "",
        quantity: productData.quantity ? productData.quantity.toString() : "",
        rating: productData.rating ? productData.rating.toString() : "",
        price: productData.price ? productData.price.toString() : "",
        image: productData.image || "",
      });
    }
  }, [productData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedProduct = Object.keys(formData).reduce((acc, key) => {
      const formKey = key as keyof FormData;
      const value = formData[formKey];

      if (value) {
        (acc as any)[formKey] = ["quantity", "rating", "price"].includes(key)
          ? Number(value)
          : value;
      }

      return acc;
    }, {} as UpdatedProductData);

    updateProduct({ id: productId, data: updatedProduct });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product Updated Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    // console.log({ productId, ...updatedProduct }, 'from update modal')
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
            Update
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] h-[300px] md:h-[400px] lg:h-[600px] overflow-y-auto py-10 mt-5">
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
            <DialogDescription>Update the product details</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  placeholder={productData?.data?.name}
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  placeholder={productData?.data?.description || ""}
                  value={formData.description}
                  onChange={handleChange}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="col-span-3 border rounded px-3 py-2"
                >
                  <option value="">
                    {productData?.data?.category || "Select a category"}
                  </option>
                  <option value="fitness">Fitness</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="accessories">Accessories</option>
                  <option value="running">Running</option>
                  <option value="soccer">Soccer</option>
                  <option value="tennis">Tennis</option>
                  <option value="basketball">Basketball</option>
                  <option value="cycling">Cycling</option>
                  <option value="golf">Golf</option>
                  <option value="swimming">Swimming</option>
                  <option value="cricket">Cricket</option>
                  <option value="badminton">Badminton</option>
                </select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">
                  Brand
                </Label>
                <select
                  id="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="col-span-3 border rounded px-3 py-2"
                >
                  <option value="">
                    {productData?.data?.brand || "Select a brand"}
                  </option>
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="puma">Puma</option>
                  <option value="under-armour">Under Armour</option>
                  <option value="reebok">Reebok</option>
                  <option value="asics">Asics</option>
                  <option value="new-balance">New Balance</option>
                  <option value="fila">Fila</option>
                  <option value="mizuno">Mizuno</option>
                  <option value="salomon">Salomon</option>
                  <option value="oakley">Oakley</option>
                  <option value="umbro">Umbro</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Stock Quantity
                </Label>
                <Input
                  placeholder={productData?.data?.quantity?.toString() || ""}
                  value={formData.quantity}
                  onChange={handleChange}
                  id="quantity"
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
                  placeholder={productData?.data?.rating?.toString() || ""}
                  value={formData.rating}
                  onChange={handleChange}
                  id="rating"
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  placeholder={productData?.data?.price?.toString() || ""}
                  value={formData.price}
                  onChange={handleChange}
                  id="price"
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image Link
                </Label>
                <Input
                  placeholder={productData?.data?.image || ""}
                  value={formData.image}
                  onChange={handleChange}
                  id="image"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <button
                  className="px-4 py-2 w-full bg-[#7ED957] text-white rounded-lg hover:bg-[#7ED957] transition-colors duration-300"
                  type="submit"
                >
                  Save
                </button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProduct;
