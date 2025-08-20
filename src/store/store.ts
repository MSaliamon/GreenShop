import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { saveState } from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Subscribe to store changes to persist state
store.subscribe(() => {
  saveState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;