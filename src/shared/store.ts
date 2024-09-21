import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { ZustandState, ZustandActions } from "./types";

const useStore = create<ZustandState & ZustandActions>()(
  devtools(
    immer((set) => ({
      categories: [],
      currentProduct: null,
      setCategories: (categories) =>
        set((state) => void (state.categories = categories)),
      setCurrentProduct: (currentProduct) =>
        set((state) => void (state.currentProduct = currentProduct)),
    }))
  )
);

export default useStore;
