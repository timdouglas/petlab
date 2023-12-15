import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

export type FilterState = {
  search: string;
  tags: string[];
  price: number;
  subscription: boolean;
};

export const initialState: FilterState = {
  search: '',
  tags: [],
  price: -1,
  subscription: false,
};

export const filterSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setTags: (state, { payload }: PayloadAction<string[]>) => {
      state.tags = payload;
    },
    addTag: (state, { payload }: PayloadAction<string>) => {
      state.tags.push(payload);
    },
    removeTag: (state, { payload }: PayloadAction<string>) => {
      const index = state.tags.indexOf(payload);
      if (index > -1) {
        state.tags.splice(index, 1);
      }
    },
    setPrice: (state, { payload }: PayloadAction<number>) => {
      state.price = payload;
    },
    setSubscription: (state, { payload }: PayloadAction<boolean>) => {
      state.subscription = payload;
    },
  },
});

export const {
  actions: { setSearch, setTags, addTag, removeTag, setPrice, setSubscription },
} = filterSlice;

export const selectFilters = (state: RootState) => state.filters;
export const selectSearch = (state: RootState) => state.filters.search;
export const selectTags = (state: RootState) => state.filters.tags;
export const selectPrice = (state: RootState) => state.filters.price;
export const selectSubscription = (state: RootState) =>
  state.filters.subscription;

export const selectFiltersEnabled = (state: RootState) =>
  state.filters.search.length > 0 ||
  state.filters.tags.length > 0 ||
  state.filters.price > -1;

export default filterSlice.reducer;
