import {
  Card,
  CardBody,
  Image,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

import type { ProductInCart } from "../../../shared/types";

export function CartItem({
  id,
  image,
  category,
  color,
  size,
  price,
}: ProductInCart): JSX.Element {
  return (
    <Card w="500px" ml={20} bg="gray.300">
      <CardBody>
        <HStack spacing="30px">
          <Image src={image} alt={category} borderRadius="lg" maxW="40%" />
          <VStack>
            <Text fontSize="3xl">{category}</Text>
            <Text fontSize="2xl">Цвет: {color}</Text>
            <Text fontSize="2xl">Размер: {size}</Text>
            <Text fontSize="2xl">Цена: ${price}</Text>
            <Button colorScheme="red" data-id={id}>
              Удалить
            </Button>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
}
