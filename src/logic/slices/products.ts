import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = 'http://localhost:3010';

export type Product = {
  id: number;
  slug: string;
  title: string;
  vendor: string;
  tags: string[];
  published: boolean;
  url: string;
  image_src: string;
  option_value: string;
  sku: string;
  price: number;
  subscription: boolean;
  subscription_discount: number | '';
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
