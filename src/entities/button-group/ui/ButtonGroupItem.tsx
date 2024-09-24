import { ButtonGroup, Button, Text, Box } from "@chakra-ui/react";

import { useSearchParams } from "react-router-dom";
import { handleBtnGroupClick } from "../model/handelBtnGroupClick";
import { memo } from "react";

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
}: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParam = searchParams.get(kind);

  return (
    <Box mt={10}>
      <Text>{header.toUpperCase()}</Text>
      <ButtonGroup
        mt={3}
        onClick={(e) => handleBtnGroupClick(e, setSearchParams, kind)}
      >
        {titles.map((title) => {
          const selected = selectedTitles.includes(title);

          return (
            <Button
              key={title}
              color="teal"
              borderWidth={currentSearchParam === title ? "2px" : "0px"}
              borderColor="teal"
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

export const MemoButtonGroupItem = memo<Props>(ButtonGroupItem)