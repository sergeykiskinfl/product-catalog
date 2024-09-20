import { SimpleGrid, Box } from "@chakra-ui/react";

export function ProductsGrid(): JSX.Element {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
}
