import { useEffect } from "react";
import useStore from "../../../shared/store";

import { getProducts } from "../../../shared/api";
import type { Product, Category } from "../../../shared/types";

export function useGetAllCategories() {
  const setCategories = useStore((state) => state.setCategories);

  async function getAllCategories() {
    try {
      const response = (await getProducts()) as Product[];

      const categories: Category[] = response.map((product: Product) => {
        const { id, name, colors } = product;
        const image = colors[0].images[0];

        return { id, name, image };
      });

      setCategories(categories);
    } catch (error) {
      if (error instanceof Error) {
        console.log(
          "error during fetch all products getProducts() === ",
          error.message
        );
      }
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);
}
