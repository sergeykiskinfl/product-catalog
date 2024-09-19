import {
  Flex,
  Box,
  Spacer,
  Heading,
  Link,
  IconButton,
  Text,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Navbar(): JSX.Element {
  return (
   
      <Flex as='nav' p={3} h="5rem" pos="fixed" top={0} left={0} opacity={1} zIndex={100} alignItems='center' w="100%">
        <Link as={ReachLink} to="/" ml={7}>
          <VStack>
            <Icon as={AiOutlineUnorderedList} w={7} h={7} />
            <Text fontSize="sm" style={{ whiteSpace: "nowrap" }}>
              Каталог товаров
            </Text>
          </VStack>
        </Link>
        <Spacer />
        <Link as={ReachLink} to="/cart" mr={14}>
          <VStack>
            <Icon as={AiOutlineShoppingCart} w={7} h={7} />
            <Text fontSize="sm" style={{ whiteSpace: "nowrap" }}>
              Корзина
            </Text>
          </VStack>
        </Link>
      </Flex>
    
  );
}
