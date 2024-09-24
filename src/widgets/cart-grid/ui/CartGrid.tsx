import { SimpleGrid, Text } from "@chakra-ui/react";

import useStore from "../../../shared/store";
import { CartItem } from "../../../entities/cart-item";

import type { ProductInCart } from "../../../shared/types";
import { handleRemoveFromCart } from "../model/handleRemoveFromCart";

// Сетка товаров для корзины
export function CartGrid(): JSX.Element {
  const productsInCart = useStore((state) => state.productsInCart);
  const setProductsInCart = useStore((state) => state.setProductsInCart);

  return (
    <SimpleGrid
      ml={14}
      columns={2}
      spacing={3}
      minW='1000px'
      onClick={(e) =>
        handleRemoveFromCart(e, setProductsInCart, productsInCart)
      }
    >
      {productsInCart.length > 0 ? (
        productsInCart.map((product: ProductInCart) => {
          const { id, image, category, color, size, price } = product;

          return (
            <CartItem
              key={id}
              id={id}
              image={image}
              category={category}
              color={color}
              size={size}
              price={price}
            ></CartItem>
          );
        })
      ) : (
        <Text as="p" align="center">
          Нет выбранных товаров
        </Text>
      )}
    </SimpleGrid>
  );
}
