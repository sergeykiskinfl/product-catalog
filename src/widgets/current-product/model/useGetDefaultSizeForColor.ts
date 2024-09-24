import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getCurrentParams } from "./getCurrentParams";
import useStore from "../../../shared/store";

// Получить доступный размер по умолчанию для цвета
export function useGetDefaultSizeForColor() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentColor = searchParams.get("color");
  const currentProduct = useStore((state) => state.currentProduct);

  useEffect(() => {
   
    if (currentProduct && currentColor) {
      const [, , , , , currentSizeLabel] = getCurrentParams(
        currentProduct,
        searchParams
      );

      if (currentSizeLabel) {
        setSearchParams((searchParams: URLSearchParams) => {
          searchParams.set("size", currentSizeLabel);
          return searchParams;
        });
      } else {
        setSearchParams((searchParams: URLSearchParams) => {
          searchParams.delete("size");
          return searchParams;
        });
      }
    }
  }, [currentColor]);
}
