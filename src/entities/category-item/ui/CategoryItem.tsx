import { Card, CardBody, Image, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  image: string;
};

export function CategoryItem({ id, name, image }: Props): JSX.Element {
  return (
    <Link as={ReachLink} to={`/product/${id}`}>
      <Card maxW="sm" bg="gray.300">
        <CardBody>
          <Image src={image} alt={name} borderRadius="lg" />
          <Text mt={8} fontSize="2xl">
            {name}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
}
