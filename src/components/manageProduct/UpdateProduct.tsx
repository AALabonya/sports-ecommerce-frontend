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
  stockQuantity: string;
  rating: string;
  price: string;
  image: string;
};

const UpdateProduct = ({ productId }) => {
  const { data: productData } = useGetProductByIdQuery(productId);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    category: "",
    brand: "",
    stockQuantity: "",
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
        stockQuantity: productData.stockQuantity
          ? productData.stockQuantity.toString()
          : "",
        rating: productData.rating ? productData.rating.toString() : "",
        price: productData.price ? productData.price.toString() : "",
        image: productData.image || "",
      });
    }
  }, [productData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedProduct = Object.keys(formData).reduce((acc, key) => {
      const value = formData[key as keyof FormData];
      if (value) {
        acc[key as keyof FormData] = [
          "stockQuantity",
          "rating",
          "price",
        ].includes(key)
          ? Number(value)
          : value;
      }
      return acc;
    }, {} as Partial<FormData>);

    updateProduct({ id: productId, data: updatedProduct });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product Updated Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    // console.log({ productId, ...updatedProduct }, 'from update modal');
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
            Update
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
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
                <Input
                  value={formData.category}
                  onChange={handleChange}
                  id="category"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">
                  Brand
                </Label>
                <Input
                  value={formData.brand}
                  onChange={handleChange}
                  id="brand"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stockQuantity" className="text-right">
                  Stock Quantity
                </Label>
                <Input
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  id="stockQuantity"
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
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
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
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
