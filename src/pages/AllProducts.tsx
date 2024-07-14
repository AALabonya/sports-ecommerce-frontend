/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import Cards from "@/components/card/Cards";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const AllProducts = () => {
  const [selectedSort, setSelectedSort] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  // console.log(cate)

  // Function to get minimum price based on selected price range
  const getMinPrice = (range: string) => {
    switch (range) {
      case "under50":
        return 0;
      case "50to100":
        return 50;
      case "over100":
        return 100;
      default:
        return undefined;
    }
  };

  // Function to get maximum price based on selected price range
  const getMaxPrice = (range: string) => {
    switch (range) {
      case "under50":
        return 50;
      case "50to100":
        return 100;
      case "over100":
        return undefined; // No upper limit
      default:
        return undefined;
    }
  };

  // Fetch products based on sort, search term, category, brand, price range, and rating filters
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery({
    sort: selectedSort,
    searchTerm: searchTerm,
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    brand: selectedBrand !== "all" ? selectedBrand : undefined,
    minPrice: getMinPrice(selectedPriceRange),
    maxPrice: getMaxPrice(selectedPriceRange),
    minRating: selectedRating !== "all" ? parseInt(selectedRating) : undefined,
  });

  // console.log(selectedCategory,setSelectedCategory,'validate')

  // Handle sorting change
  const handleSelectChange = (event: { target: { value: any } }) => {
    const sortValue = event.target.value;
    setSelectedSort(sortValue);
  };

  // Handle search input change
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter products based on selected filters
  const filterProducts = (products: any) => {
    let filteredProducts = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by brand
    if (selectedBrand !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const minPrice = getMinPrice(selectedPriceRange);
      const maxPrice = getMaxPrice(selectedPriceRange);
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.price;
        return (
          (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice)
        );
      });
    }

    // Filter by rating
    if (selectedRating !== "all") {
      filteredProducts = filteredProducts.filter((product) => {
        const rating = product.rating;
        return rating === parseInt(selectedRating);
      });
    }

    return filteredProducts;
  };

  // Function to sort products based on selected criteria
  const sortProducts = (products: any[], sortCriteria: string) => {
    const sortedProducts = [...products];

    switch (sortCriteria) {
      case "priceAsc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    return sortedProducts;
  };

  // Apply filtering and sorting to products based on selected filters and sort
  const filteredAndSortedProducts = sortProducts(
    filterProducts(products?.data || []),
    selectedSort
  );

  // Handle clear filters
  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSelectedPriceRange("all");
    setSelectedRating("all");
    setSearchTerm("");
    setSelectedSort("all");
  };
  return (
    <div className="min-h-screen">
      <div className="mb-16">
        <div className="bg-cover bg-about-us bg-center">
          <div className=" md:max-w-screen-2xl mx-auto p-24 justify-center">
            <h2 className="lg:text-6xl font-bold text-white/90 font-serif text-center">
              All Products
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
                Product
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Search form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center mb-5"
      >
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleInputChange}
          className="py-1 px-4 border border-r-0 border-[#545454] rounded-l-full outline-none focus:placeholder-transparent"
        />
        <button className="px-4 font-medium border-y border-r border-[#545454] text-white tracking-wider transition-colors duration-300 transform bg-[#7ED957] rounded-r-full hover:bg-[#545454]">
          <FaMagnifyingGlass />
        </button>
      </form>
      <section className="px-4 md:px-0">
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-5">
          {/* Sort dropdown */}
          <div className="w-full md:w-auto mb-2 md:mb-0 rounded-full">
            <select
              value={selectedSort}
              onChange={handleSelectChange}
              className="border border-[#545454] py-2 px-4 w-full md:w-auto rounded-full"
            >
              <option value="all">Sort by...</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>

          {/* Sport filter */}
          <div className="w-full rounded-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-full ml-2 border-[#545454] py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Sports</option>
              <option value="fitness">Fitness</option>
              <option value="football">Football</option>
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
              {/* Add more category options as needed */}
            </select>
          </div>

          {/* Brand filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border rounded-full ml-2 border-[#545454]  py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Brands</option>
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
              {/* Add more brand options as needed */}
            </select>
          </div>

          {/* Price range filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="border rounded-full ml-2 border-[#545454] py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="over100">Over $100</option>
              {/* Add more price range options as needed */}
            </select>
          </div>

          {/* Rating filter */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="border rounded-full ml-2 border-[#545454] py-2 px-4 w-full md:w-auto"
            >
              <option value="all">All Ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
              {/* Add more rating options as needed */}
            </select>
          </div>

          {/* Clear filters button */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <button
              className="flex items-center gap-1 px-4 ml-2 py-2 border border-[#545454] font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#7ED957] rounded-full hover:bg-[#545454]"
              onClick={clearFilters}
            >
              <GrPowerReset /> <span>Reset</span>
            </button>
          </div>
        </div>
      </section>
      {/* Product list */}
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {isLoading ? (
          <p className="text-2xl text-black flex justify-center items-center">
            Loading......
          </p>
        ) : isError ? (
          <p className="text-2xl text-red-500 flex justify-center items-center">
            Error loading products
          </p>
        ) : filteredAndSortedProducts.length === 0 ? (
          <p className="text-2xl text-black flex justify-center items-center">
            No products found
          </p>
        ) : (
          filteredAndSortedProducts.map((product) => (
            <Cards key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
