import { Card, CardBody, Image, Text, VStack, HStack, Button } from "@chakra-ui/react";
import useStore from "../../../shared/store";
import { useGetCurrentProduct } from "../api/useGetCurrentProduct";
import { ButtonGroupItem } from "../../../entities/button-group";

export function CurrentProduct(): JSX.Element {
  let content: JSX.Element = <Text as="p">Loading...</Text>;

  const sizes = ["XS", "S", "M", "L", "XL"];
  const testColors = ["черный", "белый", "серый", "желтый", "синий"];

  useGetCurrentProduct();
  const currentProduct = useStore((state) => state.currentProduct);

  if (currentProduct) {
    const { name, colors } = currentProduct!;
    const image = colors[0]["images"][0];
    const price = colors[0]["price"];
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
              <ButtonGroupItem header="Размеры" titles={sizes} selectedTitles={sizes} />
              <ButtonGroupItem header="Цвета" titles={testColors} selectedTitles={testColors} />
              
              <Button mt={10} colorScheme="teal">В корзину</Button>  
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    );
  }

  return content;
}
