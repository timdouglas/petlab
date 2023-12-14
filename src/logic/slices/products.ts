import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = 'http://localhost:3010';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/products/`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => '',
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
