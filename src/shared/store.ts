import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { ZustandState, ZustandActions } from "./types";

const useStore = create<ZustandState & ZustandActions>()(
  devtools(
    immer((set) => ({
      categories: [],
      productsInCart: [],
      currentProduct: null,
      sizesLabels: [],
      setCategories: (categories) =>
        set((state) => void (state.categories = categories)),
      setCurrentProduct: (currentProduct) =>
        set((state) => void (state.currentProduct = currentProduct)),
      setSizesLabels: (sizesLabels) =>
        set((state) => void (state.sizesLabels = sizesLabels)),
      setProductInCart: (product) =>
        set((state) => {
          const productsInCartArr = [...state.productsInCart].map((pr) => {
            if (pr.id === product.id) {
              return product;
            } else {
              return pr;
            }
          });

          return { productsInCart: productsInCartArr };
        }),
    }))
  )
);

export default useStore;
