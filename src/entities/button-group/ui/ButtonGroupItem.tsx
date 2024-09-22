import { ButtonGroup, Button, Text, Box } from "@chakra-ui/react";
import { MouseEvent } from "react";

import { useSearchParams } from "react-router-dom";


type Props = {
  kind: string;
  header: string;
  titles: string[];
  selectedTitles: string[];
};

export function ButtonGroupItem({
  kind,
  header,
  titles,
  selectedTitles = [],
}: Props) {
  const [, setSearchParams] = useSearchParams();

  function handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const taskBtn = target.closest("button");

    if (!taskBtn || !taskBtn.dataset?.value) return;

    e.preventDefault();
    const value = taskBtn.dataset?.value;

    setSearchParams((searchParams) => {
      searchParams.set(kind, value);
      return searchParams;
    });
  }

  return (
    <Box mt={10}>
      <Text>{header.toUpperCase()}</Text>
      <ButtonGroup mt={3} onClick={(e) => handleClick(e)}>
        {titles.map((title) => {
          const selected = selectedTitles.includes(title);

          return (
            <Button
              key={title}
              color="teal"
              borderColor="black"
              borderRadius="999"
              isDisabled={!selected}
              data-value={title}
            >
              {title}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
