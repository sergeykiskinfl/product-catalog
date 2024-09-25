import { useEffect } from "react";
import useStore from "../../shared/store";

export function useGetLocalSavedCartProducts() {
  const setProductsInCart = useStore((state) => state.setProductsInCart);

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(localStorage, "cart")) {
      const savedCart = JSON.parse(localStorage.getItem("cart") as string);
      setProductsInCart(savedCart);
    }
  }, []);
}
