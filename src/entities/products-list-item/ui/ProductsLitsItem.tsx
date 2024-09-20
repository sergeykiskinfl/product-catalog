import { Card, CardBody, Image, Text, Stack, Heading } from "@chakra-ui/react";

type Props = {
  name: string;
  image: string;
  price: string;
  description: string;
};

export function ProductsListItem({
  name,
  image,
  price,
  description,
}: Props): JSX.Element {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
