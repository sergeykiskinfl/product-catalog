import { Card, CardBody, Image, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  image: string;
};

export function CategoryItem({ id, name, image }: Props): JSX.Element {
  return (
    <Card maxW="sm" bg="gray.300">
      <CardBody>
        <Link as={ReachLink} to={`/product/${id}`}>
          <Image src={image} alt={name} borderRadius="lg" />
          <Text mt={8} fontSize="2xl">
            {name}
          </Text>
        </Link>
      </CardBody>
    </Card>
  );
}
