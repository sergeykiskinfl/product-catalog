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
      setProductsInCart: (products) =>
        set((state) => void (state.productsInCart = products)),
    }))
  )
);

export default useStore;
