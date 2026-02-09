import { create } from "zustand";

type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  qty?: number;
};

type CartStoreState = {
  cart: productType[];
  addToCart: (product: productType) => void;
};

export const useCartStore = create<CartStoreState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find(
        (el) => el.id === product.id
      );

      if (!exists) {
        return {
          cart: [...state.cart, { ...product, qty: 1 }],
        };
      }

      return {
      
      };
    }),
}));
