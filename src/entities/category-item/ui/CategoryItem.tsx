import { Card, CardBody, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  name: string;
  image: string;
};

export function CategoryItem({ id, name, image }: Props): JSX.Element {
  
  return (
    <Card maxW="sm" bg="gray.200">
      <CardBody>        
        <Image src={image} alt={name} borderRadius="lg" />
        <Text mt={8} fontSize="2xl">{name}</Text>
      </CardBody>
    </Card>
  );
}
