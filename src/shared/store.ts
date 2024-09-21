import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { ZustandState, ZustandActions } from "./types";

const useStore = create<ZustandState & ZustandActions>()(
  devtools(
    immer((set) => ({
      categories: [],
      setCategories: (categories) =>
        set((state) => void (state.categories = categories)),
    }))
  )
);

export default useStore;
