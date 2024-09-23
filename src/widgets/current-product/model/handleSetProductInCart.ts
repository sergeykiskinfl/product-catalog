import type { ProductInCart } from "../../../shared/types";

export function handleSetProductInCart(
  name: string,
  currentColor: string,
  currentSizeLabel: string,
  currentPrice: string,
  currentImage: string,
  productsInCart: ProductInCart[],
  setProductsInCart: (products: ProductInCart[]) => void
) {
  const productInCartObj: ProductInCart = {
    id: [name, currentColor, currentSizeLabel].join("_"),
    category: name,
    color: currentColor,
    size: currentSizeLabel,
    price: currentPrice,
    image: currentImage
  };

  const alreadyInCart = [...productsInCart].some(
    (product) => product.id === productInCartObj.id
  );

  if (alreadyInCart) {
    const chagedProductsInCart = [...productsInCart].map((product) => {
      if (product.id === productInCartObj.id) return productInCartObj;
      return product;
    });

    setProductsInCart(chagedProductsInCart);
  } else {
    const bufferArr = [...productsInCart];

    bufferArr.push(productInCartObj);
    setProductsInCart(bufferArr);
  }
}
