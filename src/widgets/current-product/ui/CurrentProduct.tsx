import {
  Card,
  CardBody,
  Image,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import useStore from "../../../shared/store";

import { useSearchParams } from "react-router-dom";

import { useGetCurrentProduct } from "../api/useGetCurrentProduct";
import { useGetAllSizesLabels } from "../api/useGetAllSizesLabels";
import { useGetDefaultSizeForColor } from "../model/useGetDefaultSizeForColor";

import { getCurrentParams } from "../model/getCurrentParams";

import { MemoButtonGroupItem as ButtonGroupItem } from "../../../entities/button-group";

import type { ProductInCart } from "../../../shared/types";

// Текущий отображаемый товар
// Сохранение выбранных харакстеристик товара через URLSearchParams
export function CurrentProduct(): JSX.Element {
  let content: JSX.Element = <Text as="p">Loading...</Text>;

  const [searchParams] = useSearchParams();
  const currentProduct = useStore((state) => state.currentProduct);
  const sizesLabels = useStore((state) => state.sizesLabels);
  const setProductsInCart = useStore((state) => state.setProductsInCart);
  const productsInCart = useStore((state) => state.productsInCart);

  useGetCurrentProduct();
  useGetAllSizesLabels();
  useGetDefaultSizeForColor();

  if (currentProduct && sizesLabels.length > 0) {
    const [
      name,
      selectedColors,
      selectedPhotos,
      selectedSizesLabels,
      currentImage,
      currentSizeLabel,
      currentPrice,
      currentColor,
      description,
    ] = getCurrentParams(currentProduct, searchParams);

    function handleSetProductInCart() {
      const productInCartObj: ProductInCart = {
        id: [name, currentColor, currentSizeLabel].join("_"),
        category: name,
        color: currentColor,
        size: currentSizeLabel,
        price: currentPrice,
        image: currentImage,
      };

      const alreadyInCart = [...productsInCart].some(
        (product) => product.id === productInCartObj.id
      );

      if (!alreadyInCart) {
        const bufferArr = [...productsInCart];

        bufferArr.push(productInCartObj);
        setProductsInCart(bufferArr);
        localStorage.setItem("cart", JSON.stringify(bufferArr));
      }
    }

    content = (
      <Card w="1000px" ml={20} bg="gray.300">
        <CardBody>
          <HStack spacing="90px">
            <Image src={currentImage} alt={name} borderRadius="lg" maxW="40%" />
            <VStack>
              <Text fontSize="3xl">{name}</Text>
              <Text borderRadius="999" bg="teal.500" color="white" p={3}>
                ${currentPrice}
              </Text>
              <Text mt={5}>{description}</Text>
              <ButtonGroupItem
                kind="color"
                header="Цвета"
                titles={selectedColors}
                selectedTitles={selectedColors}
              />
              <ButtonGroupItem
                kind="size"
                header="Размеры"
                titles={sizesLabels}
                selectedTitles={selectedSizesLabels}
              />
              <ButtonGroupItem
                kind="photo"
                header="Фото"
                titles={selectedPhotos}
                selectedTitles={selectedPhotos}
              />

              <Button
                mt={10}
                colorScheme="teal"
                isDisabled={!currentSizeLabel}
                onClick={handleSetProductInCart}
              >
                В корзину
              </Button>
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    );
  }

  return content;
}
