import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '~/store';

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
      // ensure we only see published products
      transformResponse: (resp: Product[]) =>
        resp.filter((product) => product.published),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
