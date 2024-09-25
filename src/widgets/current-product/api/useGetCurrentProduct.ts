import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useStore from "../../../shared/store";
import { useSearchParams } from "react-router-dom";

import { getProduct, getSize } from "../../../shared/api";
import type { Product, Size } from "../../../shared/types";

// Хук для получения данных о выбранном товаре
export function useGetCurrentProduct() {
  const { pathname } = useLocation();
  const productId = +pathname.split("/")[2];

  const setCurrentProduct = useStore((state) => state.setCurrentProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const savedSizedRefArr = useRef<Size[]>([]);

  async function getCurrentProduct() {
    try {
      const response = (await getProduct(productId)) as Product;
      const colorsArr = response!.colors;
      const colorsWithFullDescriptionOfSizes = [];

      for (const color of colorsArr) {
        const sizesIdArr = color.sizes as number[];
        const savedSizesIdArr: number[] = [];
        const extraSizesIdArr: number[] = [];

        sizesIdArr.forEach((id) => {
          if (
            !savedSizedRefArr.current.some((savedSize) => savedSize.id === id)
          ) {
            extraSizesIdArr.push(id);
          } else {
            savedSizesIdArr.push(id);
          }
        });

        const sizesPromises = extraSizesIdArr.map((id) => {
          return getSize(id);
        });

        const extraSizesObjArr = (await Promise.all(sizesPromises)) as Size[];

        extraSizesObjArr.forEach((sizeObj) => {
          const { id } = sizeObj;

          if (
            !savedSizedRefArr.current.some((savedSize) => savedSize.id === id)
          ) {
            savedSizedRefArr.current.push(sizeObj);
          }
        });

        const savedSizesObjArr = savedSizesIdArr.map((id) =>
          savedSizedRefArr.current.find(
            (savedSizeObj) => savedSizeObj.id === id
          )
        );

        const sizesObjArr = [...savedSizesObjArr, ...extraSizesObjArr].sort(
          (a, b) => a!.id - b!.id
        ) as Size[];

        const colorWithFullDescription = { ...color, sizes: sizesObjArr };

        colorsWithFullDescriptionOfSizes.push(colorWithFullDescription);
      }

      const currentProductWithFullDescriptionOfSizes = {
        ...response,
        colors: colorsWithFullDescriptionOfSizes,
      };

      setCurrentProduct(currentProductWithFullDescriptionOfSizes);

      const defaultColor =
        searchParams.get("color") ??
        currentProductWithFullDescriptionOfSizes["colors"][0]["name"];
      const defaultSize =
        searchParams.get("size") ??
        currentProductWithFullDescriptionOfSizes["colors"][0]["sizes"][0][
          "label"
        ];

      // Установка дефолтных значений для цвета и размера
      setSearchParams((searchParams: URLSearchParams) => {
        searchParams.set("color", defaultColor);
        searchParams.set("size", defaultSize);
        return searchParams;
      });
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
    return () => {
      setCurrentProduct(null);
    };
  }, []);
}
