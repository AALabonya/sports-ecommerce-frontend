import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => {
        const { searchTerm, sort } = query || {};
        let url = "/products";

        if (searchTerm) {
          url += `?searchTerm=${searchTerm}`;
        }

        if (sort) {
          const sortValue = sort === "descending" ? "-price" : "price";
          url += searchTerm ? `&sort=${sortValue}` : `?sort=${sortValue}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log("from base api", data);
        return {
          url: `/products`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log("from base api", id, data);
        return {
          url: `products/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
    }),

    // new query
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateOrderMutation,
} = baseApi;
