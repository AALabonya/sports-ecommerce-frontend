import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAddProductMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [addProduct, { data, isLoading, isError, isSuccess }] =
    useAddProductMutation();
  console.log(isLoading, isSuccess, isError, data);
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const productAdd = {
      name,
      description,
      category,
      brand,
      stockQuantity: Number(stockQuantity),
      rating: Number(rating),
      price: Number(price),
      image,
    };
    console.log(productAdd);
    try {
      await addProduct(productAdd);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added Product successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error adding product. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    addProduct(productAdd);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-[#7ED957] text-white rounded-lg hover:bg-[#7ED957] transition-colors duration-300">
            Add Product
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>Add a new product</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">
                  Brand
                </Label>
                <Input
                  onChange={(e) => setBrand(e.target.value)}
                  id="brand"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stockQuantity" className="text-right">
                  Stock Quantity
                </Label>
                <Input
                  onChange={(e) => setStockQuantity(e.target.value)}
                  id="stockQuantity"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
                  onChange={(e) => setRating(e.target.value)}
                  id="rating"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image Link
                </Label>
                <Input
                  onChange={(e) => setImage(e.target.value)}
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
}
