import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

type FilterState = {
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

export const selectSearch = (state: RootState) => state.filters.search;
export const selectTags = (state: RootState) => state.filters.tags;
export const selectPrice = (state: RootState) => state.filters.price;
export const selectSubscription = (state: RootState) =>
  state.filters.subscription;

export default filterSlice.reducer;
