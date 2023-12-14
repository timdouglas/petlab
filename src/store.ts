import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from './logic/slices/products';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});

export const createStore = (preloadedState?: any) =>
  configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(productsApi.middleware),
    preloadedState,
    reducer: rootReducer,
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;

export default store;
