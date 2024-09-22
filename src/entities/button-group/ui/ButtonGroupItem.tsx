import { ButtonGroup, Button, Text, Box } from "@chakra-ui/react";

type Props = {
  header: string;
  titles: string[];
  selectedTitles: string[];
};

export function ButtonGroupItem({ header, titles, selectedTitles }: Props) {
  return (
    <Box mt={10}>
      <Text>{header.toUpperCase()}</Text>
      <ButtonGroup mt={3}>
        {titles.map((title) => {
          const selected = selectedTitles.includes(title);

          return (
            <Button
              key={title}
              color="teal"
              borderColor="black"
              borderRadius="999"
              isDisabled={!selected}
            >
              {title}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
