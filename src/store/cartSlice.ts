import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Load initial state from localStorage
const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Failed to load cart state from localStorage:', e);
    return { items: [] };
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        const newQuantity = item.quantity + action.payload.quantity;
        if (newQuantity >= 1) {
          item.quantity = newQuantity;
        }
      }
    },
  },
});

// Function to save state to localStorage
const saveState = (state: CartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save cart state to localStorage:', e);
  }
};

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// Export saveState for use in the store configuration
export { saveState };