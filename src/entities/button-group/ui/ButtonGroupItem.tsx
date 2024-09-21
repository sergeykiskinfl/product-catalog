import { ButtonGroup, Button, Text, Box } from "@chakra-ui/react";

type Props = {
  header: string;
  titles: string[];
};

export function ButtonGroupItem({ header, titles }: Props) {
  return (
    <Box mt={10}>
      <Text>{header.toUpperCase()}</Text>
      <ButtonGroup mt={3}>
        {titles.map((title) => {
          return (
            <Button key={title} color='teal' borderColor="black" borderRadius="999">
              {title}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
