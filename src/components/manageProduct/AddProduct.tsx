import { useState, FormEvent } from "react";
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
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [addProduct, { data, isLoading, isError, isSuccess }] =
    useAddProductMutation();
  console.log(data, isLoading, isError, isSuccess);

  const onSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const productAdd = {
      name,
      description,
      category,
      brand,
      quantity,
      rating,
      price,
      image,
    };

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
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-[#7ED957] text-white rounded-lg hover:bg-[#7ED957] transition-colors duration-300">
            Add Product
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] h-[300px] md:h-[400px] lg:h-[600px] overflow-y-auto py-10 mt-5">
          <DialogHeader>
            <DialogTitle className="text-center">Add Product</DialogTitle>
            <DialogDescription className="text-center">
              Add a new product
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  id="category"
                  className="col-span-3 border rounded px-3 py-2"
                >
                  <option value="">Select a category</option>
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

              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="brand" className="text-right">
                  Brand
                </Label>
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  id="brand"
                  className="col-span-3 border rounded px-3 py-2"
                >
                  <option value="">Select a brand</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Stock Quantity
                </Label>
                <Input
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  type="number"
                  id="quantity"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">
                  Rating
                </Label>
                <Input
                  onChange={(e) => setRating(parseFloat(e.target.value))}
                  type="number"
                  id="rating"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  id="price"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
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
            <div className="flex justify-end mt-2 mb-7">
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
}
