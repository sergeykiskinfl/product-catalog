import {
  Flex,
  Spacer,
  Link,
  Text,
  VStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import useStore from "../../../shared/store";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./styles.module.css";

export function Navbar(): JSX.Element {
  const productsInCart = useStore((state) => state.productsInCart);

  return (
    <Flex
      as="nav"
      alignItems="center"
      className={styles["container"]}
      bg="gray.300"
    >
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
          {productsInCart.length > 0 ? (
            <Badge pos="absolute" w={5} h={5} borderRadius="999" ml={9} bg="red.600" color="white">
              {productsInCart.length}
            </Badge>
          ) : null}
          <Icon as={AiOutlineShoppingCart} w={7} h={7} />
          <Text fontSize="sm" style={{ whiteSpace: "nowrap" }}>
            Корзина
          </Text>
        </VStack>
      </Link>
    </Flex>
  );
}
