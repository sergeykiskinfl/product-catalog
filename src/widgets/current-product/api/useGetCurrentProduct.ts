import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useStore from "../../../shared/store";

import { getProduct, getSize } from "../../../shared/api";
import type { Product, Size } from "../../../shared/types";

export function useGetCurrentProduct() {
  const { pathname } = useLocation();
  const productId = +pathname.split("/")[2];

  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  async function getCurrentProduct() {
    try {
      const intermediateResult = (await getProduct(productId)) as Product;
      const colorsArr = intermediateResult.colors;
      const colorsWithFullDescriptionOfSizes = [];

      for (const color of colorsArr) {
        const sizesIdArr = color.sizes;

        const sizesPromises = sizesIdArr.map((id) => {
          if (typeof id === "number") {
            return getSize(id);
          }
        });

        const sizesObjArr = (await Promise.all(sizesPromises)) as Size[];

        const colorWithFullDescription = { ...color, sizes: sizesObjArr };

        colorsWithFullDescriptionOfSizes.push(colorWithFullDescription);
      }

      const result = {
        ...intermediateResult,
        colors: colorsWithFullDescriptionOfSizes,
      };

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
