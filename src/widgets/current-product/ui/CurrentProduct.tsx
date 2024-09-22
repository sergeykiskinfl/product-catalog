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

import { ButtonGroupItem } from "../../../entities/button-group";

export function CurrentProduct(): JSX.Element {
  let content: JSX.Element = <Text as="p">Loading...</Text>;

  const [searchParams] = useSearchParams();

  useGetCurrentProduct();
  useGetAllSizesLabels();
  const currentProduct = useStore((state) => state.currentProduct);
  const sizesLabels = useStore((state) => state.sizesLabels);

  if (currentProduct && sizesLabels.length > 0) {
    const { name, colors } = currentProduct!;
   
    const selectedColors = colors.map((color) => color.name);
    const selectedPhotos = ["Спереди", "Спина"];

    const currentColor = searchParams.get("color");
    const currentColorObj = colors.find(
      (color) => color.name === currentColor
    ) ?? colors[0];
    const selectedSizesLabels = currentColorObj["sizes"]
      .map((size) => {
        if (typeof size === "object") {
          return size.label;
        }
      })
      .filter((item) => item !== undefined);

    const currentPhotoVariant = searchParams.get("photo") ?? "Спереди";
    let image;

    if (currentPhotoVariant === "Спереди") {
      image = currentColorObj["images"][0];
    } else {
      image = currentColorObj["images"][1];
    }
    
    const price = currentColorObj["price"];
    const description = colors[0]["description"];

    content = (
      <Card w="1000px" ml={20} bg="gray.300">
        <CardBody>
          <HStack spacing="40px">
            <Image src={image} alt={name} borderRadius="lg" maxW="40%" />
            <VStack>
              <Text fontSize="3xl">{name}</Text>
              <Text borderRadius="999" bg="teal.500" color="white" p={3}>
                ${price}
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

              <Button mt={10} colorScheme="teal">
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
