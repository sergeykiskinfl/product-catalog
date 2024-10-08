import type { ProductInCart } from "../../../shared/types";

// Удаление товара из корзины
export function handleRemoveFromCart(
  e: any,
  setProductsInCart: (products: ProductInCart[]) => void,
  productsInCart: ProductInCart[]
) {
  const target = e.target as HTMLElement;
  const taskBtn = target.closest("button");

  if (!taskBtn || !taskBtn.dataset?.id) return;

  const id = taskBtn.dataset?.id;

  const filteredProucts = [...productsInCart].filter(
    (product) => product.id !== id
  );

  setProductsInCart(filteredProucts);
  localStorage.setItem("cart", JSON.stringify(filteredProucts));

}
