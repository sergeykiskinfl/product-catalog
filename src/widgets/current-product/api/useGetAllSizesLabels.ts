import { useEffect } from "react";
import useStore from "../../../shared/store";

import { getSizes } from "../../../shared/api";

import type { Size } from "../../../shared/types";

export function useGetAllSizesLabels() {
  const setSizesLabels = useStore((state) => state.setSizesLabels);

  async function getAllSizesLabels() {
    try {
      const response = (await getSizes()) as Size[];

      const sizesLabels = response.map((size) => size.label);

      setSizesLabels(sizesLabels);
    } catch (error) {
      if (error instanceof Error) {
        console.log(
          "error during fetch all sizes getAllSizesLabels() === ",
          error.message
        );
      }
    }
  }

  useEffect(() => {
    getAllSizesLabels();
  }, []);

}
