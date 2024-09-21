import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useStore from "../../../shared/store";

import { getProduct } from "../../../shared/api";
import type { Product } from "../../../shared/types";

export function useGetCurrentProduct() {
  const { pathname } = useLocation();
  const productId = +pathname.split("/")[2];

  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  async function getCurrentProduct() {
    try {
      const result = (await getProduct(productId)) as Product;
      setCurrentProduct(result);
    } catch (error) {
      if (error instanceof Error) {
        console.log(
          "error during fetch current product getProduct() === ",
          error.message
        );
      }
    }
  }

  useEffect(() => {
    getCurrentProduct();
  }, []);
}
